const mongoose=require('mongoose');


const serviceSchema =new mongoose.Schema({

    title: {
        type:String,
        required: [true, "Please enter product title"]
    },
    description: {
        type:String,
        required: [true, "Please enter product description"]
    },
    userId: {
        type:mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "Please enter product userId"]
    },
    postType:{
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: [true, "Please enter product price"]
    },
    views: {
        type:Number,
        default: 0
    },
},{ 
    timestamps:true
} )


module.exports = mongoose.model('Service_Posts',serviceSchema);
