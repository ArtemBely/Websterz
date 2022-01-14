import React from 'react';
import Enter from '../../components/Enter';
import LoginAdmin from '../../components/LoginAdmin';
import NewPassword from '../../components/NewPassword';
import express from 'express';
import passport from 'passport';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import User from '../models/User.js';
import async from 'async'; //на рабочий сервер
import crypto from 'crypto';
import nodemailer from 'nodemailer';
const router = express.Router();
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

router.get(['/', '/registration', '/recovery'], notLoggedIn, (req, res, next) => {
  var messages = req.flash('errors');
  const enter = renderToString(
    <StaticRouter>
      <Enter />
    </StaticRouter>
  );
  const html =
  `<!DOCTYPE html>
    <html>
        <head>
          <title>Profile</title>
            <link rel="icon" href="/images/Group 280.ico" type="image/x-icon" />
               <link rel="stylesheet" type="text/css" href="../main.css">
                 <meta name="viewport" content="width=device-width, initial-scale=1">
              <script src='/bundle.js' defer></script>
           <script>window.__INITIAL_ERRORS__ = ${serialize(messages)}</script>
        </head>
        <body>
             <div id="app">
                 ${enter}
             </div>
        </body>
    </html>`
    res.send(html);
});

router.get('/admin_router', notLoggedIn, (req, res, next) => {
  var user = req.user;
  const admin = renderToString(
    <StaticRouter>
      <LoginAdmin />
    </StaticRouter>
  );
  const html =
  `<!DOCTYPE html>
    <html>
        <head>
          <title>Profile</title>
               <link rel="stylesheet" type="text/css" href="../main.css">
                 <meta name="viewport" content="width=device-width, initial-scale=1">
              <script src='/bundle.js' defer></script>
              <script>window.__INITIAL_USER__= ${serialize(user)}</script>
        </head>
        <body>
             <div id="app">
                 ${admin}
             </div>
        </body>
    </html>`
    res.send(html);
});

router.post(['/registration', '/admin_router'], notLoggedIn, (req, res, done) => {
  //console.log(req.body);
  const { email, password, scores, votation, arrayOfResults } = req.body;
  console.log(scores);
  req.checkBody("email", "Неверный формат email").isEmail().notEmpty();
  req.checkBody("password", "Минимальная длина пароля - 5 символов").isLength({ min: 5 }).notEmpty();

  var errors = req.validationErrors();
  if(errors) {
    console.log(errors);
    var err = errors.map(er => er.msg);
    const enter = renderToString(
      <StaticRouter>
        <Enter />
      </StaticRouter>
    );
    const html =
    `<!DOCTYPE html>
      <html>
          <head>
            <title>Profile</title>
                 <link rel="stylesheet" type="text/css" href="../main.css">
                   <meta name="viewport" content="width=device-width, initial-scale=1">
                <script src='/bundle.js' defer></script>
              <script>window.__INITIAL_DATA__= ${serialize(err)}</script>
          </head>
          <body>
               <div id="app">
                   ${enter}
               </div>
          </body>
      </html>`
      return res.send(html);
  }

      User.findOne({email: email}, function(err, user) {
      if(err) {return done(err)};
      if(user) {
        const errors = ['Такой email уже зарегистрирован'];
        const cond = req.isAuthenticated();
        const enter = renderToString(
          <StaticRouter>
            <Enter />
          </StaticRouter>
        );
        const html =
        `<!DOCTYPE html>
          <html>
              <head>
                <title>Такой email уже существует</title>
                     <link rel="stylesheet" type="text/css" href="../main.css">
                       <meta name="viewport" content="width=device-width, initial-scale=1">
                    <script src='/bundle.js' defer></script>
                 <script>window.__INITIAL_DATA__= ${serialize(errors)}</script>
              </head>
              <body>
                   <div id="app">
                       ${enter}
                   </div>
              </body>
          </html>`
        res.send(html);
        return done(null, false);
      }
      var newUser = new User({
        email: email,
        password: password,
        scores: scores,
        admin: req.originalUrl == '/login/admin_router' ?
                                  'true' : 'false',
        votation: votation,
        arrayOfResults: arrayOfResults
      });

     User.createUser(newUser, function(err, user) {
         if (err) throw err;
         console.log(user);
    });

    const success = ['Регистрация завершена успешно, можете войти'];
    const enter = renderToString(
    <StaticRouter>
       <Enter />
    </StaticRouter>
    )
    res.send(
    `<!DOCTYPE html>
      <html>
          <head>
            <title>Проверка кода</title>
                 <link rel="stylesheet" type="text/css" href="../main.css">
                   <meta name="viewport" content="width=device-width, initial-scale=1">
                     <script src='/bundle.js' defer></script>
                     <script>window.__INITIAL_DATA__= ${serialize(success)}</script>
                     </head>
                   <body>
                 <div id="app">
               ${enter}
            </div>
          </body>
      </html>`
    );
  });
});

