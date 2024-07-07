import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function ProductList() {
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4000/products');
  //       console.log('Fetched data:', response.data);
  //       setData(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []); // This effect runs only once when the component mounts

  const [showPopup, setShowPopup] = useState(false);

  const handleOrderClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide popup after 2 seconds
  };

  //local datas
  const ProductData =[
    {
    id:0,
    name: "Basic Tee",
    price: "34",
    category: "soft",
    description : "mens" ,
    imageUrl :'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
  },
  {
    id:1,
    name: "Artwork Tee",
    price: "36",
    category: "soft",
    description : "Womens" ,
    imageUrl :"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg"
  },
  {
    id:2,
    name: "Basic Tee",
    price: "35",
    category: "Soft",
    description : "mens " ,
    imageUrl :"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
  },
  {
    id:3,
    name: "Bag",
    price: "226",
    category: "blue",
    description : "Medium stuff" ,
    imageUrl :"https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg"
  },
  {
    id:4,
    name: "Bag",
    price: "140",
    category: "White and block",
    description : "zio Tote" ,
    imageUrl :"https://tailwindui.com/img/ecommerce-images/category-page-07-product-05.jpg"
  },
  {
    id:5,
    name: "Carry case",
    price: "32",
    category: " Heather Gray",
    description : "carry case" ,
    imageUrl :"https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg"
  },
  {
    id:6,
    name: "Nomad Tumbler",
    price: "35",
    category: "Steel",
    description : "Hot and cool" ,
    imageUrl :"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
  },
  {
    id:7,
    name: "Machined Pencil",
    price: "35",
    category: "Smmoth",
    description : "pencil" ,
    imageUrl :"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
  },
  {
    id:8,
    name: "Earthen bottle",
    price: "48",
    category: "steel",
    description : "bottle" ,
    imageUrl :"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
  },
  {
    id:9,
    name: "Brass Scissors",
    price: "35",
    category: "Smmoth",
    description : "Includes brass stand " ,
    imageUrl :"https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-06.jpg"
  },
  {
    id:10,
    name: "Card Tray",
    price: "64",
    category: "Wood",
    description : "Includes brass stand " ,
    imageUrl :"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg"
  },
  {
    id:11,
    name: "Multi-back",
    price: "39",
    category: "Smmoth",
    description : "Includes brass stand " ,
    imageUrl :"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg"
  },
  


  ]

  if (loading) return <div className="text-white  text-center ">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
      {ProductData.map((product) => (
        <div key={product.id} className="group">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
              src={product.imageUrl || 'https://via.placeholder.com/150'}
              alt={product.description}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${product.price}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <button  onClick={handleOrderClick} className="bg-gray-500 text-white text-sm font-medium py-2 px-4 rounded">
              Order
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-lg font-semibold">Order Accepted</p>
          </div>
        </div>
      )}
</div>

  );
}

export default ProductList;
