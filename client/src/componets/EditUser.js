import React, {useEffect, useState} from 'react';
import {Button, FormControl, FormGroup, Input, InputLabel, styled, Typography} from "@mui/material";
import {editUser, getUserById} from "../services/CrudApi";
import { useNavigate, useParams} from "react-router-dom";

const FormG = styled(FormGroup)`
          margin: 2rem auto 0 auto;
          width: 50%;
          ${"h3"} {
            font-weight: 600;
            color: #13c797;
            margin: 1.8rem 0;
          },
        ${"div"}{
          margin-bottom: 1rem;
        }`;
const Btn = styled(Button)`
          padding: 10px;
        `;


const defailtValue = {
    name:" ",
    userName:" ",
    email:" ",
    phone:" ",
}

const EditUser = () => {
    const [user,setUser]= useState(defailtValue)
    const {name,userName ,email,phone}= user;

    const onChangeValue = (e) => {
        /*
        --------Why use object[key]:value-------------??????
               *** when any OBJect KEY:valuable &&& VALUE is Variabls
               ***  Then use [KEY]:VAlue
               *** Spread(...user)oparetor use for don't overwrite object key

       * **/
        setUser({...user,[e.target.name]:e.target.value})
    }

    const navigate = useNavigate()
    const {id}= useParams()

    useEffect(()=>{
        loadUserDetails();
    },[])
    const loadUserDetails =async () => {
        const res=  await getUserById(id);
        setUser(res.data)

    }
    const editUserDetails = async () => {
        await editUser(user,id)
        navigate('/all')

    }


    return (
        <FormG>
            <Typography variant="h3">Edit Your User Details</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name="name" value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name="userName" value={userName}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name="email" value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name="phone" value={phone}/>
            </FormControl>
            <FormControl>
                <Btn  variant="contained" onClick={()=>editUserDetails()}>Edit User</Btn>
            </FormControl>

        </FormG>

    );
};

export default EditUser;