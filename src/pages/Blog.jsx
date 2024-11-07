import React from 'react';

//Components
import Nav from "../components/Nav";
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <div className='main-Blog w-full h-auto bg-Beigebg '>
      <Nav/>

      <div className="body w-full h-[500px] p-5 flex flex-col justify-center items-center gap-5">
        <div className="BlogCard rounded-xl w-[400px] md:w-[900px] h-[200px] p-3 flex justify-evenly items-center gap-8 bg-slate-500">
        <img src='../images/main_photo.jpg' className='h-full w-[300px] rounded-xl' alt='blog1'/>
        <div className="blogtxt">
        <h1 className='font-sans text-xl md:text-4xl'>Title</h1>
        <p className='font-sans text-xs md:text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo ex eveniet repudiandae ipsa porro vero? Odit beatae, amet debitis pariatur quas officiis, sed commodi animi quasi quia fuga harum.</p>
        </div>
        </div>

        <div className="BlogCard2 rounded-xl w-[900px] h-[200px] p-3 flex justify-evenly items-center gap-8 bg-slate-500">
        <img src='../images/main_photo.jpg' className='h-full w-[300px] rounded-xl' alt='blog2'/>
        <div className="blogtxt">
        <h1 className='font-sans text-xl md:text-4xl'>Title</h1>
        <p className='font-sans text-xs md:text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo ex eveniet repudiandae ipsa porro vero? Odit beatae, amet debitis pariatur quas officiis, sed commodi animi quasi quia fuga harum.</p>
        </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Blog
