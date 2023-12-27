import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { auth } from '../../firebaseconfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';

function FacultyLogin() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitLogin = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userdata) => {
        // Log in successful
        //const user = userCredential.user;
        //console.log(user);
        //window.localStorage.setItem("currentuser", JSON.stringify(user));
        //auth.currentUser.getIdToken()
        console.log(userdata?.user)
        console.log(auth?.currentuser)
        window.localStorage.setItem("currentUser",JSON.stringify(auth?.currentUser))
        auth?.currentUser?.getIdToken()
          .then((tokenID) => {
            console.log(tokenID);
            window.localStorage.setItem('token', tokenID);
            navigate('/FacultyProfile');
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.error('Login failed:', error.message);
      });
  };

  return (
    <div>
      <video className="background-video" autoPlay muted loop>
        <source src="https://vnrvjiet.ac.in/assets/images/Website Hero Video.mp4" type="video/mp4" />
      </video>
      <div className="overlay text-center w-50">
        <h2 className="display-5 text-light">Faculty Login</h2>
        <form className="d-block mx-auto border w-50 rounded p-4 mt-3" onSubmit={handleSubmit(submitLogin)}>
          <input type="email" className="form-control mt-3 mb-1" placeholder="Email" {...register('email')} required />
          <input
            type="password"
            className="form-control mt-3 mb-1"
            autoComplete="on"
            placeholder="Password"
            {...register('password')}
            required
            minLength={8}
          />
          <button className="btn btn-dark d-block mx-auto mt-4 mb-4 px-4" type="submit">
            Login
          </button>
          <NavLink to="/FacultyRegister" className="register">
            Not Registered? Register here
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default FacultyLogin;
