
const mongoose = require('mongoose')
const Patients = require('./patientvariables');
const { Int32 } = require('mongodb');
const Schema = mongoose.Schema
const doctorSchema = new Schema({
    affiliation:{
        type:String,
        required:true
    },
    username: {
        type: String,
        required: true
    }
    ,
    name:{
        type: String,
        required: true
    }
    ,
    email: {
        type: String,
        required: true
    }

    ,
    password: {
        type: String,
        required: true
    }
    ,
    date: {
        type: String,
        required: true
    }

    ,
    education: {
        type: String,
        required: true
    }
    ,
    rate: {
        type: Number,
        required: true
    }

   ,
    patients: {
        type: [
            {
                
        type: mongoose.Types.ObjectId,
        ref:'patient',
        
            }
        ],
        required: false
    }

  ,
    
    speciality:{
        type:String,
        required:true
    }
,appointments:{
    type:[
        {
           patient:    {
                
            type: mongoose.Types.ObjectId,
            ref:'patient',
             
        },
        time:{
            type:TimeRanges
        },
        date:{
            type:Date
        },
    }
    ]
}

,price:{
    type:Number
},
wallet: {
    type:Number
}

})

const doctor= mongoose.model('request', doctorSchema);
module.exports = doctor;