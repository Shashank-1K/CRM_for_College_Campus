import React from 'react'
import { db } from '../../firebaseconfig';
import { setDoc,doc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
function PopupForm() {
    const {register,handleSubmit} = useForm()
    const updateProfiles = (data) =>{
        console.log(data)
        const userid = JSON.parse(window.localStorage.getItem("currentuser"))?.uid
        if(data.linkedin !== ""){
            setDoc(doc(db,"faculty",userid),{linkedin:data.linkedin},{merge:true})
            .then((res)=>{
                console.log(res)
            })
            .catch((err) => console.error(err))
        }
        if(data.github !== ""){
            setDoc(doc(db,"faculty",userid),{github:data.github},{merge:true})
            .then((res)=>{
                console.log(res)
            })
            .catch((err) => console.error(err))
        }
    }
    return(
        <form className='border p-3 my-5 rounded-3' onSubmit={handleSubmit(updateProfiles)}>
          <input className='form-control my-2' type='url' placeholder='LinkedIn' {...register("linkedin")}></input>
          <input className='form-control my-2' type='url' placeholder='GitHub' {...register("github")}></input>
          <button type='submit' className='btn btn-success'>Save</button>
        </form>
    )
}

export default PopupForm