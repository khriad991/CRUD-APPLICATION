
import User from "../Models/UserModel.js"

export  const  AddUser =async (req, res)=>{
    const user = req.body;
    const newUser = new User(user);
    try{
        await newUser.save();
        res.status(201).json(newUser)

    }catch (err) {
        res.status(409).json({massage:err.massage})
        console.log("Error While colling Add User ", err)
    }
}

export const getUser= async (req,res)=>{
    try{
        const users = await User.find({}) // {} for use All User Collection data get
        res.status(200).json(users)
    }catch (err) {
        res.status(400).json({massage:err.massage})
    }
}



/// Update One bY ID ---------------
export const getUserById = async (req,res)=>{
    try{
        // const user = await  User.find({_id:req.params.id}) /// Wqay -----1
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    }catch (err) {
      res.status(400).json({massage:err.massage})
    }}


export const editUser = async (req,res)=>{
    let user = req.body;
    let newUser = new User(user)
    try{
        await User.updateOne({_id:req.params.id},newUser)
        res.status(201).json(newUser)
    }catch (err) {
        res.status(400).json({massage:err.massage})
    }

}


export const deleteUser = async (req,res)=>{
    try {
        let deleteId = req.params.id
        await User.deleteOne({_id:deleteId})
            res.status(200).json({massage: "User Delet Success"})
        console.log("User Delete Success")
    }catch (err) {
        res.status(400).json({massage:err.massage})
    }

}





