'use strict';
require('dotenv').config();

const server = require('./src/server');
const mongoose = require('mongoose');
const MONGODB_URI =process.env.MONGODB_URI;

const PORT = process.env.PORT || 3001;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
  .then(()=>{ 
    console.log('conntected to mongoDB');

    server.start(PORT);
  })
  .catch((err)=> console.log(err));
