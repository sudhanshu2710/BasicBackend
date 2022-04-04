const mongoose = require('mongoose');

const student = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A student must have a name'],
      unique: true,
    },
    subject: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Subject',
        required: [true, 'Review must belong to a user'],
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Student = mongoose.model('student', student);

module.exports = Student;
