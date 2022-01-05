import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const body = JSON.parse(req.body);
  //create mail transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.NEXT_PUBLIC_MAIL_USER,
    to: process.env.NEXT_PUBLIC_MAIL_DESTINATION,
    subject: "Recrutation",
    html: `
    <p>name: ${body.name}</p>
    <p>email: ${body.email}</p>
    <p>message: ${body.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);

  return res.status(200).json({ status: true });
};

export default handler;
