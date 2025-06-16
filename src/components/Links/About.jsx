import service2 from '../../assets/image/service2.jpg'
import profile1 from '../../assets/image/profile1.png'
import profile2 from '../../assets/image/profile2.png'
import profile4 from '../../assets/image/profile4.jpg'
import profile5 from '../../assets/image/profile5.jpg'
import FooterLink from '../FooterLink'

const About = () => {
return (
    <>
    <section>
<div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden rounded-md shadow-2xl ">
{/* Main Image */}
<img src={service2} alt="Main" loading='lazy' className="w-full h-full object-cover scale-1 transition-transform duration-700"
/>
{/* Dark Overlay with gradient */}
<div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent z-10"></div>
{/* Top Icon (Back/Out) */}
<button
    className="absolute top-5 left-5 z-30 bg-white/80 hover:bg-white text-green-600 rounded-full p-2 shadow-lg transition"
    title="Back"
    onClick={() => window.history.back()}
>
    {/* You can use any icon library; here is a simple SVG for a back arrow */}
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
</button>
{/* Text on Image */}
<div className="absolute inset-0 flex flex-col items-center justify-center z-20">
    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl tracking-wide text-center">
        Welcome to <span className="text-green-400">Electronic Tech</span>
    </h1>
    <p className="text-xl md:text-2xl text-white drop-shadow-lg text-center max-w-2xl mb-6">
        Discover the latest in electronics and innovation.<br />
        <span className="text-green-200">Upgrade your life with our smart solutions.</span>
    </p>
    {/* Message Input and Button */}
    <form className="flex flex-row items-center gap-3 bg-white/80 rounded-full px-4 py-2 shadow-lg">
        <input
    type="text"
    placeholder="Message with our team..."
        className="px-4 py-2 rounded-full outline-none border-none bg-transparent text-gray-700 w-40 md:w-72"
    />
        <button
    type="submit"
    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        Send
        </button>
    </form>
</div>
</div>
    </section>
<div className="max-w-6xl mx-auto my-12 px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
    Our Customers in Social Media
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Customer 1 */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
    <img
    src={profile1}
    alt="Customer 1"
        className="w-16 h-16 object-cover rounded-full border-2 border-green-300 mb-3"
    />
    <div className="font-semibold text-gray-800 mb-1">Sarah Johnson</div>
    <p className="text-gray-600 text-sm mb-4 text-center w-full ">
        "Amazing service and fast delivery!"
    </p>
    <button className="bg-green-400 text-white px-5 py-1 rounded-full font-semibold hover:bg-green-600 transition">
        Message
    </button>
    </div>
    {/* Customer 2 */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
    <img
    src={profile2}
    alt="Customer 2"
        className="w-16 h-16 object-cover rounded-full border-2 border-green-300 mb-3"
    />
    <div className="font-semibold text-gray-800 mb-1">David Lee</div>
    <p className="text-gray-600 text-sm mb-4 text-center w-full">
        "Great quality products and support."
    </p>
    <button className="bg-green-400 text-white px-5 py-1 rounded-full font-semibold hover:bg-green-600 transition">
        Message
    </button>
    </div>
    {/* Customer 3 */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
    <img
    src={profile4}
    alt="Customer 3"
        className="w-16 h-16 object-cover rounded-full border-2 border-green-300 mb-3"
    />
    <div className="font-semibold text-gray-800 mb-1">Emily Carter</div>
    <p className="text-gray-600 text-sm mb-4 text-center w-full">
        "Very helpful and friendly staff in my opinion visit This Store"
    </p>
    <button className="bg-green-400 text-white px-5 py-1 rounded-full font-semibold hover:bg-green-600 transition">
        Message
    </button>
    </div>
    {/* Customer 4 */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
    <img
    src={profile5}
    alt="Customer 4"
        className="w-16 h-16 object-cover rounded-full border-2 border-green-300 mb-3"
    />
    <div className="font-semibold text-gray-800 mb-1">Michael Smith</div>
    <p className="text-gray-600 text-sm mb-4 text-center w-full">
        "Fast shipping and a nice surprise gift!"
    </p>
    <button className="bg-green-400 text-white px-5 py-1 rounded-full font-semibold hover:bg-green-600 transition">
        Message
    </button>
    </div>
</div>
</div>
<FooterLink/>

    </>
)
}

export default About
