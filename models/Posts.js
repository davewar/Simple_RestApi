const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
          title: {type: String, trim:true, required: true},
          desc: {type: String, trim:true}
    

})
//
module.exports = mongoose.model('Posts', PostSchema)