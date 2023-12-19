import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { auth } from '../../firebaseconfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate, NavLink } from 'react-router-dom';
import './Login.css'
function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const submitLogin = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userdata) => {
                console.log(userdata?.user)
                console.log(auth?.currentUser)
                window.localStorage.setItem("currentuser", JSON.stringify(auth?.currentUser))
                auth?.currentUser?.getIdToken()
                    .then((tokenID) => {
                        console.log(tokenID)
                        window.localStorage.setItem("token", tokenID)
                        navigate('/profile')
                    })
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
    };
    return (
        <div>
            <video className='background-video ' autoPlay={true} muted={true} loop={true}>
                <source src="https://vnrvjiet.ac.in/assets/images/Website Hero Video.mp4" type="video/mp4" />
            </video>
            <div className=' overlay text-center w-50'>
                <h2 className='display-5 text-white'>Login</h2>
                <form className='form d-block mx-auto border rounded p-4 w-50 mt-3' onSubmit={handleSubmit(submitLogin)}>
                    <input type='email' className='form-control mt-3 mb-1' placeholder='email' required {...register('email')}></input>
                    <input type='password' className='form-control mt-3 mb-1' placeholder='Password' autoComplete='on' required minLength={8} {...register('password', { required: true })}></input>
                    <button className='btn btn-light d-block mx-auto mt-4 mb-4 px-4' type='submit'>Login</button>
                    <NavLink to='/register' className='register' >Register</NavLink>
                </form>
            </div>
        </div>

    );
}

export default Login;