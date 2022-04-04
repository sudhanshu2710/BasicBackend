const Student = require('../model/student');

exports.getAllStudent = async (req, res, next) => {
  const students = await Student.find().populate('subject');
  res.status(200).json({
    status: 'success',
    result: students.length,
    data: {
      students: students,
    },
  });
};
exports.createStudent = async (req, res, next) => {
  const students = await Student.create(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      students: students,
    },
  });
};
exports.updateStudent = async (req, res, next) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      student,
    },
  });
};
exports.deleteStudent = async (req, res, next) => {
  const student = await Student.findByIdAndDelete(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: null,
  });
};
exports.getStudent = async (req, res, next) => {
  const student = await Student.findById(req.params.id).populate('reviews');
  res.status(200).json({
    status: 'success',
    result: student.length,
    data: {
      student: student,
    },
  });
};
