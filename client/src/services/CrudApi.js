
import axios from "axios";
import cogoToast from "cogo-toast";
// import {createMuiTheme} from "@mui/material";
import toast from "react-hot-toast";

const url = "http://localhost:5000";
export const addUser = async (data)=>{
    try{
         return await axios.post(`${url}/add`,data )
    }catch (err) {
        console.log("Error While calling in AddUser name", err)
    }
}

export const getUsers = async(data)=>{
    try {
       return await axios.get(`${url}/all`)
    }catch (err) {
        console.log("Error While colling GETUSER " , err)
    }
}

export const getUserById =async (id)=>{
    try{
        return axios.get(`${url}/${id}`)
    }catch (err) {
        cogoToast.error("!Fail, Tay Again", {position:"top-center"})
        console.log("Error While Calling GetUserWithId API", err)
    }
}


// update uer by id
export const editUser = async (user,id)=>{
    try{
        return await axios.post(`${url}/${id}`,user)
    }catch (err) {
        console.log("Error While Coolling collain editUser API", err)
    }
}


export const DeleteUser=async (id)=>{
    try{
         return await axios.delete(`${url}/${id}`)
    }catch(err){
        toast.error("!Delete Fail!!", {position:"top-center"})
        console.log("While While colling Delete API ", err)
    }
}