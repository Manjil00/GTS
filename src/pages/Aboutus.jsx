import React from 'react'

//COMPONENTS
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Aboutus = () => {
  return (
    <div className='Main_aboutus bg-Beigebg w-full h-auto'>
      <Nav/>
      
      <div className="body w-full h-auto py-5 px-10 flex flex-col md:flex-row justify-evenly items-start gap-10">
      <img src="../images/ITteam.jpg" className='rounded-xl md:w-[650px] w-[400px] h-[300px] md:h-[400px]' alt='teampicture'/>
      <div className="aboutus">
      <h1 className='font-titleFont text-2xl md:text-4xl '><span className='text-blue-700'>ABOUT</span> US</h1>
      <p className='font-sans mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis porro placeat quasi asperiores quae, dignissimos dicta adipisci, nihil quas repudiandae ratione modi delectus dolorum facilis? Impedit nemo itaque debitis.</p>
      </div>
      </div>

      <div className="mission w-full h-auto flex flex-col justify-evenly items-center px-10 md:px-32 py-5">
      <h1 className='font-titleFont text-2xl md:text-4xl text-center'><span className='text-blue-700'>Our</span> Mission</h1>
      <p className='font-sans mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores sed nesciunt enim, at fugiat reiciendis sapiente aperiam sit alias tenetur deleniti, dignissimos excepturi libero exercitationem laboriosam eius sequi nemo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores sed nesciunt enim, at fugiat reiciendis sapiente aperiam sit alias tenetur deleniti, dignissimos excepturi libero exercitationem laboriosam eius sequi nemo?</p>
      
      <div className="circlemissions flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
      <div className="mission1 rounded-xl h-[80px] md:h-[100px] w-[350px] bg-slate-400 flex justify-evenly items-center gap-2">
        <img src='../images/main_photo.jpg' className='rounded-full ml-2 h-[60px] w-[60px]' alt='mission1'/>
      <h1 className='h-[60px] w-full text-xs p-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi eligendi dolor est officiis vel non</h1>
      </div>
      <div className="mission1 rounded-xl h-[80px] md:h-[100px] w-[350px] bg-slate-400 flex justify-evenly items-center gap-2">
        <img src='../images/main_photo.jpg' className='rounded-full ml-2 h-[60px] w-[60px]' alt='mission1'/>
      <h1 className='h-[60px] w-full text-xs p-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi eligendi dolor est officiis vel non</h1>
      </div>

      <div className="mission1 rounded-xl h-[80px] md:h-[100px] w-[350px] bg-slate-400 flex justify-evenly items-center gap-2">
        <img src='../images/main_photo.jpg' className='rounded-full ml-2 h-[60px] w-[60px]' alt='mission1'/>
      <h1 className='h-[60px] w-full text-xs p-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi eligendi dolor est officiis vel non</h1>
      </div>
      </div>
      </div>

      <div className="mindsmagic">

      <h1 className='font-titleFont text-2xl md:text-4xl text-center mt-5'>Minds Behind the Magic</h1>

      <div className="pictures flex flex-col md:flex-row justify-evenly items-center gap-5 p-5">
      <div className="card1 rounded-xl w-[250px] h-[300px] bg-slate-400 flex flex-col justify-center items-center">
        <img src='../images/ITteam.jpg' className='rounded-full w-[90%] h-[80%]' alt='CEO'/>
        <h1 className="title font-sans text-xl mt-3">C.E.O</h1>
      </div>

      <div className="card2 rounded-xl w-[250px] h-[300px] bg-slate-400 flex flex-col justify-center items-center">
        <img src='../images/ITteam.jpg' className='rounded-full w-[90%] h-[80%]' alt='CEO'/>
        <h1 className="title font-sans text-xl mt-3">Manager</h1>
      </div>

      <div className="card3 rounded-xl w-[250px] h-[300px] bg-slate-400 flex flex-col justify-center items-center">
        <img src='../images/ITteam.jpg' className='rounded-full w-[90%] h-[80%]' alt='CEO'/>
        <h1 className="title font-sans text-xl mt-3">Staff Member</h1>
      </div>
      </div>
      

      </div>

      <Footer/>
    </div>
  )
}

export default Aboutus
