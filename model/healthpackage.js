const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const packagechema = new Schema({
 name:{
    type:String
 },
 price:{
    type:String
 },
 subscriptions: [
   {
     packageType: {
       type: String,
       required: true,
     },
     status: {
       type: String,
       enum: ['subscribed', 'unsubscribed', 'cancelled'],
       required: true,
     },
     renewalDate: {
       type: Date,
       required: function () {
         return this.status === 'subscribed';
       },
     },
     endDate: {
       type: Date,
       required: function () {
         return this.status === 'cancelled';
       },
     },
   },
 ],

 
});






const package = mongoose.model('package', packagechema);
module.exports = package;