const mongoose = require('mongoose');

const subject = new mongoose.Schema(
    {
      name:{
        type: String,
        required: [true, 'A subject must have a name'], 
        unique: true,
      }
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
    }
  );

const Subject = mongoose.model('Subject', subject);

module.exports = Subject;