import { NavLink } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const FooterLink = () => {
return (
    <>
    
<footer className="bg-gradient-to-r from-green-400 to-green-300 text-white pt-12 pb-6 mt-16">
<div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-wrap md:flex-row  md:justify-between md:items-center gap-10 pb-10 border-b border-white/20">
        {/* Brand & Social */}
        <div className="mb-8 md:mb-0 flex flex-col items-start">
        <h2 className="text-3xl font-extrabold mb-2 tracking-wide">Smart Tech</h2>
        <p className="mb-6 text-white/80 max-w-xs">
            Bringing you the latest in electronics, innovation, and customer care.
        </p>
        <div className="flex gap-4 mt-2">
            <NavLink to="#" className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition text-xl">
                <FaFacebookF />
            </NavLink>
            <NavLink to="#" className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition text-xl">
                <FaTwitter />
            </NavLink>
            <NavLink to="#" className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition text-xl">
                <FaInstagram />
            </NavLink>
            <NavLink to="#" className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition text-xl">
                <FaYoutube />
            </NavLink>
        </div>
        </div>
        {/* Three Columns of Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-2">
        <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="space-y-1 text-white/80">
                <li><NavLink to="#" className="hover:underline">About Us</NavLink></li>
                <li><NavLink to="#" className="hover:underline">Careers</NavLink></li>
                <li><NavLink to="#" className="hover:underline">Blog</NavLink></li>
            </ul>
        </div>
        <div>
            <h3 className="font-bold mb-2">Support</h3>
            <ul className="space-y-1 text-white/80">
                <li><NavLink to="#" className="hover:underline">Help Center</NavLink></li>
                <li><NavLink to="#" className="hover:underline">Contact</NavLink></li>
                <li><NavLink to="#" className="hover:underline">Returns</NavLink></li>
            </ul>
        </div>
        <div className="hidden md:block">
            <h3 className="font-bold mb-2">Resources</h3>
            <ul className="space-y-1 text-white/80">
                <li><NavLink to="#" className="hover:underline">Privacy Policy</NavLink></li>
                <li><NavLink to="#" className="hover:underline">Terms of Service</NavLink></li>
                <li><NavLink to="#" className="hover:underline">Community</NavLink></li>
            </ul>
        </div>
        </div>
        {/* Newsletter */}
        <div className="w-2/1 md:w-auto">
        <h3 className="font-bold mb-2">Subscribe to our newsletter</h3>
        <form className="flex bg-white rounded-full overflow-hidden shadow-lg">
            <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-transparent text-green-700 placeholder-green-400 focus:outline-none w-48"
            />
            <button
                type="submit"
                className="bg-green-700 text-white font-bold px-6 py-2 hover:bg-green-800 transition"
            >
                Subscribe
            </button>
        </form>
        </div>
    </div>
    <div className="text-center text-white/70 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Electronic Tech. All rights reserved by@ Mwafg Gumma
    </div>
</div>
</footer>

</>
)
}

export default FooterLink
