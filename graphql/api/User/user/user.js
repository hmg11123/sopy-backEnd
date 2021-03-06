import User from "../../../model/User";
import nodemailer from "nodemailer";
import smtpPool from "nodemailer-smtp-pool";

export default {
 Mutation: {
  registUser: async (_, args) => {
   const {
    name,
    email,
    nickName,
    mobile,
    zoneCode,
    address,
    detailAddress,
   } = args;

   try {
    const prevResult = await User.find({ email });
    if (prevResult.length !== 0) {
     console.log("Exist User Email Yet....!");
     return false;
    } else {
     const result = await User.create({
      name,
      email,
      nickName,
      mobile,
      zoneCode,
      address,
      detailAddress,
     });
     return true;
    }
   } catch (e) {
    console.log(e);
    return false;
   }
  },

  tryLogin: async (_, args) => {
   const { email } = args;
   try {
    const exist = await User.find({ email });
    if (exist.length > 0) {
     const randomCode = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];

     const code =
      randomCode[Math.floor(Math.random() * 10)] +
      randomCode[Math.floor(Math.random() * 10)] +
      randomCode[Math.floor(Math.random() * 10)] +
      randomCode[Math.floor(Math.random() * 10)];

     const smtpTransport = nodemailer.createTransport(
      smtpPool({
       service: "Gmail",
       host: "localhost",
       port: "465",
       tls: {
        rejectUnauthorize: false,
       },

       auth: {
        user: "4leaf.hmg@gmail.com",
        pass: "zmaeyzaijjqbwajm",
       },
       maxConnections: 5,
       maxMessages: 10,
      })
     );

     const mailOpt = {
      from: "4leaf.hmg@gmail.com",
      to: email,
      subject: "🔐인증코드 전송 [www.sopy.com]",
      html: `인증코드는 ${code} 입니다.`,
     };

     await smtpTransport.sendMail(mailOpt, function (err, info) {
      if (err) {
       console.error("Send Mail error : ", err);
       smtpTransport.close();
      } else {
       console.log("Message sent : ", info);
       smtpTransport.close();
      }
     });

     const updateResult = await User.updateOne(
      { email },
      {
       $set: {
        secretCode: code,
       },
      }
     );

     return true;
    } else {
     return false;
    }
    // 해당 이메일로 인증코드 전송
    // 전송 후 return true;
   } catch (e) {
    console.log(e);
    return false;
   }
  },
 },
};
