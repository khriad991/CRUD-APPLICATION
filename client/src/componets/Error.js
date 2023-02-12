import React from "react";
import {Link} from "react-router-dom";

const Error = ({ errorMessage }) => {
    return (
       <div className="vh-100 vw-100 d-flex justify-content-center align-items-center flex-column">
           <h1 style={{fontSize:"5rem",color:"indigo", textAlign:"center", fontWeight:900, padding: 30, }}>404 || Page Not Found</h1>

           <Link className="btn btn-outline-light fw-bolder text-dark shadow  " to='/' > {"<<"} GoTo Home </Link>
       </div>
    );
};

export default Error;
