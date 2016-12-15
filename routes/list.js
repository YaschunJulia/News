let express = require('express');
let router = express.Router();
let store = require('../db.json');

router.get('/', (req, res) => {
  let news = []
  store.news.forEach(item => news.push({id: item.id, title: item.title}))
  res.status(200).json(news);
});

router.get('/:id', (req, res) => {
  let item = store.news.find(item => item.id === +req.params.id);
  if (item) {
    res.status(200).json(item);
  } else {
    res.sendStatus(404, '404 Not found').end();
  }
});

module.exports = router;
