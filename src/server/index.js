import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from '../components/App';
import Main from '../components/Main';
import Routes from '../components/routes';
import express from 'express';
import { renderToString } from 'react-dom/server';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';
import validator from 'express-validator';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import flash from 'connect-flash';
import cors from 'cors';
import New_Game from './models/New_Game.js';
import Results from './models/Results.js';

import enterRouter from './routes/enter';
import profileRouter from './routes/profile';
import postRouter from './routes/sendPost';

const app = express();
const CONNECTION_URI = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

require('dotenv/config');

mongoose.connect(
  CONNECTION_URI || process.env.CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    console.log('Connection with database Websterz completed');
  }
);

app.use(function(req, res, next) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0");
  //res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUnitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/login', enterRouter);
app.use('/profile', profileRouter);
app.use('/send_post_to', postRouter);

/*
app.get('/', notLoggedIn, (req, res, next) => {
  let cond = req.isAuthenticated();
  const signin = renderToString(
    <StaticRouter>
       <Main />
    </StaticRouter>
  )
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Проверка кода</title>
                   <link rel="stylesheet" type="text/css" href="main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundle.js' defer></script>
                       <script>window.__INITIAL_STATE__ = ${serialize(cond)}</script>
                       </head>
                     <body>
                   <div id="app">
                 ${signin}
              </div>
            </body>
        </html>`
    );
});
*/

app.get('/', async(req, res, next) => {
    var results = await New_Game.find();
    var allResults = await Results.find();
    var i = results.length;
    var actualGame = results[i - 1];
    var inTimeGame = allResults.filter(nextGame => nextGame.actualGameFinished == actualGame._id);
    inTimeGame.length > 0 ? actualGame = {} : actualGame;
    const main = renderToString(
      <StaticRouter>
        <Main />
      </StaticRouter>
    );
    const html =
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Websterz</title>
              <link rel="icon" href="/images/Group 280.ico" type="image/x-icon" />
              <link rel="stylesheet" type="text/css" href="../main.css">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                  <script src='/bundle.js' defer></script>
                      <script>window.__INITIAL_DATA__= ${serialize(actualGame)}</script>
                        <title>Websterz</title>
                      </head>
                    <body>
                   <div id="app">
                   <div class="main_wrap">
                 ${main}
                 </div>
               </div>
            </body>
        </html>`;
      res.send(html);
});

app.get('*', (req, res, next) => {
  const activeRouter = Routes.find((route) => matchPath(req.url, route)) || {};
  const promise = activeRouter.fetchInitialData ?
                  activeRouter.fetchInitialData(req.path) :
                  Promise.resolve()
  promise.then(data => {
    const context = { data };
    const user = req.user;
    const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
           <App data={data} />
        </StaticRouter>
      )

      const html =
        `<!DOCTYPE html>
            <html>
                <head>
                  <title>Websterz</title>
                  <link rel="icon" href="/images/Group 280.ico" type="image/x-icon" />
                  <link rel="stylesheet" type="text/css" href="../main.css">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                      <script src='/bundle.js' defer></script>
                        <script>window.__INITIAL_DATA__= ${serialize(data)}</script>
                          <script>window.__INITIAL_USER__= ${serialize(user)}</script>
                            <title>Websterz</title>
                          </head>
                        <body>
                       <div id="app">
                     ${markup}
                   </div>
                </body>
            </html>`;

        return res.send(html);
  }).catch(next)
});

/*
function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile');
}
*/
/*
app.use((error, req, res, next) => {
  res.status(error.status);

    res.json({
    status: error.status,
    message: error.message,
    stack: error.stack
  });
});
*/
app.use((req, res, next) => {  //<-- заменить если появится непредвиденная ошибка
   const err = new Error ('Noooo');
     err.status = 404;
     next (err);
});

app.listen(8080, () => {console.log('connected!')});
