import nodemailer from 'nodemailer';
import { verificationEmail } from './../utils/generateEmail';
export const sendVerificationEmail = async (
  name: string,
  to: string,
  verifyUrl: string
) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"PlayZone" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Verify Your Email',
    html: verificationEmail(name, verifyUrl),
  });
};
