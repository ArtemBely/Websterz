import React from 'react';
import Profile from '../../components/Profile';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
const router = express.Router();

router.get('/', isLoggedIn, (req, res, next) => {
  var user = req.user;
  const profile = renderToString(
    <StaticRouter>
      <Profile />
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
                 ${profile}
             </div>
        </body>
    </html>`
    res.send(html);
});

router.get('/logout', isLoggedIn, (req, res, next) => {
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

export default router;
