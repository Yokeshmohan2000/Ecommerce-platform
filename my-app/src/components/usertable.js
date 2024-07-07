import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Alreadyexits() {

    const [formData, setFormData] = useState([{
        name: '',
        email: ''
    }])

    useEffect(() => {
        // Fetch initial data using Axios GET request
        axios.get('http://localhost:4000/users')
            .then(response => {
                // Assuming response.data is an object with name and email properties
                setFormData(response.data);
            })
            .catch(error => {
                console.error('Error fetching initial data:', error);
            });
    }, []); // Empty dependency array means this effect runs once after initial render



    return (

        <div class="relative mt-20 lg:ml-36 lg:mr-36  sm:mr-20 ml-4">
    <div class="sm:ml-20 lg:ml-4 mt-5 mb-10">
        <a href="./AddFormdata">
            <button class="bg-white hover:bg-red-400 text-blue font-bold py-2 px-4 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Add Products
            </button>
        </a>
    </div>
    <div class="overflow-x-auto justify-center">
        <h3 class=" text-center font-bold text-block mb-5">Alreadyexits users</h3>
        <table class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg mb-20">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-4 sm:px-6 py-3 rounded-s-lg">Name</th>
                    <th scope="col" class="px-4 sm:px-6 py-3 rounded-e-lg">Email</th>
                </tr>
            </thead>
            <tbody>
                {formData.map((data) => (
                    <tr key={data._id}>
                        <td className="border px-4 py-2">{data.name}</td>
                        <td className="border px-4 py-2">{data.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>



    )
}

export default Alreadyexits