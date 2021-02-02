const express = require('express');
const PORT = 3030;
const path = require('path');
const db = require('../database');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/bechampions/purchase-item', (req,res) => {
  db.db.find({})
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      console.log(err)
    })
})
app.get('/api/bechampions/purchase-item/:id', (req,res) => {
  db.db.findOne({Title: req.params.id})
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      console.log(err)
    })
})

// ADDED CODE FOR SECOND COMPONENT
app.get('/api/bechampions/main', (req, res) => {
  db.db2.find({})
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
})