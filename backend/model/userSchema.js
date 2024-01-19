const mongoose = require("mongoose"); 
  
const userSchema = mongoose.Schema({ 
    email: {type: String, unique: true},

    name: { type: String,  }, //required: true}, 
    phoneNo: { type: Number,  }, //required: true}, 
    regNo: { type: Number,  }, //required: true },
    branch: { type: String, }, // required:true },
    learnerid: { type: String, }, // required: true},
    upiID: { type: String, }, // required: true},
    txnID: { type: String, }, // required: true},
    screenshot: {type: String, }, // required: true},
    workshops: {type: [String]},
}, {timestamps: true});
  
const userdb = mongoose.model("users", userSchema); 
  
module.exports = userdb; 