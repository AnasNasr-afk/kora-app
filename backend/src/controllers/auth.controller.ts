import { Request, Response } from 'express';
import prisma from '../prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendVerificationEmail } from './../services/email.service';
import { z } from 'zod';

const JWT_SECRET = String(process.env.JWT_SECRET);
if (!JWT_SECRET) throw new Error('JWT_SECRET must be defined');

const SignupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  password: z.string().min(6),
});

export async function signup(req: Request, res: Response) {
  const parsed = SignupSchema.safeParse(req.body);
  if (!parsed.success) {
    return res
      .status(400)
      .json({ message: 'Invalid input', errors: parsed.error.issues });
  }

  const { name, email, phone, password } = parsed.data;

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { phone }],
    },
  });

  if (existingUser) {
    return res
      .status(409)
      .json({ message: 'User with this email or phone already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      phone,
      password: hashedPassword,
      emailVerified: false,
    },
  });

  const emailToken = jwt.sign({ userId: createdUser.id }, JWT_SECRET, {
    expiresIn: '1h',
  });

  const verifyUrl = `${process.env.FRONTEND_URL}/verify-email?token=${emailToken}`;

  try {
    await sendVerificationEmail(name, email, verifyUrl);
    return res.status(201).json({
      message: 'User created. Verification email sent.',
    });
  } catch (err) {
    console.error('Email sending failed:', err);
    // Rollback user if email fails
    await prisma.user.delete({ where: { id: createdUser.id } });
    return res
      .status(500)
      .json({ message: 'Signup failed. Email could not be sent.' });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, phone, password } = req.body;

    if (!email && !phone) {
      return res
        .status(400)
        .json({ message: 'Provide email or phone to login' });
    }

    const user = await prisma.user.findFirst({
      where: { OR: [{ email }, { phone }] },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(401)
        .json({ message: 'Email or password is incorrect' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '7d',
    });

    return res.status(200).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
