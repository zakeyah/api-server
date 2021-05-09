'use strict';

const mongoose = require('mongoose');
const clothesSchema = mongoose.Schema({
  quantity : {type: Number, required: true},
  colors: {type: String, required: true},
  type: {type: String, enum : ['pants', 't-shirt', 'dress'] }
});

const clothesModel = mongoose.model('clothes', clothesSchema);
module.exports = clothesModel;