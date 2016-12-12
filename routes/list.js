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
  item = {html: item.html};
  if (item) {
    res.json(item).status(200);
    // res.json({html: `${item.html}`}).status(200);
  }
  res.sendStatus(404, '404 Not found');
});

module.exports = router;
