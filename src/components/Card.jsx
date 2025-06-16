
import oven from '../assets/image/oven.png'; 
import { NavLink } from 'react-router-dom';
import wash from '../assets/image/wash.png';
import refrigeratore from '../assets/image/refrigeratore.jpg'; 
import { FaGift,FaBell } from 'react-icons/fa'; 


const Card = () => {
return (
    <>
        <section className="mx-auto my-3">
            <div className="my-10">
            <h1 className="mx-10 font-medium mt-5 text-3xl">
                Top Products
            </h1>
            <p className='mx-10 my-2 '>
                Discover our top-rated products that have been handpicked for you.
            </p>
            </div>
            {/* card */}
            <div className="grid md:grid-cols-2 grid-cols1 justify-between mt-10 mx-10">
                {/* card 1 */}
                <div className="grid md:grid-cols-2 grid-col justify-between md:h-80 md:mt-24 mt-10 bg-gradient-to-r from-green-100 via-pink-50 to-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                    {/* gift icon */}
                    <div className="absolute -top-4 -left-4 bg-green-400 text-white rounded-full p-3 shadow-lg">
                        <FaGift className="text-3xl" />
                        </div>
                    <div className="flex flex-col justify-center items-start pl-10">
                        <h3 className='text-2xl font-semibold my-3 text-green-700 flex items-center gap-2'>
                            Gift Smart Oven
                        </h3>
                        <p className='text-lg py-3 text-green-900'>
                            🎁 Special Offer: Get a free gift wrap with every Smart Oven purchase!
                            </p>
                            </div>
                            {/* imag */}
                            <div className="mx-3 md:mt-10">
                                <img src={oven} loading='lazy' alt="" />
                            </div>
                            <NavLink to='register' className='bg-green-300 text-center rounded-full text-white py-2 md:ml-40  md:w-[150px] md:h-[40px]'>
                                Subscribe 
                            </NavLink>
                </div>
                {/* second side of cards */}
                {/* card 2 */}
                <div className="flex flex-col justify-center gap-4 my-3 mx-5">
                    {/* box 1 */}
                    <div className="flex md:flex-row flex-col justify-center items-center bg-gradient-to-r from-green-100 via-pink-50 to-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                    {/* Barcode icon */}
                    <div className="absolute -top-4 -left-5 bg-green-400 text-white rounded-full p-3 shadow-lg">
                        <FaBell className="text-3xl" />
                    </div>
                    <div className="flex flex-col justify-center items-start pl-10">
                        <h3 className="text-2xl font-semibold my-3 text-green-700 flex items-center gap-2">
                            Smart Refrigerator   
                        </h3>
                        <p className=" py-3 text-green-900">
                            ✅ Energy Saver Mode – Cuts power use by 30% without sacrificing cooling.
                        </p>                        
                    </div>
                    <div className="mx-10">
                        <img src={refrigeratore} loading='lazy' alt=""  />
                    </div>
                    </div>
                    {/* box 2 */}
                    {/* box 1 */}
                    <div className="flex md:flex-row flex-col justify-center items-center bg-gradient-to-r from-green-100 via-pink-50 to-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                    {/* Barcode icon */}
                    <div className="absolute -top-4 -left-5 bg-green-400 text-white rounded-full p-3 shadow-lg">
                        <FaBell className="text-3xl" />
                    </div>
                    <div className="flex flex-col justify-center items-start pl-10">
                        <h3 className="text-2xl font-semibold my-3 text-green-700 flex items-center ">
                            Wash machine 
                        </h3>
                        <p className=" py-3 text-green-900">
                        ⚡Energy & Water Saver – Uses 40% less power and 25% less water.
                        </p>   
                        <p className='text-green-800'>
                        Fast& Efficient. Smarter Cleaning.</p>                     
                    </div>
                    <div className="mx-3">
                        <img src={wash} alt="" loading='lazy'  />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
)
}

export default Card

// import React from 'react'
// import mir  from '../assets/image/mir.png';
// import ove from '../assets/image/ove.png';
// import rem from '../assets/image/rem.png';
// import rf from '../assets/image/rf.png';
// import rm from '../assets/image/rm.png';
// import { FaGift } from 'react-icons/fa';

// const Card = () => {
// return (
//     <>
//         <section className="mx-auto my-3">
//             <div className="my-10">
//                 <h1 className="mx-10 font-medium mt-5 text-3xl">
//                     Top Products
//                 </h1>
//                 <p className='mx-10 my-2 '>
//                     Discover our top-rated products that have been handpicked for you.
//                 </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5">
//                 <div className='flex flex-row justify-between bg-gradient-to-r from-pink-100 via-pink-50 to-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-10 border-2 border-pink-200 relative overflow-hidden'>
//                     {/* Gift icon badge */}
//                     <div className="absolute -top-4 -left-4 bg-pink-400 text-white rounded-full p-3 shadow-lg">
//                         <FaGift className="text-3xl" />
//                     </div>
//                     <div className="flex flex-col justify-center items-start pl-10">
//                         <h3 className='text-2xl font-semibold my-3 text-pink-700 flex items-center gap-2'>
//                             Gift Smart Oven
//                         </h3>
//                         <p className='text-lg py-3 text-pink-900'>
//                             🎁 Special Offer: Get a free gift wrap with every Smart Oven purchase!
//                         </p>
//                     </div>
//                     <img src={ove} className='w-60 h-60 object-cover  ' alt="Smart Oven Gift" />
//                 </div>
//                 {/* card2 */}
//                 <div className="flex flex-col justify-center gap-4">
//                     {/* one of box two */}
//                     <div className='flex flex-row justify-between bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-10'>
//                         <div className="flex flex-col justify-center items-center">
//                             <div className="px-1 ">
//                                 <h3 className='text-2xl font-semibold my-3 '>
//                                     Smart oven
//                                 </h3>
//                                 <p className='text-lg py-3 '>
//                                     🔥 Voice-Controlled Cooking: Just say, "Hey [Oven Name], preheat to 375°F" and watch the magic happen. No more guessing—your oven listens!
//                                 </p>
//                             </div>
//                         </div>
//                         <img src={ove} className='md:w-1/2  '  alt="" />
//                     </div>
//                     {/* two of box two */}
//                     <div className='flex flex-row justify-between bg-gray-100 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-10'>
//                         <div className="flex flex-col justify-center items-center">
//                             <div className="px-1 ">
//                                 <h3 className='text-2xl font-semibold my-3 '>
//                                     Smart oven
//                                 </h3>
//                                 <p className='text-lg py-3 '>
//                                     🔥 Voice-Controlled Cooking: Just say, "Hey [Oven Name], preheat to 375°F" and watch the magic happen. No more guessing—your oven listens!
//                                 </p>
//                             </div>
//                         </div>
//                         <img src={rf} className='w-1/2' alt="" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </>
// )
// }

// export default Card
