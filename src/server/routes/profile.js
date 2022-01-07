import React from 'react';
import Profile from '../../components/Profile';
import Vote from '../../components/Vote';
import New_Game from '../models/New_Game.js';
import Votation from '../models/Vote.js';
import Results from '../models/Results.js';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
const router = express.Router();

require('dotenv/config');

aws.config.update({
  secretAccessKey: process.env.s3_secretAccessKey,
  accessKeyId: process.env.s3_accessKeyId,
  region: process.env.s3_bucketRegion
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if( file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetipe === 'image/svg') {
    cb(null, true);
  }
  else  { cb(null, false); }
};

var upload = multer({
  fileFilter: fileFilter,
  limits:{ fileSize: 5000000 },
  storage: multerS3({
    s3: s3,
    bucket: 'websterzgbn',
    //acl: 'public-read',  // --> требуются настройки доступа в aws s3, чтобы использовать данный параметр
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
});

router.get('/', isLoggedIn, async (req, res, next) => {
  var user = req.user;

    var results = await New_Game.find();
    var allResults = await Results.find();
    var i = results.length;
    var actualGame = results[i - 1];
    var inTimeGame = allResults.filter(nextGame => nextGame.actualGameFinished == actualGame._id);
    inTimeGame.length > 0 ? actualGame = {} : actualGame;

    if(user.votation.length > 0 && typeof user.votation[0] == 'object') {

      console.log(allResults);
      var exactGame = allResults.filter(result =>
        result.actualGameFinished == user.votation[0].actGameId);
        console.log('game is: ' + exactGame);  // --> фильтрация результата последней актуальной игры

        if(exactGame.length > 0 && user.admin == 'false') {
          var actualScoreGame = results.filter(result2  =>
          result2._id == exactGame[0].actualGameFinished);
          console.log('act game is ' + actualScoreGame); // --> нахождение параметров последней актуальной игры для выставления баллов

          var finalScores = 0;
          user.votation[0].score1 == exactGame[0].scores_final &&
          user.votation[0].score2 == exactGame[0].scores_final2 ?
          finalScores += parseInt(actualScoreGame[0].scoresOfGame) : finalScores += 0;

          user.votation[0].firstKill == exactGame[0].kill_final ?
          finalScores += parseInt(actualScoreGame[0].firstKillOfGame) : finalScores += 0;

          user.votation[0].minutes == exactGame[0].time_final ?
          finalScores += parseInt(actualScoreGame[0].timeOfGame) : finalScores += 0;

          user.votation[0].kills == exactGame[0].team_kill_final ?
          finalScores += parseInt(actualScoreGame[0].killsOfTeam) : finalScores += 0;

          user.votation[0].bestKd == exactGame[0].kd_final ?
          finalScores += parseInt(actualScoreGame[0].kdOfTeam) : finalScores += 0;

          user.scores = parseInt(user.scores) + finalScores;
          user.votation.splice(0, 1);
          user = await user.save();
        }
    }

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
          <link rel="icon" href="/images/Group 280.ico" type="image/x-icon" />
               <link rel="stylesheet" type="text/css" href="../main.css">
                 <meta name="viewport" content="width=device-width, initial-scale=1">
              <script src='/bundle.js' defer></script>
              <script>window.__INITIAL_USER__= ${serialize(user)}</script>
              <script>window.__INITIAL_GAME__= ${serialize(actualGame)}</script>
        </head>
        <body>
             <div id="app">
                 ${profile}
             </div>
        </body>
    </html>`
    res.send(html);
});

router.get('/vote', isLoggedIn, async (req, res, next) => {
  var user = req.user;

    var results = await New_Game.find();
    var allResults2 = await Results.find();
    var i = results.length;
    var actualGame = results[i - 1];
    var inTimeGame = allResults2.filter(nextGame => nextGame.actualGameFinished == actualGame._id);
    inTimeGame.length > 0 ? actualGame = {} : actualGame;

  const vote = renderToString(
    <StaticRouter>
      <Vote />
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
              <script>window.__INITIAL_USER__= ${serialize(user)}</script>
              <script>window.__INITIAL_GAME__= ${serialize(actualGame)}</script>
        </head>
        <body>
             <div id="app">
                 ${vote}
             </div>
        </body>
    </html>`
    res.send(html);
});

router.post('/start_game', upload.single('logoOfEnemy'), async (req, res, next) => {
   var { nameOfEnemy, linkToGame, startOfGame, scoresOfGame,
   firstKillOfGame, timeOfGame, killsOfTeam, kdOfTeam } = req.body;
   let fileName = req.file != null ? req.file.location : null;
   let newGame = new New_Game({
     nameOfEnemy: nameOfEnemy,
     logoOfEnemy: fileName,
     linkToGame: linkToGame,
     startOfGame: startOfGame,
     scoresOfGame: scoresOfGame,
     firstKillOfGame: firstKillOfGame,
     timeOfGame: timeOfGame,
     killsOfTeam: killsOfTeam,
     kdOfTeam: kdOfTeam
   });
   try {
     newGame = await newGame.save();
     console.log(newGame);
     res.redirect('/profile');
   }
   catch(err) {
     if (err) throw err;
     console.log(err);
   }
});

router.post('/finish_game', async (req, res, next) => {
  var { scores_final, scores_final2, kill_final, time_final,
        team_kill_final, kd_final, actualGameFinished } = req.body;
  let results = new Results({
    scores_final: scores_final,
    scores_final2: scores_final2,
    kill_final: kill_final,
    time_final: time_final,
    team_kill_final: team_kill_final,
    kd_final: kd_final,
    actualGameFinished: actualGameFinished
  });
  try {
    results = await results.save();
    console.log(results);
    res.redirect('/profile');
  }
  catch(err) {
    console.log(err);
  }
});

router.post('/vote/results', async (req, res, next) => {
  var user = req.user;
  if(user.arrayOfResults[0] && user.arrayOfResults[0].length < 1) {
    user.arrayOfResults.splice(0, 1);
  }
  var { score1, score2, firstKill, minutes, kills, bestKd, actGameId } = req.body;
  let votation = new Votation({
    score1: score1,
    score2: score2,
    firstKill: firstKill,
    minutes: minutes,
    kills: kills,
    bestKd: bestKd,
    actGameId: actGameId
  });
  user.arrayOfResults.push(actGameId);
  try {
    user.votation[0] = votation;
    user.markModified('votation');
    user = await user.save();
    console.log(user);
  }
  catch(err) {
    console.log(err);
  }
  finally {
    res.redirect('/profile');
  }
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
