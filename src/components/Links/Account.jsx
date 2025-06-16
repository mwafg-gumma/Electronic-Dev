import login from '../../assets/image/login.png'
import { FaArrowLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Account = () => {
    return (
    <>
    <section className="space-x-3">
        <div className=" py-3 bg-indigo-50 items-center cursor-pointer hover:text-green-400">
            <NavLink to="/" className="flex flex-row items-center">
        <FaArrowLeft className='text-green-400 mx-2 ' /> <h3 className='text-xl font-normal'>Back to Home</h3>
            </NavLink>
        </div>

        <div className="min-h-screen flex items-center justify-center bg-gray-100 -mt-20 md:-mt-10">
    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
    {/* Image */}
    <img src={login} alt="Preview" className="w-48 h-48 object-cover rounded-md md:block hidden" />
    {/* Form */}
    <form className="flex flex-col gap-4 ">
            <div className="text-center">
                <h1 className='text-2xl font-bold py-2'>
                    Register
                </h1>
                <h2>
                    Welcome to our Electronic website
                    </h2> 
                </div>
                <input type="email" placeholder="Enter Your Email" className="border rounded px-4 py-2" />
                    <input type="password" placeholder="Enter Your password" className="border rounded px-4 py-2" />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                    Submit
                </button>
            <div className="my-3">
                    <p>
                        Don't have an account? <NavLink to="" className='hover:text-gray-600 cursor-pointer'>Register</NavLink>
                </p>
                </div>
        </form>
        </div>
    </div>
    </section>
    </>
)
}

export default Account
