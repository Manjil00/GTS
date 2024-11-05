import React from 'react';
//COMPONENTS
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Service = () => {
  return (
    <div className='MaincontainerService w-full h-auto bg-Beigebg'>
      <Nav/>

      <div className="service w-full h-auto p-5">
      <h1 className='font-sans text-center text-2xl md:text-4xl'>Our Services</h1>

      <div className="card grid grid-cols-1 md:grid-cols-3 justify-center items-center ">
        <div className="CARD1 bg-black h-[400px] w-[400px] rounded-xl mt-8 p-3 cursor-pointer">
          <img src='../images/main_photo.jpg' className='w-[390px] h-[250px] rounded-xl' alt='imgservice1'/>
        <h1 className='text-white font-sans text-3xl text-start ml-3'>Service One</h1>
        <p className='text-white font-sans text-xs text-start ml-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, in aliquid. Porro nesciunt et iusto neque, mollitia doloremque? Eligendi consectetur reprehenderit voluptatibus saepe, ratione dolorum. Totam et quod ipsam veritatis?</p>
        </div>
        <div className="CARD2 bg-black h-[400px] w-[400px] rounded-xl mt-8 p-3 cursor-pointer">
        <img src='../images/server1.jpg' className='w-[390px] h-[250px] rounded-xl' alt='imgservice1'/>
        <h1 className='text-white font-sans text-3xl text-start ml-3'>Service Two</h1>
        <p className='text-white font-sans text-xs text-start ml-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, in aliquid. Porro nesciunt et iusto neque, mollitia doloremque? Eligendi consectetur reprehenderit voluptatibus saepe, ratione dolorum. Totam et quod ipsam veritatis?</p>
          </div>

          <div className="CARD3 bg-black h-[400px] w-[400px] rounded-xl mt-8 p-3 cursor-pointer">
          <img src='../images/server1.jpg' className='w-[390px] h-[250px] rounded-xl' alt='imgservice1'/>
          <h1 className='text-white font-sans text-3xl text-start ml-3'>Service Three</h1>
        <p className='text-white font-sans text-xs text-start ml-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, in aliquid. Porro nesciunt et iusto neque, mollitia doloremque? Eligendi consectetur reprehenderit voluptatibus saepe, ratione dolorum. Totam et quod ipsam veritatis?</p>
          </div>
          <div className="CARD4 bg-black h-[400px] w-[400px] rounded-xl mt-8 p-3  cursor-pointer">
          
          </div>
          <div className="CARD5 bg-black h-[400px] w-[400px] rounded-xl mt-8 p-3  cursor-pointer">
          
          </div>
      </div>

      </div>

    <Footer/>
    </div>
  )
}

export default Service
