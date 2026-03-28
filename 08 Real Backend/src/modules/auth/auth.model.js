import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        trim: true,
        minlength: 2,
        maxlength:50,
        required:[ true, "Name is required"]
    },
    email:{
        type:String,
        trim: true,
        required:[true,"Email is required"],
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required : [true, "Password is required"],
        minlength: 8,
        select: false
    },
    role: {
        type : String,
        enum : ["customer" , "seller" , "admin"],
        default : "customer"
    },
    isVerified: {
        type : Boolean,
        default : false
    },
    verificationToken: {type : String, select : false},
    refreshToken : {type : String , select : false},
    resetPasswordToken : {type : String , select : false},
    resestPasswordExpires : {type : Date, select: false},

},{timestamps:true})

// Let's write some middlewares or hooks like we will save the hashedpassword in DB
userSchema.pre('save',async function(next){
      if(!this.isModified("password")) return next(); // As it is not necessary to kickin this middleware everytime we want it to kicking only when there is interction with password.
      this.password = await bcrypt.hash(this.password,12);
      next();
})

userSchema.methods.comparePassword = async function(clearTextPassowrd){
    return bcrypt.compare(clearTextPassowrd,this.password);

}

export default mongoose.model("User",userSchema);