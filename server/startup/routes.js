const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');

const MessageRoutes = require('../Routes/messageRoutes');

module.exports = function (app) {
  /*   app.set('trust proxy', 1); */

  const allowedOrigins = process.env.NODE_ENV === 'production' ? 
  ['https://card-game-deploy-9177bef6cdc3.herokuapp.com/'] : 
  ['http://localhost:3000'];

  app.use(cors({
    origin: allowedOrigins,
    credentials: true,
  }));
  app.use(express.json());
  app.use(cookieParser());

  app.use('/api/message/', MessageRoutes);

};