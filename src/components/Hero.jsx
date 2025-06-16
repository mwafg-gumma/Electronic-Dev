// import {FaArrowRight} from 'react-icons/fa';
// import Home from '../assets/image/home.png'; 
// const Hero = () => {
//     return (
//     <>
//     <section className="my-5">
//         <div className="flex md:flex-row flex-col md:justify-between mx-20 items-center px-5">
//         <div className="flex flex-col items-center mt-10  md:px-5">
//             <h1 className="md:text-4xl text-3xl -ml-10 md:ml-0 font-bold py-3">
//                 Online Electronic Store
//             </h1>
//             <div className="mt-2 -ml-10 md:ml-0">
//                 <p className="text-lg text-gray-600 mb-5">
//                     Discover the latest in electronic devices and accessories.
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod assumenda
//                 </p>
//                 <p className="text-lg text-gray-600">
//                     Discover the latest in electronic devices and accessories.
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod assumenda
//                 </p>
//             </div>
//             <a href="/explore" className="mt-5 bg-green-300 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition duration-200">
//             Explore Now <FaArrowRight className="inline" />
//             </a>
//         </div>
//         {/* img */}
//         <div className="hidden md:block">
//             <img src={Home} alt="Electronics" className="w-2/3" />
//         </div>
//         </div>
//     </section>
//     </>
// )
// }

// export default Hero
import { FaArrowRight } from 'react-icons/fa';
import Home from '../assets/image/home.png'; 
const Hero = () => {
    return (
    <>
    <section className="my-5 md:mt-24">
        <div className="flex md:flex-row flex-col md:justify-between justify-center  md:mx-24 items-center px-5">
            <div className="flex flex-col md:items-center md:mt-10 mt-20 md:px-5 flex-1 ">
                <div className="md:-ml-20  md:-mt-40">
                <h1 className="font-normal md:text-4xl text-2xl py-3">
                    Online Electronic Store
                </h1>
                    <p className="text-lg  font-light text-gray-600 mb-5">
                        Discover the latest in electronic devices and accessories.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod assumenda
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                    <p className="text-lg font-light text-gray-600">
                        Discover the latest in electronic devices and accessories.
                        Lorem ipsum dolor sit amet consectetur adip
                        </p>
                <a href="/explore" className="mt-10 bg-green-300 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition duration-200 inline-block">
                Explore Now <FaArrowRight className="inline" />
                </a>
                </div>
            </div>
            {/* img */}
            <div className="hidden md:block flex-1 md:-mt-10">
                <img src={Home} alt="Electronics" loading='lazy' className="w-2/2 mx-10" />
            </div>
        </div>
    </section>
    </>
)
}

export default Hero