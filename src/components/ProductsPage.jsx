
import products from '../products.json'
import { NavLink } from 'react-router-dom';
import {FaShoppingCart, FaHeart} from 'react-icons/fa';

const ProductsPage = ({onAddToCart}) => {
return (
    <>
    <section className="my-10 px-5">
        <div className="my-2">
            <h1 className="text-3xl px-5 pt-10 font-sans font-normal">
                Featured Product
            </h1>
            <p className="text-lg px-5 py-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quae.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 justify-between mx-5 my-4">
            {/* box 1 */}
            {products.map((product) => (
            <NavLink to={`/product/${product.id}`} key={product.id}  className="flex flex-col justify-center items-center text-center mx-3 my-2 bg-gray-50 shadow-md rounded-md">
                <div className="relative group w-full flex justify-center">
                    <img src={product.image} alt={product.title} loading='lazy' className='w-40'  />
                    <FaHeart className='absolute top-3 right-3 text-2xl text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer' />
                </div>
                <div className="py-2 text-start mx-2 mb-2">
                    <h2 className="text-2xl font-semibold mb-2">
                        {product.title}
                    </h2>
                    <p className=" text-gray-500 text-sm mb-2">
                        {product.description}
                    </p>
                    <p className="text-lg font-bold ">
                        ${product.price}
                    </p>
                    <div className="flex flex-row justify-between mx-3 items-center">
                    <NavLink to={`/card/${product.id}`}>
                        <button className="bg-green-400 md:-ml-3  text-white px-2 py-1 rounded-md mt-3 hover:bg-green-500 transition duration-300">
                            View Details
                        </button>
                    </NavLink>
                        <NavLink to="/">
                            <FaShoppingCart className='text-2xl text-lime-400 mt-3 cursor-pointer hover:text-lime-500 ' onClick={onAddToCart} />
                        </NavLink>
                        </div>
                </div>
            </NavLink>
            ))}
        </div>
    </section>
    </>
)
}

export default ProductsPage
