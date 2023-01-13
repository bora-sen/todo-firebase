import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth';
import { signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';

function LoginPage() {
  let navigate =useNavigate();
  const local_context = useContext(AuthContext);
  const auth = useContext(AuthContext).Auth;
  console.log(auth);

  const [email,setEmail] = useState();
  const [psw,setPsw] = useState();




  function handleSubmit(e){

    e.preventDefault();
    console.log("Submit Handled!");
    signInWithEmailAndPassword(auth, email, psw)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        toast.success("You Are Successfuly Logged In!")

        local_context.setUser(user);
        console.log(local_context);
        navigate('/');
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.log(errorMessage);
        toast.error("ERROR! "+error.code)
        // ..
      });
  }

  return (
    <div className='max-w-xs flex justify-center'>
      <Toaster position='top-center' />
    <form onSubmit={e => handleSubmit(e)} className='flex flex-col items-center'>
      <label>
        Enter e-mail</label>
      <input value={email} onChange={e => {setEmail(e.target.value)}} className='h-8 border rounded-md ml-2' type="text" placeholder='Email' required />
      <label>
        Enter password
      </label>
        <input value={psw} onChange={e => {setPsw(e.target.value)}} className='h-8 border rounded-md ml-2' type="password" placeholder='Email' required />

      <div className='flex flex-col items-center'>
      <input className='flex bg-indigo-600 text-white rounded-md h-8 px-2 mt-2 font-semibold hover:bg-indigo-700' type="submit" value="Log In!" />
      <span className='font-thin text-sm'>Don't have an account? <strong><Link to="/login">Sign Up</Link></strong></span>
      </div>
    </form>
  </div>
  )
}

export default LoginPage