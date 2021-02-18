import { Schema, model } from 'mongoose';



const Claims = new Schema({
    manager: {
        type: Boolean,
        default: false,
        required: true
    },
   ceo: {
    type: Boolean,
    default: false,
    required: true
},
 cto: {
    type: Boolean,
    default: false,
    required: true
},

    admin: {
        type: Boolean,
        default: false,
        required: true
    },

    seller: {
        type: Boolean,
        default: false,
        required: true
    },

    buyer: {
        type: Boolean,
        default: false,
        required: true
    },

    client: {
        type: Boolean,
        default: false,
        required: true 
    },
    premium_account : {
         type: Boolean,
         default: false,
         required: true
    },

    free_account : {
        type: Boolean,
        default: false,
        required: true
   },

    app: {
        type: String,
        required: true
    }
    
}, { timestamps: true})

export default  model('claims', Claims)