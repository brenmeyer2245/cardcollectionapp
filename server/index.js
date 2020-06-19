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

//db will go here
const firebase = require('firebase-admin');


const PORT  = process.env.PORT || 8080;
const app = express();
module.exports = app;




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
  //TODO: Sync DB
  await initializeServer()
  await beginListening()
}


if (require.main === module) {
  bootApp()
} else {
  initializeServer()
}
