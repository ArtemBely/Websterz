import React from 'react';
import serialize from 'serialize-javascript';
const express = require('express');
import nodemailer from 'nodemailer';
const router = express.Router();

router.post('/', (req, res, next) => {

  //Подключение капчи
  /*
  if(req.body.captcha === undefined ||
     req.body.captcha === '' ||
     req.body.captcha === null
   ) {
     return res.json({"success": false, "msg" : "Пожалуйста, заполните капчу"});
   }

      const secretKey = process.env.SECRET_KEY;

      //Verify URL
      const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}
      &remoteip=${req.connection.remoteAddress}`;

      //Make Request To verifyUrl
      request(verifyUrl, (err, response, body) => {
        body = JSON.parse(body);

        if(body.success != undefined && !body.success) {
          return res.json({"success": false, "msg" : "Пожалуйста, заполните капчу корректно"});
        }

        return res.json({"success": true, "msg" : "Верификация успешна"});
      });
  */

      const output = `
    <p> Данные о посетителе </p>
    <ul>
    <li> Email: ${req.body.email} </li>
    <li> Question: ${req.body.question} </li>
    </ul>
    `;
    async function main() {
    let transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'websterz@acorn.ws', // generated ethereal user
          pass: 'qwertyuiop987654321' // generated ethereal password
        },
        tls:{
          rejectUnauthorized:false  // только для localhost
        }
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Order from site" <websterz@acorn.ws>', // sender address
        to: "vn@goweb.com", // list of receivers vn@goweb.com
        subject: "New partner ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    main().catch(console.error);
    return res.redirect('/');
});

export default router;
