'use strict';

const express = require('express');
const notFound = require('./handllers/404');
const errorHandller= require('./handllers/500');
const logger = require('./middlewares/logger');
const foodRouter= require('./routes/food');
const clothesRouter= require('./routes/clothes');

const app = express();


app.use(express.json());
app.use(logger);
app.use(foodRouter);
app.use(clothesRouter);

app.get('/',(req,res)=>{
  res.send('all good');
});



function start(port){
  app.listen(port,()=>console.log(`listen to PORT : ${port}`));
}
app.use('*',notFound);
app.use(errorHandller);
module.exports={
  app,
  start
};

