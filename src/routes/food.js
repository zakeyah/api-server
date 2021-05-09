'use strict';

const express = require('express');
const router = express.Router();

const validator = require('../middlewares/validator');

const Food = require('../models/data-collection-class');
const foodModel = require('../models/food');
const foodInestance = new Food(foodModel);


router.get('/food', getAllFood);
router.get('/food/:id',validator , getOneFood);
router.post('/food', createNewFood);
router.put('/food/:id',validator, update);
router.delete('/food/:id',validator, deleteOneFood);

async function getAllFood(req, res) {
  let items = await foodInestance.get();
  res.status(200).json(items);
}

async function getOneFood(req, res) {
  let id =  req.params.id;
  let item = await foodInestance.get(id);
  res.status(200).json(item);
}

async function createNewFood(req, res) {
  let obj = req.body;
  let item =await foodInestance.create(obj);
  res.status(200).json(item);
}

async function update(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updateItem = await foodInestance.update(id, obj);
  res.status(200).json(updateItem);
}
async function deleteOneFood(req, res) {
  const id = req.params.id;
  let deleteItem =await foodInestance.delete(id);
  res.json(deleteItem);
}
module.exports = router;