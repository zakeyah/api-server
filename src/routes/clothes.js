'use strict';

const express = require('express');
const router = express.Router();

const validator = require('../middlewares/validator');

const Clothes = require('../models/data-collection-class');
const clothesModel = require('../models/clothes');
const clothesInestance = new Clothes(clothesModel);


router.get('/clothes', getAllclothes);
router.get('/clothes/:id',validator , getOneclothes);
router.post('/clothes', createNewclothes);
router.put('/clothes/:id',validator, update);
router.delete('/clothes/:id',validator, deleteOneclothes);

async function getAllclothes(req, res) {
  let items = await clothesInestance.get();
  res.status(200).json(items);
}

async function getOneclothes(req, res) {
  let id =  req.params.id;
  let item = await clothesInestance.get(id);
  res.status(200).json(item);
}

async function createNewclothes(req, res) {
  let obj = req.body;
  let item =await clothesInestance.create(obj);
  res.status(200).json(item);
}

async function update(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updateItem = await clothesInestance.update(id, obj);
  res.status(200).json(updateItem);
}
async function deleteOneclothes(req, res) {
  const id = req.params.id;
  let deleteItem =await clothesInestance.delete(id);
  res.json(deleteItem);
}
module.exports = router;