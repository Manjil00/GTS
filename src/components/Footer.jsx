import React from 'react'
//ICONS
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
return (
<div className="footer h-[200px] w-full p-5 flex justify-between items-center">
<div className="left h-[200px]  w-[100px] md:w-[500px] flex flex-col justify-center items-start">
    <h1 className='font-sans text-xl md:text-2xl '>Details:</h1>
    <p className='font-sans text-xs'>Location : New Road Pako, Kathmandu</p>
    <p className='font-sans text-xs'>Email:aaaaa@gmail.com</p>
    <p className='font-sans text-xs'>Phone: 9812345678</p>
</div>
{/* <div className="rightreserved">
    <h1 className='font-sans text-xs md:text-xl '>All right Reserved by Genuine Tech and Service</h1>
</div> */}

<div className="right h-[50px] w-[150px] rounded-xl bg-green-800 flex justify-evenly items-center gap-5">
<FiInstagram size={10}/>
<BsLinkedin size={10} />
<FaSquareFacebook size={10}/>
<FaFacebookMessenger size={10}/>

</div>
</div>
)
}

export default Footer;