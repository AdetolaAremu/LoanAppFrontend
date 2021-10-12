import React from "react";
import { Link } from 'react-router-dom';




const NavBar  = ()=>{
    return (
        <> 
        NavBar

        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
        </>
    )
}

export default NavBar