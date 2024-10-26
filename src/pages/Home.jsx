import React from 'react'
import CountUp from 'react-countup'
//Components
import Nav from '../components/Nav'


const Home = () => {
return (
<div className='MainContainer h-auto w-full bg-Beigebg'>
        <Nav/>
    <div className="Section1 h-[350px] md:h-[600px] w-full relative">
            <img src='../images/main_photo.jpg' className='w-full h-[280px] md:h-[550px]' alt='main_photo'/>
        <div className="texts text-white absolute top-0 left-0 ml-2 mt-12 md:mt-14 md:ml-10 flex justify-between items-center gap-[20px] md:gap-[300px]">
            <div className="left1">
                <h1 className='text-xl md:text-5xl font-titleFont '>"Your Server Doctor"</h1>
                <p className='text-xs md:text-xl mt-5 break-words w-[250px] md:w-[700px]'>Genuine Tech and Services delivers high-performance servers and expert configuration solutions tailored to power businesses of all sizes. From custom-built servers to seamless setup and ongoing support, our team ensures reliable, optimized infrastructure so you can operate securely and efficiently.</p>
            </div>

            <div className="right1">
                <img src='../images/server1.jpg' className=' h-[150px] w-[150px] md:h-[400px] md:w-[400px]' alt='test'/>
            </div>
        </div>

        <div className="countups flex justify-center items-center gap-5 absolute bottom-0 inset-x-6">
        <div className='cards h-[100px] w-[100px] md:h-[130px] md:w-[190px] bg-green-800 rounded-xl p-3'>
                <h1 className='text-center md:mt-2 text-xl md:text-4xl font-bold'>
                    <CountUp end={25} duration={6}></CountUp>+</h1>
                <p className='text-center mt-3 break-words text-xs md:text-xl'>qwertiueyruwecxcsda</p>
        </div>
        <div className='cards2 h-[100px] w-[100px] md:h-[130px] md:w-[190px] bg-green-800 rounded-xl p-3'>
                <h1 className='text-center md:mt-2 text-xl md:text-4xl font-bold'>
                <CountUp end={25} duration={6}></CountUp>+</h1>
                <p className='text-center mt-3 break-words text-xs md:text-xl'>qwertiueyruwecx</p>
        </div>
        <div className='cards3 h-[100px] w-[100px] md:h-[130px] md:w-[190px] bg-green-800 rounded-xl p-3'>
                <h1 className='text-center md:mt-2 text-xl md:text-4xl font-bold'>
                <CountUp end={25} duration={6}></CountUp>+</h1>

                <p className='text-center mt-3 break-words text-xs md:text-xl'>qwertiueyrcscsdcdsccrda</p>
        </div>
        </div>
        
    </div>
</div>
)
}

export default Home
