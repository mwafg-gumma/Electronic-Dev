import {FaStar} from 'react-icons/fa';
import profile1 from '../assets/image/profile1.png';
import profile2 from '../assets/image/profile2.png';
// import profile4 from '../assets/image/profile4.jpg';
import profile5 from '../assets/image/profile5.jpg';
import like from '../assets/image/like.png';

const Interact = () => {
return (
    <>  
    <section className="mx-10">
        <div className="px-2 mb-10">
            <h1 className="text-2xl text-center md:text-start px-3 font-normal ">
                Most People Interact With us
            </h1>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between justify-center mx-1">
            {/* 1 */}
            <div className="bg-white rounded-md mx-2 my-4 shadow-md md:h-40 " >
                <div className="flex  flex-row ">
                    {[...Array(5)].map((_,i) => (
                    <FaStar key={i} className="text-yellow-500 text-xl mx-1" />
                ))}
                </div>
                <div className=" pt-3">
                    <p className='py-2 px-4'>
                    Electronic we make cutting-edge electronics accessible and enjoyable for everyone <br />  Whether you're a tech enthusiast, a busy professional, <br />
                    or just looking for reliable gadgets, here’s how customers like you engage with us:
                    </p>
                </div>
            </div>
            {/* 2 */}
            <div className="mx-3 mt-5">
                <div className="flex flex-row mx-10  md:mx-10 mb-2">
                    <img src={profile1}  className='w-10  h-10  object-cover rounded-full' alt="" />
                    <img src={profile2} loading="lazy" className='w-10  h-10  object-cover rounded-full -ml-2' alt="" />
                    <img src={profile5}  className='w-10 h-10 object-cover rounded-full -ml-2' alt="" />
                    <img src={profile5}  className='w-10 h-10 object-cover rounded-full -ml-2' alt="" />
                    <img src={profile1}  className='w-10 h-10 object-cover rounded-full -ml-2' alt="" />
                </div>
                <div className=" px-10 flex flex-row items-center ">
                    <img src={like} className="w-5 h-5 object-cover rounded-full" alt="" /> 
                    <p className='px-1 '>+29,5900 people have interacted with us</p>
                </div>
                <div className="flex flex-row justify-center my-2">
                    <input type="text" placeholder='Message' className='px-2 py-2 rounded-md border ' />
                    <a href="#" className='bg-blue-500 text-white  px-4 py-2 rounded-md ml-2 hover:bg-blue-600 transition duration-300'>
                        send
                    </a>
                </div>
            </div>

            </div>
    </section>
    
    </>
)
}

export default Interact
