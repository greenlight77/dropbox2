const router = require('express').Router();
const {checkUserInput} = require('./../middleware')
const {saveUserDetail} = require('./../controllers')
  
  router.post('/user/save', checkUserInput, saveUserDetail);

module.exports = router