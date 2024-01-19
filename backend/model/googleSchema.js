const mongoose = require("mongoose"); 
  
const googleSchema = mongoose.Schema({ 
    googleId: {type: Number, unique: true},
    googleName: {type: String},
    email: {type: String, unique: true},
    registered: {type: Boolean, },
}, {timestamps: true});
  
const googledb = mongoose.model("googleUsers", googleSchema); 
  
module.exports = googledb; 