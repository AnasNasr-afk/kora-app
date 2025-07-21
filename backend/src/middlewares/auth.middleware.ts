import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from './../prisma/client';

// Must call "authorize" first
export function adminAuthorization(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.user) {
    return res.status(401).json({
      message: 'Unauthorized access, please log in and try again',
    });
  }
  if (req.user.role != 'ADMIN') {
    return res.status(401).json({
      message: 'Unauthorized access, you are not authorized to do this action',
    });
  }
  next();
}
const JWT_SECRET: string = process.env.JWT_SECRET;

export async function authorize(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized access, please log in and try again',
    });
  }
  if (token.startsWith('Bearer')) {
    token = token.split(' ')[1];
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;

    const userId = payload.userId;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(401).json({
        message: 'User does not exist, please log in and try again',
      });
    }

    req.user = user;
  } catch (error) {
    console.log('Error in Authorize function', error);
    return res.status(401).json({
      message: 'Expired or invalid session, please log in and try again',
    });
  }

  next();
}
