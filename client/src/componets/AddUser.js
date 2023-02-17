import React, { useState} from 'react';
import {Button, FormControl, FormGroup, Input, InputLabel, styled, Typography} from "@mui/material";
import {addUser} from "../services/CrudApi";
import {useNavigate} from "react-router-dom";
import cogoToast from "cogo-toast";



    const FormG = styled(FormGroup)`
      margin: 6rem auto 0 auto;
      width: 50%;
        ${"h3"} {
            font-weight: 600;
            color: #13c797;
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

const AddUser = () => {
    const [user, setUser]= useState(defailtValue)

    const onChangeValue = (e) => {
        console.log(e.target.value,e.target.name)
     /*
     --------Why use object[key]:value-------------??????
            *** when any OBJect KEY:valuable &&& VALUE is Variabls
            ***  Then use [KEY]:VAlue
            *** Spread(...user)oparetor use for don't overwrite object key

    * **/
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }
    
    /// ONclick Actioln
    const navigate = useNavigate()
    const AddUserDetails = async () => {
       await addUser(user);
       cogoToast.success("success")
        navigate('/all')

    }
    
    return (
        <FormG>
            <Typography variant="h3">Add Your User Details</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name="userName"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Btn  variant="contained" onClick={()=>AddUserDetails()}>Add User</Btn>
            </FormControl>

        </FormG>

    );
};

export default AddUser;