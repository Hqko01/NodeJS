const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Request for home recieved');
  res.render('about');
});

module.exports = router;