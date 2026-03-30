import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
    select: false,
  },
  role: {
    type: String,
    enum: ["customer", "seller", "admin", "support"],
    default: "customer",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
   verificationToken: { type: String, select: false },
    refreshToken: { type: String, select: false },
    resetPasswordToken: { type: String, select: false },
    resetPasswordExpires: { type: Date, select: false },
  },
  { timestamps: true },
);


userSchema.pre("save",async function(rawpassword){
   if(!this.isModified) return;
   this.password = await bcrypt.hash(this.password,12);
})

export default mongoose.model("User",userSchema);
