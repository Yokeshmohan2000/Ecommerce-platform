import React from 'react'


function Home() {
 
  return (
    <div class="flex flex-col lg:flex-row items-center justify-center lg:pb-60 sm:mx-auto mb-10">
  <div class="lg:w-1/2  sm:w-full mt-20 items-center lg:ml-44 "> 
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOvuTBTj-QXuMSp0tGO6jPT5pEZVKC0DOFQ&s" 
    alt="img" 
    class="h-30 w-30 sm:mt-40 lg:h-full lg:w-full object-cover rounded-full mb-6 lg:mb-0">
    </img>
    <h1 class='text-lg lg:text-3xl font-bold sm:mb-6 ml-5 lg:mt-6'> "Efficient, <span class="text-red-500">sleek,</span> essential."</h1>
  </div>

  <div class="text-center lg:text-left lg:w-2/3 lg:ml-40 lg:mt-0 lg:mt-36">
    <div class="flex flex-col items-center lg:items-start">
      <span class="text-white font-bold text-4xl lg:text-5xl tracking-wide">Source Smarter</span>
      <h2 class="text-white font-bold text-4xl lg:text-6xl tracking-wide mt-2">buY <span class="text-white font-bold  tracking-wide">Faster</span></h2>
      
    </div>

    <div class="mt-6"> 
      <a href="/login">
        <button className="bg-red-500 hover:bg-white hover:text-red-500 text-white font-bold py-2 px-4 rounded-full lg:w-32">
          Visit
        </button>
      </a>
    </div>
  </div>
</div>


  )
}



export default Home