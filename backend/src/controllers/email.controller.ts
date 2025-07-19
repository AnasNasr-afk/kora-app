import { Request, Response } from 'express';
import prisma from './../prisma/client';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function verifyEmail(req: Request, res: Response) {
  const { token } = req.query;

  if (!token || typeof token !== 'string') {
    return res.status(400).json({ message: 'Verification token missing' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    const userId = (payload as any)?.userId;

    if (!userId) {
      return res.status(400).json({ message: 'Invalid token payload' });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.emailVerified) {
      return res.status(400).json({ message: 'Email already verified' });
    }

    await prisma.user.update({
      where: { id: userId },
      data: { emailVerified: true },
    });

    return res.status(200).json({ message: 'Email verified successfully' });
  } catch (err) {
    return res.status(400).json({ message: 'Invalid or expired token' });
  }
}
