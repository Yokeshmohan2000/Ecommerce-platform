import React, { useState } from 'react'


const Navbar = () => {

  const [open, setOpen] = useState(false);
  const burgerclicked = () => {
    console.log('onclicked');
    setOpen(!open);
  }

  return (
    <div class="sticky top-0 bg-white z-50">
    <nav class="mt-7 pt-7 pb-4 w-5/6 md:max-w-7xl mx-auto">
      <div class="md:flex justify-between items-center">
        <div class="flex justify-between items-center">
          <div class="flex items-center bg-red">
            <h1 class="text-4xl font-bold font-size:80">bu<span class='text-red-500'>Y</span>o.Com</h1>
          </div>
          <div class="md:hidden px-5 py-2">
            <button onClick={burgerclicked}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
        <div class={`flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center ${open ? "flex" : "hidden"} md:flex`}>
          <ul class="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center w-full md:w-auto">
            <li class="text-slate-700 px-5 py-2 hover:bg-red-500 hover:rounded-full hover:text-white transform ease-in-out duration-100">
              <a href="/Home">Home</a>
            </li>
            <li class="text-slate-700 px-5 py-2 hover:bg-red-500 hover:rounded-full hover:text-white transform ease-in-out duration-100">
              <a href="/ProductList">Shop</a>
            </li>
            <li class="text-slate-700 px-5 py-2 hover:bg-red-500 hover:rounded-full hover:text-white transform ease-in-out duration-100">
              <a href="/About">About</a>
            </li>
            <li class="text-slate-700 px-5 py-2 hover:bg-red-500 hover:rounded-full hover:text-white transform ease-in-out duration-100">
              <a href="/login">Login</a>
            </li>
            <li class="px-5 py-2 flex items-center bg-red-500 rounded-full hover:bg-red-300 transform ease-in-out duration-100">
            <a href="/Alreadyexits" class="flex items-center text-white">
              <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              Add
            </a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
  )
}

export default Navbar