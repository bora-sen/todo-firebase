import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth'
import axios from 'axios';

function Home() {

    const cur_user = useContext(AuthContext).user;

    if(cur_user !== null){
        return (
            <h1>Hello! {cur_user.email}</h1>
        )
    }
    else if(cur_user === null){
        return (
            <>
            <h1>You Are Not Logged In! Please <Link to="/login">Log In</Link></h1>
            </>

        )
    }
}

export default Home