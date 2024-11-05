import React from 'react'
//ICONS
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
return (
<div className="footer h-[200px] w-full p-5 flex justify-between items-center bg-Beigebg">
<div className="left h-[200px]  w-[100px] md:w-[500px] flex flex-col justify-center items-start">
    <h1 className='font-sans text-xl md:text-2xl '>Details:</h1>
    <p className='font-sans text-xs'>Location : New Road Pako, Kathmandu</p>
    <p className='font-sans text-xs'>Email:aaaaa@gmail.com</p>
    <p className='font-sans text-xs'>Phone: 9812345678</p>
</div>

<div className="rightall">

<div className="right h-[50px] w-[150px] rounded-xl bg-white flex justify-evenly items-center gap-5 p-2">
<FiInstagram size={20}/>
<BsLinkedin size={20} />
<FaSquareFacebook size={20}/>
<FaFacebookMessenger size={20}/>
</div>

<div className="rightreserved w-[170px] md:w-[300px] ">
    <h1 className='font-sans text-xs md:text-sm '>@All right Reserved by Genuine Tech and Service</h1>
</div>
</div>


</div>
)
}

export default Footer;