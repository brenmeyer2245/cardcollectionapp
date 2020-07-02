const path = require('path');

//express server
const express = require('express');

//logging middleware
const morgan = require('morgan');
//compression middleware
const compression = require('compression');

//session storage
const session = require('express-session');
//user registration
const passport = require('passport');

const db = require('./db')

const PORT  = process.env.PORT || 8080;
const app = express();
module.exports = app;



if (process.env.NODE_ENV !== 'production') require('../secrets')
const initializeServer = () => {
  //logging middleware
  app.use(morgan('dev'));

  //set up body parsing
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  //compression
  app.use(compression());

  //TO DO: set up session storage
  //along with passport and user recognition

  //TODO: Auth and Api Routes
  app.use(express.static(path.join(__dirname, '..', 'public')))

  //root => send index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })
}


const beginListening = () => {
    const server = app.listen(PORT, () => {
      console.log("Server is now live on port " + PORT );
    })
}


const bootApp = async () => {
  await syncDb()
  await initializeServer()
  await beginListening()
}

const syncDb = () =>  db.sync({force: true})

if (require.main === module) {
  bootApp()
} else {
  initializeServer()
}
