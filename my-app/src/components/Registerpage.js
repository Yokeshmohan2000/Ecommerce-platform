import React, { useState } from 'react'
import  axios  from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function Registerpage() {
   
  const navi =useNavigate();
  const [error,seterror] =useState('')
  const [formData,setFormdata] = useState({
    name : '',
    email: '',
    password:''
  });
  
 const fnlhandleSubmit = async(e) =>{
    try{
    e.preventDefault();
    if(formData.name === "" || formData.email === "" || formData.password === "") {
       seterror('Please Fill mandatory Fields');
       return;
    }
    const response = await axios.post('http://localhost:4000/users/register/',{
        formData
    })
    if(response.status === 200){
        navi('/Login')
    }else{
        
    }
    } 
    catch(error){
        /* document.getElementById('mesg').innerHTML = error.response.data.message;
        document.getElementById('mesgdiv').classList.remove('hidden');
        setTimeout(()=>{
            document.getElementById('mesg').innerHTML = "";
            document.getElementById('mesgdiv').classList.add('hidden');            
        },2000); */
        
        if(error.response.status == 409){
          seterror(error.response.data.message)
          fnlhandleInputChange({target:{value:""}},error.response.data.inmesg,true)
        }else{
          console.error(error)
        }
    }
 }

 const fnlhandleInputChange = (e,pspropert,cerror) =>{
    if(pspropert === "name"){
        setFormdata((prevData)=>({
           ...prevData,
           name : e.target.value
        }))
        if(cerror === true){
            document.getElementById('name').classList.add('border-red-700')
        }else{
            document.getElementById('name').classList.remove('border-red-700')
            seterror("")
        }
    }
    if(pspropert === "email"){
        setFormdata((prevData)=>({
            ...prevData,
            email : e.target.value
        })) 
        if(cerror === true){
            document.getElementById('email').classList.add('border-red-700')
        }else{
            document.getElementById('email').classList.remove('border-red-700')
            seterror("")
        }
    }
    if(pspropert === "password"){
        setFormdata((prevData)=>({
            ...prevData,
            password : e.target.value
        })) 
    }

 }
  
  return (
    <div>
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            {/* <div id='mesgdiv' className="mt-4 w-50 p-2 text-center text-white bg-red-500 rounded hidden">
              <span id='mesg'></span>
            </div> */}
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
    <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign Up</h2>
  </div>

  <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" 
    onSubmit={fnlhandleSubmit}
    >
    <div>
        <label  class="block text-sm font-medium leading-6 text-white">Name <span className='text-red-600'>*</span></label>
        <div class="mt-2">
          <input id="name" value={formData.name} name="name" type="text" 
          onChange={(e)=>fnlhandleInputChange(e,"name")} 
          class="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none px-2"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-white">Email address <span className='text-red-600'>*</span></label>
        <div class="mt-2">
          <input id="email" value={formData.email} name="email" type="email"
           onChange={(e)=>fnlhandleInputChange(e,"email")} 
           class="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none px-2"/>
        </div>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-white">Password <span className='text-red-600'>*</span></label>
        <div class="mt-2">
          <input id="password" value={formData.password} name="password" type="password"
           onChange={(e)=>fnlhandleInputChange(e,"password")}  
           class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none px-2"/>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
      </div>
    </form>
    {error ? 
    <p className='text-center mt-5 text-red-white font-bold bg-red-500'>{error}</p> : "" }
    <p class="mt-10 text-center text-sm text-block">
      Already have an account?
      <Link to='/Login' class="font-semibold leading-6 text-white hover:text-white"> Sign In</Link>
    </p> 
  </div>
</div>
    </div>
  )
}

export default Registerpage;