import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
title:{
    type: String,
    required:true,
},
price:{
    type: String,
    required:true,
    unique:true
},
maxPeople:{
    type: Number,
    required:true
},
desc:{
   type: String,
   required: true
},
roomNumbers:[{
    number:Number, unavailabelDates: {type:[Date]} }],

}
,{timestamps:true});

export default mongoose.model("Room", RoomSchema)