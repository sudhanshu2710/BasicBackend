const Subject = require('../model/subject');

exports.getAllSubject = async (req, res, next) => {
  const subjects = await Subject.find();
  res.status(200).json({
    status: 'success',
    result: subjects.length,
    data: {
      subjects: subjects,
    },
  });
};
exports.createSubject = async (req, res, next) => {
  const subject = await Subject.create(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      subject: subject,
    },
  });
};
