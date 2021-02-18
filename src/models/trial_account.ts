import mongoose, { Schema, model } from 'mongoose';




const Claims = new Schema({
    manager: {
        type: Boolean,
        default: false,
        required: true,
    },
   expire: {
       type: Date,
       createdAt: mongoose.NativeDate
   }
    
}, { timestamps: true})

export default  model('claims', Claims)