const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = new Schema({
    username: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    followUpAppointments: [
        {
          scheduledDate: {
            type: Date,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
        },
      ],
    healthRecords: [
      {
        doctorUsername: {
            type: String,
            required: true,
          },
        recordDate: {
          type: Date,
          required: true,
        },
        bloodPressure: {
          type: String, 
          required: true,
        },
        temperature: {
          type: String, 
          required: true,
        },
        symptoms: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
      },
    ],
    wallet: {
      type: Number,
      required:false
    },
  });

const Patients = mongoose.model('patient', patientSchema);
module.exports = Patients;



