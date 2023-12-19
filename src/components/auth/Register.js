import './Login.css'
import React from 'react';
import { NavLink } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { auth,db } from '../../firebaseconfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc,setDoc } from 'firebase/firestore';
function Register() {
  const navigate = useNavigate()
  const {register,handleSubmit}=useForm()
  const submitRegister=(data)=>{
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userdata) => {
        console.log(userdata)
        window.localStorage.setItem("currentuser", JSON.stringify(auth?.currentUser))
        setDoc(doc(db,"users",auth?.currentUser?.uid),data)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
        auth?.currentUser?.getIdToken()
            .then((tokenID) => {
                console.log(tokenID)
                window.localStorage.setItem("token", tokenID)
                navigate('/profile')
            })
            .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
  }
  return (
  <div>
       <video className='background-video ' autoPlay={true} muted={true} loop={true}>
                <source src="https://vnrvjiet.ac.in/assets/images/Website Hero Video.mp4" type="video/mp4" />
        </video>
      <div className='overlay text-center w-50'>
      <h2 className='display-5 text-light'>Register</h2>
        <form className='d-block mx-auto border w-50 rounded p-4 mt-3' onSubmit={handleSubmit(submitRegister)}>
            <input type='text' className='form-control mt-3 mb-1' placeholder='Roll no.' {...register('rollno')} required minLength={10}></input>
            <input type='text' className='form-control mt-3 mb-1' placeholder='Full name' {...register('name')} required></input>
            <input type='email' className='form-control mt-3 mb-1' placeholder='Email' {...register('email')} required></input>
            <input type='password' className='form-control mt-3 mb-1'  autoComplete='on' placeholder='Password' {...register('password')} required minLength = {8}></input>
            <button className='btn btn-dark d-block mx-auto mt-4 mb-4 px-4' type='submit'>Register</button>
            <NavLink to='/login' className='login'>Already Registered?</NavLink>
        </form>
      </div>
      </div>
  )
}

export default Register