import { Request, Response, NextFunction } from 'express';

export function validateSignup(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).json({
      message: 'Name, email, phone, and password are required',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: 'Password must be at least 6 characters or more',
    });
  }

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[c0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!String(email).toLowerCase().match(emailRegex)) {
    return res.status(400).json({
      message: 'Please provide a valid email',
    });
  }

  if (!phone.startsWith('+201')) {
    return res.status(400).json({
      message: 'Phone number must start with +201 (Egyptian format)',
    });
  }

  next();
}

export function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { email, phone, password } = req.body;

  if (!(email || phone) || !password) {
    return res.status(400).json({
      message: 'Email or phone and password are required',
    });
  }

  next();
}
