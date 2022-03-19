import React, { useState } from 'react'
// import CreateUser from './CreateUser';
const RegistrationForm = ({RegistrationForm}) => {
  const[userData,setUserData] = useState({
    name:'',
    email:'',
    password:'',
    mobile:'',
    age:'',
    img:''

  });

  const changeHandle = (e) =>{
    const{name,value}=e.target
    setUserData({...userData,[name]:value})
  }

  const submitHandler = (e) =>{
    
    e.preventDefault();
    console.log(userData);
  }
  return (
    <div className='container my-3 p-4'>
    
    <form>
        Name:<input 
        type="text"
        className='form-control'
        placeholder='Pease Enter Your Name'
        id="name"
        name="name"
        value={userData.name}
        onChange={changeHandle}
         />

        Email<input 
        type="email"
        className='form-control'
        placeholder='Pease Enter Your Email'
        id="email"
        name="email"
        value={userData.email}
        onChange={changeHandle}
         />


        Password:<input 
        type="password"
        className='form-control'
        placeholder='Pease Enter Your Password'
        id="password"
        name="password"
        value={userData.password}
        onChange={changeHandle}
         />


        Mobile:<input 
        type="number"
        className='form-control'
        placeholder='Pease Enter Your Mobile'
        id="mobile"
        name="mobile"
        value={userData.mobile}
        onChange={changeHandle}
         />


        Age:<input 
        type="number"
        className='form-control'
        placeholder='Pease Enter Your Age'
        id="age"
        name="age"
        value={userData.age}
        onChange={changeHandle}
         />

        Image:<input 
        type="file"
        className='form-control'
        id="img"
        name="img"
        value={userData.img}
        onChange={changeHandle}
         />

         <button type="button" onClick={submitHandler} className='btn btn-primary mt-2'>Submit</button>
      </form>
    </div>
  )
}

export default RegistrationForm