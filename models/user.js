var mongoose = require('mongoose');
//MongoDB schema for users
module.exports = mongoose.model("User",{
  username : {
    type : String,
    required : true
  },
  email : String,
  name : String,
  password : {
    type : String,
    required : true
    },
  submitted_templates:[{
      name : String,
      id : String
  }]
});