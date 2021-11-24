import React from 'react';
import Enter from '../../components/Enter';
import express from 'express';
import passport from 'passport';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import User from '../models/User.js';
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

router.get(['/', '/registration'], notLoggedIn, (req, res, next) => {
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

router.post('/registration', notLoggedIn, (req, res, done) => {
  //console.log(req.body);
  const { email, password, scores } = req.body;
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
        scores: scores
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
   req.flash('errors', 'Не найдено пользователей или неверный пароль');
   console.log('Не найдено пользователей. Ошибка в почте');
   return done(null, false);
 }

 User.comparePassword(password, user.password, function(err, isMatch) {
     if (err) throw err;
     if(isMatch) {
       return done(null, user);
     }
     else {
       req.flash('errors', 'Не найдено пользователей или неверный пароль');
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

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}

export default router;
