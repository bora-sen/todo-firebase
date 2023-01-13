import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import toast,{ Toaster } from 'react-hot-toast';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

function SignupPage() {

  const [email,setEmail] = useState();
  const [psw,setPsw] = useState();

  function handleSubmit(e){
    e.preventDefault();
    console.log("Submit Handled!");

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, psw)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        toast.success("You Are Successfuly Created an account!");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.log(errorMessage);
        toast.error("ERROR! "+error.code);
        // ..
      });
  }

  return (

    <div className='max-w-xs flex justify-center'>
      <Toaster />
      <form onSubmit={e => handleSubmit(e)} className='flex flex-col items-center'>
        <label>
          Enter e-mail</label>
        <input value={email} onChange={e => {setEmail(e.target.value)}} className='h-8 border rounded-md ml-2' type="text" placeholder='Email' required />
        <label>
          Enter password
        </label>
          <input value={psw} onChange={e => {setPsw(e.target.value)}} className='h-8 border rounded-md ml-2' type="password" placeholder='Email' required />
        <div className='flex flex-col items-center'>
        <input className='flex bg-indigo-600 text-white rounded-md h-8 px-2 mt-2 font-semibold hover:bg-indigo-700' type="submit" value="Sign Up!" />
        <span className='font-thin text-sm'>Already have an account? <strong><Link to="/login">Log In</Link></strong></span>
        </div>
      </form>
    </div>
  )
}

export default SignupPage