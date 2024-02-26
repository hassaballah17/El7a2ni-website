const express= require('express')
const mongoose=require('mongoose')
const {createpatient, addmember, viewfamily, viewdocss,viewSubscriptionStatus}= require('./routes/patient')
const { createdoctor,updatedoc,viewpatient,addHealthRecord,viewAppointments,viewAvailableAppointments} = require('./routes/doctors')
const { deleteuser, docreqs, createadmin, viewapt, viewpres, viewdocapt, deletepack, addpack, updatepack } = require('./routes/admin')
require ('dotenv').config()
const app = express()
const cors = require('cors');

app.use(express.json())
app.use(cors())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.get('/',(req,res)=>{
    res.json({Mssg:'Sign up'})
})
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    app.listen(process.env.PORT,()=>{
        console.log('listening to db ',process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})


app.delete("/deleteruser",deleteuser)
app.post("/createpatient",createpatient)
app.post("/createdoctor",createdoctor)
app.post("/createadmin",createadmin)
app.put("/updatedoc",updatedoc)
app.post("/addmember",addmember)
app.get("/family",viewfamily)
app.get("/patientapt",viewapt)

app.get("/doctorapt",viewdocapt)
app.get("/pres",viewpres)
//app.get("/viewpatients",viewpatients)
app.get("/alldocs",viewdocss)
app.get("/viewSubscriptionStatus",viewSubscriptionStatus)
app.patch("/addHealthRecord",addHealthRecord);


app.get('/viewAppointments', viewAppointments);
app.get('/viewAvailableAppointments', viewAvailableAppointments);
app.get('/viewSubscriptionStatus', viewSubscriptionStatus);
















//app.get('/viewAppointments', viewAppointments);












app.get("/viewdoctors",docreqs)
app.delete('/deletepack',deletepack)
app.post('/addpack',addpack)
app.post('/updatepack',updatepack)
