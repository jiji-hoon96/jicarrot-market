import mail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import {client} from "@libs/server/client";
import twilio from 'twilio';

mail.setApiKey(process.env.MY_EMAIL!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null; 
  if(!user) return res.status(400).json({ok:false})
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if(phone){
    /*
      const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE as string,
      body: `휴대폰 로그인을 위한 Token 은  ${payload} 입니다`,
    });
    console.log(message)
    */
  }else if(email){
    /*
    const email = await mail.send({
      from: "lsy8469@naver.com",
      to: "lsy8469@naver.com",
      subject:"Your Jicarrot market Verification Email",
      text:`이메일 로그인을 위한 Token 은  ${payload} 입니다`,
      html: `<strong>이메일 로그인을 위한 Token 은  ${payload} 입니다</strong>`,
    });
    console.log(email)
    */
  }
  return res.json({
    ok:true
  })
}
export default withHandler("POST", handler);