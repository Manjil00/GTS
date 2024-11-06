import React from 'react'

//COMPONENTS
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Aboutus = () => {
  return (
    <div className='Main_aboutus bg-Beigebg w-full h-auto'>
      <Nav/>
      
      <div className="body w-full h-auto p-5 flex justify-evenly items-start gap-10 relative">
      <img src="../images/ITteam.jpg" className='w-[650px] h-[400px]' alt='teampicture'/>
      <div className="aboutus">
      <h1 className='font-titleFont text-4xl absolute left-[550px] top-10'><span className='text-red-700'>ABOUT</span> US</h1>
      <p className='font-sans mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis porro placeat quasi asperiores quae, dignissimos dicta adipisci, nihil quas repudiandae ratione modi delectus dolorum facilis? Impedit nemo itaque debitis.</p>
      </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Aboutus
