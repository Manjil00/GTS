import React from 'react'

//Components
import Nav from '../components/Nav'


const Home = () => {
return (
    <div className='MainContainer h-auto w-full bg-Beigebg'>
        <Nav/>
        <div className="Section1 h-[300px] md:h-[600px] w-full relative">
            <img src='../images/main_photo.jpg' className='w-full h-[300px] md:h-[600px]' alt='main_photo'/>
            <div className="texts text-white absolute top-[100px] left-[50px]   md:top-[150px] md:left-[150px]">
                <h1 className='text-sm md:text-5xl font-titleFont '>Your Server Doctor</h1>
            </div>
        </div>
    </div>
)
}

export default Home
