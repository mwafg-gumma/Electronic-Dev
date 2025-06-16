import {NavLink} from 'react-router-dom'
import {FaSignInAlt} from 'react-icons/fa'

const Features = () => {
return (
    <>
    <section className="py-1 bg-gradient-to-br from-green-50 to-blue-50">
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
        {/* <NavLink to='/'>
            <FaSignInAlt className='text-white text-4xl mx-2 bg-black py-2 px-2 rounded-full hover:bg-green-400' />
        </NavLink> */}
<div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
        What's Special about us ?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature 1 */}
        <div className="flex items-start bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
        <div className="bg-green-100 text-green-600 rounded-full p-4 mr-5 text-3xl">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Delivery</h3>
    <p className="text-gray-600">Get your electronics delivered to your doorstep quickly and safely, every time.</p>
        </div>
        </div>
        {/* Feature 2 */}
        <div className="flex items-start bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
        <div className="bg-yellow-100 text-yellow-600 rounded-full p-4 mr-5 text-3xl">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Guarantee</h3>
    <p className="text-gray-600">All our products are tested and come with a full warranty for your peace of mind.</p>
        </div>
        </div>
        {/* Feature 3 */}
        <div className="flex items-start bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
        <div className="bg-blue-100 text-blue-600 rounded-full p-4 mr-5 text-3xl">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
        </div>
        <div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure Payment</h3>
    <p className="text-gray-600">Your transactions are protected with the latest security standards.</p>
        </div>
        </div>
        {/* Feature 4 */}
        <div className="flex items-start bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
        <div className="bg-pink-100 text-pink-600 rounded-full p-4 mr-5 text-3xl">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </div>
        <div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">24/7 Support</h3>
    <p className="text-gray-600">Our team is always here to help you with any questions or issues.</p>
        </div>
        </div>
    </div>
</div>
{/*  */}
<div className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
    <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
    Here How People trust with our team    
    </h2>
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <thead>
<tr className="bg-green-200 text-green-900">
    <th className="py-3 px-4 text-left">Feature</th>
    <th className="py-3 px-4 text-left">Description</th>
    <th className="py-3 px-4 text-left">Benefit</th>
    <th className="py-3 px-4 text-left">Icon</th>
</tr>
        </thead>
        <tbody>
<tr className="border-b hover:bg-green-50 transition">
    <td className="py-3 px-4 font-semibold">Fast Delivery</td>
    <td className="py-3 px-4">Get your electronics delivered quickly and safely, every time.</td>
    <td className="py-3 px-4">Save time and enjoy convenience.</td>
    <td className="py-3 px-4 text-green-600 text-2xl">
    {/* Example icon: Truck */}
    <span role="img" aria-label="truck">🚚</span>
    </td>
</tr>
<tr className="border-b hover:bg-green-50 transition">
    <td className="py-3 px-4 font-semibold">Quality Guarantee</td>
    <td className="py-3 px-4">All products are tested and come with a full warranty.</td>
    <td className="py-3 px-4">Peace of mind with every purchase.</td>
    <td className="py-3 px-4 text-yellow-600 text-2xl">
    {/* Example icon: Checkmark */}
    <span role="img" aria-label="check">✅</span>
    </td>
</tr>
<tr className="border-b hover:bg-green-50 transition">
    <td className="py-3 px-4 font-semibold">Secure Payment</td>
    <td className="py-3 px-4">Transactions protected with the latest security standards.</td>
    <td className="py-3 px-4">Shop with confidence.</td>
    <td className="py-3 px-4 text-blue-600 text-2xl">
    {/* Example icon: Credit Card */}
    <span role="img" aria-label="credit-card">💳</span>
    </td>
</tr>
<tr className="hover:bg-green-50 transition">
    <td className="py-3 px-4 font-semibold">24/7 Support</td>
    <td className="py-3 px-4">Our team is always here to help you with any questions or issues.</td>
    <td className="py-3 px-4">Get help whenever you need it.</td>
    <td className="py-3 px-4 text-pink-600 text-2xl">
    {/* Example icon: Headset */}
    <span role="img" aria-label="support">🎧</span>
    </td>
</tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</section>
    </>
)
}

export default Features