passport.use('local.signin', new LocalStrategy ({
 usernameField: 'email',
 passwordField: 'password',
 passReqToCallback: true
},
 function(req, email, password, done) {
 User.findOne({email: email}, async function(err, user) {
 if(err) {
   console.log(err);
   return done(err);
 }

 if(!user) {
   req.flash('errors', 'Не найдено пользователей');
   console.log('Не найдено пользователей. Ошибка в почте');
   return done(null, false);
 }

 User.comparePassword(password, user.password, function(err, isMatch) {
     if (err) throw err;
     if(isMatch) {
       return done(null, user);
     }
     else {
       req.flash('errors', 'неверный пароль');
       console.log('Неверный пароль');
       return done(null, false)
     }
   });
 });
}));

  router.post('/signin',
    passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    passReqToCallback: true
  })
);

//recovery of password

router.post('/recovery', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.recovery_email }, function(err, user) {
        if(!user) {
          req.flash('errors', 'Не найдено пользователей');
          console.log('Не найдено пользователей. Ошибка в почте');
          return res.redirect('/login/recovery');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; //1hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      const output = `
    <p> Данные о пользователе </p>
    <p> Вы получили данное письмо на почту ${req.body.recovery_email}, потому что мы
    получили от Вас запрос на восстановление пароля. Пожалуйста, перейдите по данной ссылке
    для восстановления пароля: </p>
    <p>https://websterz.team/login/reset/${token}</p>
    <p>Если Вы не запрашивали восстановление пароля, пожалуйста, проигнорируйте это письмо.</p>
    `; //req.headers.host --> на название домена ex.com
    async function main() {
    let transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'w2@acorn.ws', // generated ethereal user
          pass: 'qwertyuiop987654321' // generated ethereal password
        },
        tls:{
          rejectUnauthorized:false  // только для localhost
        }
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Восстановление пароля" <w2@acorn.ws>', // sender address
        to: user.email, // list of receivers vn@goweb.com
        subject: "Восстановление пароля", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    main().catch(console.error);
    req.flash('errors', 'Email с дальнейшей инструкцией был отправлен на Вашу почту.');
    return res.redirect('/login/recovery');
    }
  ]);
});

router.get('/reset/:token', (req, res, next) => {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if(!user) {
      req.flash('errors', 'Токен для сброса пароля недействительный или его время истекло.');
      return res.redirect('/login/recovery');
    }
    const token2 = req.params.token;
    var messages = req.flash('errors');
    const enter = renderToString(
    <StaticRouter>
       <NewPassword />
    </StaticRouter>
    )
    res.send(
    `<!DOCTYPE html>
      <html>
          <head>
            <title>Проверка кода</title>
                 <link rel="stylesheet" type="text/css" href="../../main.css">
                   <meta name="viewport" content="width=device-width, initial-scale=1">
                     <script src='/bundle.js' defer></script>
                     <script>window.__INITIAL_DATA__= ${serialize(token2)}</script>
                     <script>window.__INITIAL_ERRORS__= ${serialize(messages)}</script>
                     </head>
                   <body>
                 <div id="app">
               ${enter}
            </div>
          </body>
      </html>`
    );
  });
});

router.post('/reset/:token', (req, res, next) => {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if(!user) {
          req.flash('errors', 'Токен для сброса пароля недействительный или его время истекло.');
          return res.redirect('/login/recovery');
        }
        if(req.body.recovery_pass == req.body.recovery_pass2) {
          user.password = req.body.recovery_pass;

          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;

                user.save(function(err){
                    if (err) { next(err) }
                    else {
                      console.log(user);
                      res.redirect('/login');
                    }
                });
        }
        else {
          req.flash('errors', 'Пароли не совпадают');
          return res.redirect('back');
        }
      }
    )}
  ]);
});

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}

export default router;
