import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Form = () => {
    const [input,setInput]  = useState([]);
    const [values,setValues] = useState({
   
     username : "" , 
     email : "",
     password : "",
     confimPassword : "",
   
    });



    const [focused,setFocused] = useState(false);
   
    const inputHandel = ()=>{
     setInput([...input,values]);
    }
   
    const handelInput =(e)=>{
     const Name = e.target.name;
     const Value = e.target.value;
     setValues({...values,[Name]:Value })
    }
   
    
   
    const onSubmit = (e)=>{
   
     e.preventDefault();
     inputHandel(values);
     setValues({
   
       username : "" , 
       email : "",
       password : "",
       confimPassword : "",
     
      });
    }
    console.log(values);
    console.log(focused);
    console.log(input)
   
   
     const isDisabled = ()=>{
       const {username , password , confimPassword , email} = values
   
       return username==="" || email==="" || password==="" || confimPassword==="" ;
     }
   
     const handelFocus = (e)=>{
    setFocused(true);
      
     
    }
   
    
   
   
   
     return (
        <div className='form-body'>
       <div className='window'>
         <h2 className='heading'>Sign Up</h2>
   
         <form onSubmit={onSubmit}>
         <div  className='formInput'>
           <label>Username </label>
           <input type = "text" name='username'
            placeholder='Username'
            value = {values.username} onChange = {handelInput} onBlur= {handelFocus} focused = {focused.toString()} />
           


           <label>Email </label>
           <input type = "email" name='email' value={values.email} placeholder="Email"
           onChange = {handelInput} onBlur= {handelFocus}  focused = {focused.toString()} />
           

           <label>Password </label>
           <input type ="password" name= 'password'
            value={values.password} onChange = {handelInput}
            placeholder="Password"
            onBlur= {(e)=> setFocused(true)} focused = {focused.toString()} />
           
           
           
           <label>Confirmed Password </label>
           <input type = "password" name='confimPassword' 
           placeholder='Confirmed Password'
           pattern = {values.password}
           value={values.confimPassword} onChange = {handelInput} />



           <button className='btnn' disabled={isDisabled()} >Sign Up</button>
      
        <p className="text">
          Already registered  <Link to = "/formIn" > <a href="/sign-in" className='hover'>Sign in?</a> </Link>
        </p>
       
           </div>
         </form>
   
       </div>
       </div>
     );
}

export default Form;