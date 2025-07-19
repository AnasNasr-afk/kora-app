import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const client = twilio(process.env.TWILIO_SID!, process.env.TWILIO_AUTH_TOKEN!);

export const sendSMS = async (to: string, code: string) => {
  await client.messages.create({
    body: `Your verification code is ${code}`,
    from: process.env.TWILIO_PHONE!,
    to,
    messagingServiceSid: 'MGc9b8c7bf81eb291a3b47fa34c36c8b31',
  });
};
