import service1 from "../../assets/image/service1.jpg"

const Services = () => {
    return (
        <>
    <button className="absolute top-5 left-5 z-30 bg-white/80 hover:bg-white text-green-600 rounded-full p-2 shadow-lg transition"
    title="Back"
    onClick={() => window.history.back()}
>
    {/* You can use any icon library; here is a simple SVG for a back arrow */}
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
</button>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 py-10 relative overflow-hidden">  
    <img
        src={service1}
        alt="Services Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
    />
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl relative">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Title & Description */}
                <div>
                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">Electronic Tech Solutions</h3>
                    <p className="text-gray-600 mb-4">
                            We provide innovative electronic solutions for your home and business. 
                            Our services include installation, maintenance, and support for all your smart devices.
                    </p>
                    <ul className="list-disc list-inside text-green-500 space-y-1">
                            <li>24/7 Customer Support</li>
                            <li>Certified Technicians</li>
                            <li>Fast & Reliable Service</li>
                    </ul>
                </div>
                {/* Right: Input & Button */}
                <form className="flex flex-col gap-4 bg-green-50 rounded-lg p-6 shadow">
                    <label className="text-gray-700 font-medium">Request a Service</label>
                    <input
                            type="text"
                            placeholder="Your Name"
                            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    <input
                            type="email"
                            placeholder="Your Email"
                            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    <textarea
                            placeholder="Describe your request"
                            className="border rounded px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-green-300"
                    />
                    <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition font-semibold"
                    >
                            Send
                    </button>
                </form>
        </div>
    </div>
</section>
        </>
    )
}

export default Services
