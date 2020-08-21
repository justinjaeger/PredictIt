// const db = require('../models/model');

const mainController = {};

//======= MAIN PATH ========//
mainController.mainPath = async (req, res, next) => {
  console.log('Reached mainPath in mainController')

  try {
    res.send(console.log('sending from main path'))
    next();
  } catch(err) { next(err) }
};

module.exports = mainController;
