import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"; //ICONS
import { Link } from 'react-router-dom';


const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

return (
    <nav className="flex justify-between px-6 py-3 z-50 relative bg-Gts_white ">
    <div className="flex justify-center items-center">
        <img className="w-[50px] h-[50px] mr-3" src="../icons/gtslogo.jpg" alt="Logo" />
        <h1 className='text-appleblack ml-6  text-sm md:text-3xl
cursor-pointer flex justify-center items-center font-sans'>Genuine Tech & Services</h1>

    </div>
    <div className={`bg-Gts_white text-appleblack absolute min-h-[30vh] left-0 top-[90%] w-full p-5 flex flex-col md:static md:flex md:min-h-fit md:w-auto gap-9 text-sm ${isNavOpen ? 'block' : 'hidden'}`}>
        <ul className=" cursor-pointer flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-evenly md:text-lg font-writingFont">
        <Link to="/"><li className="hover:text-Gts_blue">Home</li></Link>
        <Link to="/Services"><li className="hover:text-Gts_blue">Services</li></Link>
        <Link to="/Blog"><li className="hover:text-Gts_blue">Blogs</li></Link>
        <Link to="/AboutUs"><li className="hover:text-Gts_blue">About us</li></Link>
        <Link to="/ClientDairies"><li className="hover:text-Gts_blue">Client Dairies</li></Link>
        <Link to="/Contact"><li className="hover:text-Gts_blue">Contact Us</li></Link>
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