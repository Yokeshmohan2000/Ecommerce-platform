import React, { useState } from 'react'
import  axios  from 'axios'
import {Link, useNavigate } from 'react-router-dom';

;function Loginpage() {
   
  const navi =useNavigate();
  const [error,seterror] =useState('');
  const [formData,setFormdata] = useState({
    email : '',
    password: ''
  });
  
  // const [showPopup, setShowPopup] = useState(false);
  

   const handleInputChange =(e,pspropert,cerror)=>{
   if(pspropert === "email"){

      setFormdata((prevData) => ({
        ...prevData,
        email : e.target.value,
      }))

      if(cerror === true){
        document.getElementById('email').classList.add('border-red-700')
      }else{
        document.getElementById('email').classList.remove('border-red-700')
        seterror("")
      }

   }

   if(pspropert === "password"){

    setFormdata((prevData) => ({
      ...prevData,
      password : e.target.value,
    }))

    if(cerror === true){
      document.getElementById('password').classList.add('border-red-700')
    }else{
      document.getElementById('password').classList.remove('border-red-700')
      seterror("")
    }

   }
  
  }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        if(formData.email === "" || formData.password === "") {
          seterror('Please Fill mandatory Fields');
          return;
        }
       
        const response = await axios.post('http://localhost:4000/users/login',formData );
        // console.log("Form Submission response:", response.data);

        if(response.status === 200){
            if(typeof response.data.token === "string" && response.data.token !== ""){
              let lstoken = window.sessionStorage.getItem("sessiontoken");
              if(lstoken !== null || lstoken !== undefined || lstoken !== ""){
                window.sessionStorage.setItem("sessiontoken",response.data.token);
              }else if(lstoken === response.data.token){
                window.sessionStorage.removeItem("sessiontoken");
                window.sessionStorage.setItem("sessiontoken",response.data.token);
              }
              navi('/Home')
              window.location.reload();
            }
        }
      
        // Show popup message after successful submission
        // setShowPopup(true);

        // Reset form data after successful submission
      //   setFormdata({
      //   name: '',
      //   email: '',
      // });

       // Hide the popup message after a few seconds
      //  setTimeout(() => {
      //   setShowPopup(false);
      //   Navigate('/ProductList')
      // }, 3000);
        
      
      } catch (error) {
            // console.error("Error submitting form:", error);
            if(error.response.status == 404){
              seterror(error.response.data.message)
              // fnlhandleInputChange({target:{value:""}},error.response.data.inmesg,true)
            }else if(error.response.status == 401){
              if(error.response.data.inmesg == "password"){
                seterror(error.response.data.message) 
              }
            }
            else{
              console.error(error)
            }
      }
      
    }
   
  
  return (
    <div>
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

        {/* {showPopup && (
            <div className="mt-4  w-50 p-2 text-center text-white bg-green-500 rounded">
              Login Successfully!
            </div>
          )} */}

  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={handleSubmit}>
    <div>
        <label  class="block text-sm font-medium leading-6 text-white">Email<span className='text-red-600'>*</span></label>
        <div class="mt-2">
          <input id="email" value={formData.email} name="email" type="email" onChange={(e)=>handleInputChange(e,"email")} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none px-2"/>
        </div>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-white">Password<span className='text-red-600'>*</span></label>
        <div class="mt-2">
          <input id="password" value={formData.password} name="password" type="password" onChange={(e)=>handleInputChange(e,"password")} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none px-2"/>
        </div>
      </div>
      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    {error ? 
    <p className='text-center mt-5 text-red-white font-bold bg-red-500'>{error}</p> : "" }

    <p class="mt-10 text-center text-sm text-block">
      Not a member?
      <Link to='/register' class="font-semibold leading-6 text-white hover:text-white"> Sign Up</Link>
    </p>
  </div>
</div>
    </div>
  )
}

export default Loginpage