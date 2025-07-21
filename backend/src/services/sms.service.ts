// import twilio from 'twilio';
// import dotenv from 'dotenv';
// dotenv.config();

// const client = twilio(process.env.TWILIO_SID!, process.env.TWILIO_AUTH_TOKEN!);

// export const sendSMS = async (to: string, code: string) => {
//   await client.messages.create({
//     body: `Your verification code is ${code}`,
//     from: process.env.TWILIO_PHONE!,
//     to,
//     messagingServiceSid: 'MGc9b8c7bf81eb291a3b47fa34c36c8b31',
//   });
// };
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: '70d82ad9',
  apiSecret: 'C4MgMC2Li4RbSGFO',
});

const from = 'Vonage APIs';
// const to = '201211844521';
// const text = 'A text message sent using the Vonage SMS API';

export async function sendSMS(to: string, text: string) {
  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log('Message sent successfully');
      console.log(resp);
    })
    .catch((err) => {
      console.log('There was an error sending the messages.');
      console.error(err);
    });
}
