const mongoose = require('mongoose');

const {Schema } =require('mongoose');

const UserModel = new Schema({
    fname:{
        type: 'string',
    },
    lname:{
        type : 'string',
    },
    email:{
        type : 'string',
    }
})

const blog  = mongoose.model('datas',UserModel)

module.exports = blog