import React, {useEffect, useState} from 'react';
import {Button, styled, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {getUsers,DeleteUser} from "../services/CrudApi";
import {Link} from "react-router-dom"
import {Toast} from "react-hot-toast";
import cogoToast from "cogo-toast";

// meterials ul ------------
const StyledTable = styled(Table)`
  width: 95%;
  margin: 100px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #FFFFFF;
  }`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }`;
// meterials ul ------------

const AllUser = () => {
 const  [users ,setUser] = useState([])


    useEffect(()=>{
        getAlluser();
    },[])// [] for don't coll same api again and agnai


    const deleteUseData =async (id) => {
        await DeleteUser(id)
        getAlluser()
    }

    const getAlluser =async ()=>{
       let res=  await getUsers();
         setUser(res.data)

}


    return (

            <StyledTable>
                <TableHead>
                    <THead>
                        <TableCell>Id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Action</TableCell>
                    </THead>
                </TableHead>
                <TableBody>
                {users.map((user)=>{
                  return <TRow key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.userName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:15}} component={Link} to={`/edit/${user._id}`} >Edit </Button>
                                <Button variant='contained' color='secondary' onClick={()=>deleteUseData(user._id)}>Remove</Button>
                            </TableCell>
                        </TRow>
                    })
                }
                </TableBody>
                    <Button style={{margin:"30 auto 0 auto "}} variant="contained" component={Link} to="/add">Add New User</Button>
            </StyledTable>
    );
};

export default AllUser;