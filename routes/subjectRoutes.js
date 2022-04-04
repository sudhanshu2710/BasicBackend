const express = require('express');
const subjectController = require('../controller/subjectController');

const router = express.Router();
router
  .route('/')
  .get(subjectController.getAllSubject)
  .post(subjectController.createSubject);
router.route('/:id').get().patch().delete();

module.exports = router;
