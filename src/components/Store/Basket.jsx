

import { NavLink, useParams } from 'react-router-dom';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import products from '../../products.json';
import {toast} from 'react-toastify'

const Basket = () => {
const { id } = useParams();
const product = products.find(p => p.id === parseInt(id));

if (!product) return <p>Product not found</p>;

const BackHandle = () => {
    toast.success('Deleted Completed')
    window.history.back();
}



return (
    <>
        <section className="space-x-3">
        <div className="bg-green-300 items-center">
        <NavLink to="/" className="text-white  flex flex-row items-center">
        <FaArrowLeft className="mx-2 my-2 hover:text-black" />
        <h3 className="px-1 hover:text-black">Back to Home</h3>
        </NavLink>
        </div>

        {/* Product Details */}
        <div className="mt-10 mx-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
    <img src={product.image} className="w-2/3 md:w-1/5 mx-10" alt={product.title} />
    <div className="bg-white rounded-md shadow-md mx-20 my-2 p-4">
        <button className='bg-red-500 text-white rounded-full px-3 py-1 my-2'>
            On Sale
        </button>
        <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
        <p className="mb-1 text-sm text-yellow-400">★★★★☆ <span className='px-1 text-sm text-black'>1209 Review</span> </p>
        <p className="text-gray-500 text-sm mb-2">
        {product.description || 'No description available.'}
        </p>
        <div className="flex flex-row justify-between items-center py-2">
            <p className="text-lg font-light">${product.price || 'N/A'} <span className='md:px-2 text-sm bg-orange-200 rounded-md text-orange-400 p-1'>50%</span> </p>
            <p className='text-sm font-normal px-2'>Available: <span className='text-sm text-gray-400'>in Store</span></p>
        </div>

        <div className="flex flex-row justify-between  items-center my-5">
        <NavLink className="flex flex-row items-center bg-red-500 p-2 rounded-md hover:bg-red-400  w-[100px]" onClick={BackHandle} >
            <FaTrash className="text-white text-xl mr-2" />
            <span className="text-white font-light text-sm">Delete</span>
        </NavLink>
        <NavLink className="flex flex-row items-center justify-center bg-red-500 p-2 rounded-md hover:bg-red-400  w-[100px]">
            {/* <FaTrash className="text-white text-xl mr-2" /> */}
            <span className="text-white font-light text-sm ">Buy Now</span>
        </NavLink>
        </div>
    </div>
        </div>
        </div>
        {/*  */}
        <div className="pt-10">
        <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Column 1: How to Buy */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">How to Buy</h3>
        <ol className="relative border-l-4 border-green-200 pl-8 space-y-8">
    <li className="group">
        <span className="absolute -left-6 flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full font-bold shadow-lg group-hover:bg-green-600 transition">1</span>
        <div>
        <h4 className="text-lg font-semibold text-green-700 mb-1">Browse Products</h4>
        <p className="text-gray-600">Explore our wide selection of electronics and smart devices.</p>
        </div>
    </li>
    <li className="group">
        <span className="absolute -left-6 flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full font-bold shadow-lg group-hover:bg-green-600 transition mt-20">2</span>
        <div>
        <h4 className="text-lg font-semibold text-green-700 mb-1">View Details</h4>
        <p className="text-gray-600">Click on a product to see detailed information and reviews.</p>
        </div>
    </li>
    <li className="group">
        <span className="absolute -left-6 flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full font-bold shadow-lg group-hover:bg-green-600 transition mt-36">3</span>
        <div>
        <h4 className="text-lg font-semibold text-green-700 mb-1">Add to Cart</h4>
        <p className="text-gray-600">Add your favorite products to the basket with a single click.</p>
        </div>
    </li>
    <li className="group">
        <div>
        <h4 className="text-lg font-semibold text-green-700 mb-1">Checkout</h4>
        <p className="text-gray-600">Complete your purchase securely and easily.</p>
        </div>
    </li>
        </ol>
    </div>
      {/* Column 2: Track Your Order */}
    <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-pink-600 mb-6 text-center">Track Your Order</h3>
        <ol className="relative border-l-4 border-pink-200 pl-8 space-y-8">
    <li className="group">
        <span className="absolute -left-6 flex items-center justify-center w-8 h-8 bg-pink-500 text-white rounded-full font-bold shadow-lg group-hover:bg-pink-600 transition">1</span>
        <div>
        <h4 className="text-lg font-semibold text-pink-600 mb-1">Order Confirmation</h4>
        <p className="text-gray-600">Receive an email confirmation with your order details.</p>
        </div>
    </li>
    <li className="group">
        <span className="absolute -left-6 flex items-center justify-center w-8 h-8 bg-pink-500 text-white rounded-full font-bold shadow-lg group-hover:bg-pink-600 transition mt-20">2</span>
        <div>
        <h4 className="text-lg font-semibold text-pink-600 mb-1">Processing</h4>
        <p className="text-gray-600">We prepare your order and keep you updated on its status.</p>
        </div>
    </li>
    <li className="group">
        <span className="absolute -left-6 flex items-center justify-center w-8 h-8 bg-pink-500 text-white rounded-full font-bold shadow-lg group-hover:bg-pink-600 transition mt-40">3</span>
        <div>
        <h4 className="text-lg font-semibold text-pink-600 mb-1">Shipping</h4>
        <p className="text-gray-600">Track your package with a tracking number sent to your email.</p>
        </div>
    </li>
    <li className="group">
        
        <div>
        <h4 className="text-lg font-semibold text-pink-600 mb-1">Delivered</h4>
        <p className="text-gray-600">Receive your order at your doorstep and enjoy your new tech!</p>
        </div>
    </li>
        </ol>
        </div>
    </div>
</div>
</div>

        {/*  */}
        </section>
    </>
);
};

export default Basket;
