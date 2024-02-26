const model =require('../model/adminvariables');
const doctor = require('../model/doctorvariables');
const Patients = require('../model/patientvariables');

const packages = require('../model/healthpackage');

const createadmin = async(req,res) => {
    //add a new user to the database with 
    //Name, Email and Age
 
 const {username,email,password}=req.body;
 console.log(req)
 var book1 = new model({ username:username,email:email,password:password});
  
     // save model to database
   await book1.save();
 }
 const deleteuser= async(req,res)=>{
    console.log(req)
const {username}=req.query;

await model.findOneAndDelete({username: username});



 await
  Patients.findOneAndDelete({username: username},
  );

  await doctor.findOneAndDelete({username: username});

  
  
res.send('done');

 }

 const docreqs= async(req,res)=>{
    res.send( await doctor.find())
 }

 
const updatepack = async (req, res) => {
    const {name,price}=req.body;
   
<<<<<<< HEAD
  await packages.updateOne({name:name},{$set:{price:price}}).exec()
=======
  await packages.updateOne({name:name},{$set:{rate:rate,affialiation:affialiation,Email:Email}}).exec()
>>>>>>> Saleh

 res.send('done');
   }

   const addpack = async (req, res) => {
    const {name,price}=req.body;
    var book1 = new packages({ name:name,price:price});
  
    // save model to database
  await book1.save();
 res.send('done');
   }
   
 const deletepack= async(req,res)=>{
<<<<<<< HEAD
    const {name}=req.query;
    await packages.findOneAndDelete({name:name})
    console.log(req)
    res.send('done')
=======
    const {name}=req.body;
    await packages.findByIdAndDelete({name:name})
>>>>>>> Saleh
 }   
 
  
 const viewapt= async(req,res)=>{
  
  const {username}=req.query
  const appointments= await Patients.findOne({username:username}).populate('appointments.doctor')
  console.log(appointments)
res.send(appointments)
}   


const viewdocapt= async(req,res)=>{
  
  const {username}=req.query
  const {appointments}= await doctor.findOne({username:username}).populate('appointments.patient')
  console.log(appointments)
res.send(appointments)
}   
const viewpres= async(req,res)=>{
  
  const {username}=req.query
  const {pres}= await Patients.findOne({username:username}).select('pres -_id').exec()
 console.log(pres)
res.send(pres)
}   

 
 
<<<<<<< HEAD
 module.exports={createadmin,deleteuser,docreqs,viewapt,viewpres,viewdocapt,deletepack,addpack,updatepack}
=======
 module.exports={createadmin,deleteuser,docreqs,viewapt,viewpres,viewdocapt}
>>>>>>> Saleh
