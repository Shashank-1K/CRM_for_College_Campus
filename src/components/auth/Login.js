import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'
import {auth,googleProvider} from '../../firebaseconfig'
import { signInWithEmailAndPassword,signInWithPopup,signOut} from 'firebase/auth'
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    let [currentUser,setCurrentUser] = user
    const { register, handleSubmit } = useForm();
    const googleSignin  = () =>{
        signInWithPopup(auth,googleProvider)
        .then((data)=>{
            console.log(data)
            setCurrentUser(auth?.currentUser);
            auth?.currentUser?.getIdToken()
            .then((tokenID) => {
                window.sessionStorage.setItem("token",tokenID)
                navigate('/profile')
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    }
    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then((data)=>{
            console.log(data)
            setCurrentUser(auth?.currentUser);
            auth?.currentUser?.getIdToken()
            .then((tokenID) => {
                window.sessionStorage.setItem("token",tokenID)
                navigate('/profile')
            })
            .catch((err) => console.log(err))
        })
        .catch((err) =>console.log(err))
    };
    const logout = () =>{
        signOut(auth)
        .then((userdata) => {
            setCurrentUser([])
            window.sessionStorage.removeItem('token');
            navigate('/')
        })
        .catch((err) =>console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' className='form-control  border my-3 border-dark border-2' id='email' placeholder='Email' aria-required='true' {...register("email")}></input>
                <input type="password" suggested="current-password" className="form-control border border-dark border-2" id="password" placeholder="password" aria-required="true" name="password" {...register("password")}></input>
                <div className='d-inline'>
                    <button type="submit" className='btn btn-primary mx-2 my-2'>Login</button>
                    <button type="button" className='btn btn-danger mx-2 my-2' onClick={googleSignin}>Google +</button>
                    <button type="button" className='btn btn-danger mx-2 my-2' onClick={logout} >Logout</button>
                </div>
            </form>
            {console.log(currentUser)}
        </div>
    );
}

export default Login;
