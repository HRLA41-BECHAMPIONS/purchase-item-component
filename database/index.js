const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/purchase-item-component';

let connection = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to Db');
  })
  .catch((err) => {
    console.log(err);
  });

let Schema = mongoose.Schema({
  Title: String,
  Price: Number,
  Color: Array,
  Size: Array,
  Quantity: Number,
  Style: String
});

let schema2 = mongoose.Schema({
  title: String,
  imgurl: Array
});

let db2 = mongoose.model('Main', schema2);
let db = mongoose.model('Purchase-Item', Schema);

module.exports = {db, db2};
