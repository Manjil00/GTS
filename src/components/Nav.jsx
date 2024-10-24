import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"; //ICONS
import { Link } from 'react-router-dom';


const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

return (
    <nav className="flex justify-between px-6 py-3 z-50 relative bg-white">
    <div className="flex justify-center items-center">
        <img className="w-[50px] h-[50px] mr-3" src="../images/gtslogo.jpg" alt="Logo" />
        <h1 className='text-black ml-6  text-sm md:text-4xl
cursor-pointer flex justify-center items-center'>Genuine Tech & Services</h1>

    </div>
    <div className={`bg-white absolute min-h-[30vh] left-0 top-[90%] w-full p-5 flex flex-col md:static md:flex md:min-h-fit md:w-auto gap-9 text-sm ${isNavOpen ? 'block' : 'hidden'}`}>
        <ul className=" cursor-pointer flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-evenly md:text-xl font-writingFont">
        <Link to="/"><li className="hover:text-green-600">Home</li></Link>
        <Link to="/Services"><li className="hover:text-blue-600">Products & Services</li></Link>
        <Link to="/Blog"><li className="hover:text-blue-600">Blog</li></Link>
        <Link to="/AboutUs"><li className="hover:text-blue-600">About us</li></Link>
        <Link to="/ClientDairies"><li className="hover:text-blue-600">Client Dairies</li></Link>
        <Link to="/Contact"><li className="hover:text-blue-600">Contact Us</li></Link>
        <Link to="/Cart"><li className="hover:text-blue-600">Cart</li></Link>
        </ul>
    </div>
    <div>
        <button onClick={toggleNavMenu} className="md:hidden">
            {
            isNavOpen ? <RxCross1 className="text-2xl text-black" /> :
            <RxHamburgerMenu className={`text-2xl text-black  ${isNavOpen ? 'hidden' : 'block'}`} />
            }
        </button>
    </div>
</nav>
)
}

export default Nav;