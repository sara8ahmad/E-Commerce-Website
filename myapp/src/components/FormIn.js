import React from 'react'
import { useState } from 'react';

const FormIn = () => {
    const [inputs,setInputs]  = useState([]);
    const [value,setValue] = useState({
    
     email : "",
     password : "",
   
    });
   
    const inputHandel = ()=>{
     setInputs([...inputs,value]);
     console.log(inputs)
    }
   
    const handelInput =(e)=>{
     const Name = e.target.name;
     const Value = e.target.value;
     setValue({...value,[Name]:Value })
    }
   
    
   
    const onSubmit = (e)=>{
   
     e.preventDefault();
     inputHandel(value);
     setValue({
    
       email : "",
       password : "",
     
      });
    }
   
   
   
     const isDisabled = ()=>{
       const { password , email} = value
   
       return email==="" || password===""  ;
     }
   
    
   
  return (
    <div className='form-body'>
    <div className='window'>
      <h2 className='heading'>Sign in</h2>

      <form onSubmit={onSubmit}>
      <div  className='formInput'>

        <label>Email </label>
        <input type = "email" name='email' value={value.email} placeholder="Email"
        onChange = {handelInput}   />


        <label>Password </label>
        <input type ="password" name= 'password'
         value={value.password} onChange = {handelInput}
         placeholder="Password" />
         <span>"Wrong Password"</span>


        <button className='btnn' disabled={isDisabled()} >Sign In</button>
        <a className="text hover">
          Forget Password?
        </a>

        </div>
      </form>

    </div>
    </div>
  )
}

export default FormIn