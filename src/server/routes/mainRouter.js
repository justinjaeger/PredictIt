const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

router.get( '/asdf',
  // mainController.mainPath,
  (req, res) => {
    res.status(200).send('main router');
  }
);

module.exports = router;
