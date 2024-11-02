import React, {useEffect} from 'react'
import CountUp from 'react-countup'
//Components
import Nav from '../components/Nav'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const offset = 300;
    const duration = 600;

    useEffect(()=>{
        document.title = "Genuine Tech and Service";
        Aos.init({offset:100,duration:600});

    },[offset,
        duration])


return (
<div className='MainContainer h-auto w-full bg-Beigebg'>
        <Nav/>
    <div className="Section1 h-[350px] md:h-[600px] w-full relative">
            <img src='../images/main_photo.jpg' className='w-full h-[280px] md:h-[550px]' alt='main_photo'/>
        <div className="texts text-white absolute  top-3 left-20  md:top-[100px] md:left-[300px]  ml-2 mt-12 md:mt-14 md:ml-10 flex justify-between items-center gap-[20px] md:gap-[300px]">
            <div className="left1 text-center">
                <h1 className='text-xl md:text-5xl font-titleFont '>"Your Server Doctor"</h1>
                <p className='text-xs md:text-xl mt-5 break-words w-[250px] md:w-[900px]'>Genuine Tech and Services delivers high-performance servers and expert configuration solutions tailored to power businesses of all sizes. From custom-built servers to seamless setup and ongoing support, our team ensures reliable, optimized infrastructure so you can operate securely and efficiently.</p>
            </div>
        </div>

    <div className="countups flex justify-center items-center gap-5 absolute bottom-0 inset-x-6">
        <div className='cards h-[100px] w-[100px] md:h-[130px] md:w-[190px] bg-blue-600 cursor-pointer hover:bg-black  rounded-xl p-3'>
                <h1 className='text-center md:mt-2 text-xl md:text-4xl font-bold text-white '>
                    <CountUp end={25} duration={6}></CountUp>+</h1>
                <p className='text-center mt-3 break-words text-xs md:text-xl font-semibold text-white'>Happy Clients</p>
        </div>
        <div className='cards2 h-[100px] w-[100px] md:h-[130px] md:w-[190px] bg-blue-600 cursor-pointer hover:bg-black  rounded-xl p-3'>
                <h1 className='text-center md:mt-2 text-xl md:text-4xl font-bold text-white'>
                <CountUp end={100} duration={6}></CountUp>+</h1>
                <p className='text-center mt-3 break-words text-xs md:text-xl font-semibold text-white'>Maintained Servers</p>
        </div>
        <div className='cards3 h-[100px] w-[100px] md:h-[130px] md:w-[190px] bg-blue-600 cursor-pointer hover:bg-black rounded-xl p-3'>
                <h1 className='text-center md:mt-2 text-xl md:text-4xl font-bold text-white'>
                <CountUp end={25} duration={6}></CountUp>+</h1>

                <p className='text-center mt-3 break-words text-xs md:text-xl font-semibold text-white'>Projects Completed</p>
        </div>
    </div>
    </div>

    {/* //SECTION2 */}
    <div className="Section2 h-auto w-full md:mt-5 p-4 flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center" data-aos="fade-up">
        <div className="left h-[200px] w-[350px] md:h-[350px] md:w-[350px]">
            <img src='../images/server1.jpg' className='rounded-xl h-[200px] w-[400px] md:h-[350px] md:w-[350px] ' alt='sec2img'/>
        </div>
        <div className="Righttexts w-[300px] md:w-[1000px]">
            <h1 className='font-sans text-2xl md:text-4xl'>Genuine Tech and Services Pvt. Ltd.</h1>
            <p className=' mt-5 md:mt-10 font-sans text-sm md:text-md'>Genuine Tech and Services Pvt. Ltd. is an IT service company dedicated to helping its customers get the best possible return on their investment in IT infrastructure.
We offer managed IT services for small to mid-sized organizations, businesses, and non-profit organizations. We deliver a variety of IT solutions including secure and reliable Computer Networks, Web Hosting, Website and Application Development, Surveillance, and more. We are highly dedicated to addressing your business and IT needs, so please don’t hesitate to contact us to schedule a free initial consultation. We will gladly meet you at your place to discuss how our IT services can aid your business to grow stronger, in light of your current resources and your existing business process.</p>
        </div>
    </div>

    {/* SECTION3 SERVICES */}
    <div className="Section3 h-auto w-full p-2" data-aos="fade-up">
        <div className="servicetext">
            <h1 className='font-sans text-xl md:text-4xl text-center mt-4'>Our Services</h1>
        </div>
        <div className="cards mt-10 grid grid-cols-2 md:grid-cols-3 justify-center justify-items-center gap-y-10">
            <div className="card1 rounded-xl h-auto w-[200px] md:w-[400px] bg-white p-2">
            <img src='../images/server1.jpg' className=' rounded-xl' alt='card1'/>
            <h1 className='font-sans text-lg md:text-xl text-center mt-2'>Custom Server Setup</h1>
            <p className='font-sans text-sm md:text-md text-start mt-2 ml-3'>Setting up of own and custom made servers with professionals.</p>
            <button className='text-center text-sm  md:text-md bg-blue-600 rounded-lg md:rounded-xl p-2 mt-5 ml-12 md:ml-[290px]'>Learn more</button>
            </div>

            <div className="card1 rounded-xl h-auto w-[200px] md:w-[400px] bg-white p-2">
            <img src='../images/server1.jpg' className=' rounded-xl' alt='card1'/>
            <h1 className='font-sans text-lg md:text-xl text-center mt-2'>Custom Server Setup</h1>
            <p className='font-sans text-sm md:text-md text-start mt-2 ml-3'>Setting up of own and custom made servers with professionals.</p>
            <button className='text-center text-sm  md:text-md bg-blue-600 rounded-lg md:rounded-xl p-2 mt-5 ml-12 md:ml-[290px]'>Learn more</button>
            </div>

            <div className="card1 rounded-xl h-auto w-[200px] md:w-[400px] bg-white p-2">
            <img src='../images/server1.jpg' className=' rounded-xl' alt='card1'/>
            <h1 className='font-sans text-lg md:text-xl text-center mt-2'>Custom Server Setup</h1>
            <p className='font-sans text-sm md:text-md text-start mt-2 ml-3'>Setting up of own and custom made servers with professionals.</p>
            <button className='text-center text-sm  md:text-md bg-blue-600 rounded-lg md:rounded-xl p-2 mt-5 ml-12 md:ml-[290px]'>Learn more</button>
            </div>

            <div className="card1 rounded-xl h-auto w-[200px] md:w-[400px] bg-white p-2">
            <img src='../images/server1.jpg' className=' rounded-xl' alt='card1'/>
            <h1 className='font-sans text-lg md:text-xl text-center mt-2'>Custom Server Setup</h1>
            <p className='font-sans text-sm md:text-md text-start mt-2 ml-3'>Setting up of own and custom made servers with professionals.</p>
            <button className='text-center text-sm  md:text-md bg-blue-600 rounded-lg md:rounded-xl p-2 mt-5 ml-12 md:ml-[290px]'>Learn more</button>
            </div>
            <div className="card1 rounded-xl h-auto w-[200px] md:w-[400px] bg-white p-2">
            <img src='../images/server1.jpg' className=' rounded-xl' alt='card1'/>
            <h1 className='font-sans text-lg md:text-xl text-center mt-2'>Custom Server Setup</h1>
            <p className='font-sans text-sm md:text-md text-start mt-2 ml-3'>Setting up of own and custom made servers with professionals.</p>
            <button className='text-center text-sm  md:text-md bg-blue-600 rounded-lg md:rounded-xl p-2 mt-5 ml-12 md:ml-[290px]'>Learn more</button>
            </div>
            <div className="card1 rounded-xl h-auto w-[200px] md:w-[400px] bg-white p-2">
            <img src='../images/server1.jpg' className=' rounded-xl' alt='card1'/>
            <h1 className='font-sans text-lg md:text-xl text-center mt-2'>Custom Server Setup</h1>
            <p className='font-sans text-sm md:text-md text-start mt-2 ml-3'>Setting up of own and custom made servers with professionals.</p>
            <button className='text-center text-sm  md:text-md bg-blue-600 rounded-lg md:rounded-xl p-2 mt-5 ml-12 md:ml-[290px]'>Learn more</button>
            </div>
        </div>
    </div>

    {/* SECTION 4 */}
    <div className="Section4WhyChooseUsh-auto w-full md:mt-5 p-5 flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center" data-aos="fade-up">
    <div className="left h-[200px] w-[350px] md:h-[350px] md:w-[500px]">
            <img src='../images/server1.jpg' className='rounded-xl h-[200px] w-[400px] md:h-[350px] md:w-[500px] ' alt='sec2img'/>
        </div>
        <div className="Righttexts w-[300px] md:w-[1000px]">
            <h1 className='font-sans text-2xl md:text-4xl'>Why Choose Us ?</h1>
            <p className=' mt-5 md:mt-10 font-sans text-sm md:text-md'>Genuine Tech and Services Pvt. Ltd. is an IT service company dedicated to helping its customers get the best possible return on their investment in IT infrastructure.
We offer managed IT services for small to mid-sized organizations, businesses, and non-profit organizations. We deliver a variety of IT solutions including secure and reliable Computer Networks, Web Hosting, Website and Application Development, Surveillance, and more. We are highly dedicated to addressing your business and IT needs, so please don’t hesitate to contact us to schedule a free initial consultation. We will gladly meet you at your place to discuss how our IT services can aid your business to grow stronger, in light of your current resources and your existing business process.</p>
        </div>
    </div>
</div>
)
}

export default Home
