import React from 'react'
//ICONS
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
return (
<div className="footer h-[200px] w-full p-5 flex justify-between items-center">
<div className="left h-[200px] w-[500px] flex flex-col justify-center items-start">
    <h1 className='font-sans text-2xl '>Details:</h1>
    <p>Location : New Road Pako, Kathmandu</p>
    <p>Email:aaaaa@gmail.com</p>
    <p>Phone: 9812345678</p>
</div>
<div className="rightreserved">
    <h1 className='font-sans text-xl '>All right Reserved by Genuine Tech and Service</h1>
</div>

<div className="right h-[50px] w-[200px] rounded-xl bg-white flex justify-center items-center gap-5">
<FiInstagram size={30}/>
<BsLinkedin size={30} />
<FaSquareFacebook size={30}/>
<FaFacebookMessenger size={30}/>

</div>
</div>
)
}

export default Footer;