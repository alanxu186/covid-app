import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='sticky top-0 w-full text-white flex justify-between p-4 items-center z-50 bg-[#18434e]'>

            <div className='text-2xl font-bold text-center uppercase p-4'>
                <h1 className='block text-7xl'> Covid Tracker</h1>
            </div>

            <nav>
                <div className='absolute right-6 md:hidden top-6 scale-150'>
                    <AiOutlineMenu onClick={handleNav} className='scale-150 cursor-pointer' />
                </div>

                <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10 h-20 ">
                    <li> <Link to={"/"}>Home</Link> </li>
                    <li> <Link to={"/about"}>About</Link> </li>
                </ul>

                <ul className={nav ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                    <AiOutlineClose onClick={handleNav} className='cursor-pointer' />

                    <li> <Link to={"/"}>Home</Link> </li>
                    <li> <Link to={"/about"}>About</Link> </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar