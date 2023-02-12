
import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment"
const dataSchema= mongoose.Schema({
    name:String,
    userName:String,
    email:String,
    phone:String
},{versionKey:false})
    autoIncrement.initialize(mongoose.connection)
    dataSchema.plugin(autoIncrement.plugin, "CodeUser")

const User = mongoose.model("CodeUser" ,dataSchema)
export default User;
