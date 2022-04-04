const express = require('express');
const studentController = require('../controller/studentContolller');

const router = express.Router();
router
  .route('/')
  .get(studentController.getAllStudent)
  .post(studentController.createStudent);
router.route('/:id').get().patch().delete();

module.exports = router;
