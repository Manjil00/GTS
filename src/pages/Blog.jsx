import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
//Components
import Nav from "../components/Nav";
import Footer from '../components/Footer';

//Mockdata blogs
import {gtsBlog} from '../gtsBlog';

const Blog = () => {

  const offset = 300;
  const duration = 600;

  useEffect(()=>{
      document.title = "Genuine Tech and Service";
      Aos.init({offset:50,duration:600});

  },[offset,
      duration])


  return (
    <div className='main-Blog w-full h-auto bg-Beigebg '>
      <Nav/>

      <div className="body w-full h-auto p-5 flex flex-col justify-center items-center gap-5" data-aos="fade-up">
        {
          gtsBlog.map((item, index) => {
            return (
              <div key={item.index}
              className="BlogCard rounded-xl w-[350px] md:w-[900px] h-[200px] p-3 flex items-center gap-8 bg-slate-500">
              <img src={item.blogImage} className='h-[150px] w-[100px] md:w-[150px] rounded-xl' alt='blog1'/>
              <div className="blogtxt">
              <h1 className='font-sans text-xl md:text-4xl text-center'>{item.blogTitle}</h1>
              <p className='font-sans text-xs md:text-sm mt-5 text-center'>{item.blogContent}</p>
              </div>
              </div>
            )
          })
        }

      </div>

      <Footer/>
    </div>
  )
}

export default Blog
