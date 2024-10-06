import React, { useState } from 'react'
import  axios  from 'axios'
import {Link, useNavigate } from 'react-router-dom';

;function Loginpage() {
   
  const Navigate =useNavigate();

  const [formData,setFormdata] = useState({
    name : '',
    email: ''
  });
  
  const [showPopup, setShowPopup] = useState(false);
  

   const handleInputChange =(e)=>{
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name] : value,
    }))
  }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
       
        const response = await axios.post('http://localhost:4000/users',formData );
        console.log("Form Submission response:", response.data);
      
        // Show popup message after successful submission
        setShowPopup(true);

        // Reset form data after successful submission
        setFormdata({
        name: '',
        email: '',
      });

       // Hide the popup message after a few seconds
       setTimeout(() => {
        setShowPopup(false);
        Navigate('/ProductList')
      }, 3000);
        
      
         } catch (error) {
            console.error("Error submitting form:", error);
         }
      
    }
   
  
  return (
    <div>
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        {showPopup && (
            <div className="mt-4  w-50 p-2 text-center text-white bg-green-500 rounded">
              Login Successfully!
            </div>
          )}
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
    <div>
        <label  class="block text-sm font-medium leading-6 text-white">Name</label>
        <div class="mt-2">
          <input id="name" value={formData.name} name="name" type="text" onChange={handleInputChange} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
        <div class="mt-2">
          <input id="email" value={formData.email} name="email" type="email" onChange={handleInputChange}  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>


      <div>
        <button onclick="location.href='/ProductList';"  type="submit" class="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

   

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