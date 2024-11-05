import React from 'react';
//COMPONENTS
import Nav from '../components/Nav';

const Contact = () => {
  return (
    <div className='Main-containerContact'>
      <Nav/>
      <div className="contactPart h-[110vh] md:h-[89vh] p-5 bg-Beigebg flex flex-col md:flex-row justify-evenly items-center gap-10">
        <div className="Left">
          <h1 className="text-3xl text-black font-bold">Contact Us</h1>
          <p className="text-black text-lg">+977-9812345670 / 01-4312345</p>

          <h1 className="text-3xl text-black font-bold mt-5">Email Us</h1>
          <p className="text-black text-lg">gts@gmail.com</p>
        </div>

        <div className="Right h-[500px] w-[400px] md:w-[500px] bg-black rounded-xl p-5 flex flex-col justify-center items-center gap-10">
        <input className='h-[50px] w-[90%] rounded-xl p-4' placeholder='Full Name'></input>
        <input className='h-[50px] w-[90%] rounded-xl p-4' placeholder='Email'></input>
        <input className='h-[50px] w-[90%] rounded-xl p-4' placeholder='Phone No.'></input>
        <input className='h-[90px] w-[90%] rounded-xl p-4' placeholder='Description'></input>
        <button className='h-[50px] w-[100px] rounded-xl p-4 bg-white text-xl text-center'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
