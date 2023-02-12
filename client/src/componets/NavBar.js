import React from 'react';
import {AppBar, styled, Toolbar, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";


     const NavH =styled(AppBar)`
       background: #111;
       margin: 0 auto 50px auto;
     `;
    let NavL = styled(NavLink)`
          color: #FFFFFF;
          margin-right: 20px;
          text-decoration: none;
          font-size: 20px;
    `;

const NavBar = () => {
    return (
        <NavH>
           <Toolbar>
               <Typography
                   variant="h6"
                   noWrap
                   component={Link}
                   to="/"
                   sx={{
                       mr: 2,
                       display: { xs: 'none', md: 'flex' },
                       fontFamily: 'monospace',
                       fontWeight: 800,
                       letterSpacing: '.3rem',
                       color: 'inherit',
                       textDecoration: 'none',
                   }}>
                   ToDo
               </Typography>
               <NavL to="/all">All User</NavL>
               <NavL to="/add">Add User</NavL>
           </Toolbar>
        </NavH>
    );
};

export default NavBar;

















