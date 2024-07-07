import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyFormComponent = () => {

  const Navigate =useNavigate();
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    description: '',
    category: '',
    imageUrl: null 
  });

    
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newformData = new FormData();
      newformData.append('productName', formData.productName);
      newformData.append('productPrice', formData.productPrice);
      newformData.append('description', formData.description);
      newformData.append('category', formData.category);
      newformData.append('image', formData.image);
 
      const response = await axios.post('http://localhost:4000/products', newformData);

      console.log(response.data); 

      setShowPopup(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <div className="max-w-md mx-auto mt-20">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
            id="productName"
            type="text"
            placeholder="Product Name"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
            id="productPrice"
            type="text"
            placeholder="Product Price"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
            id="description"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
            id="category"
            type="text"
            placeholder="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        {/* Repeat the same structure for other fields */}
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" onClick={() => setShowPopup(true)}
          >
            Submit
          </button>
        </div>
      </form>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-md">
            <p className="text-xl font-semibold mb-4">Submission Successful!</p>
            <button
              
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setShowPopup(false)}
              
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFormComponent;
