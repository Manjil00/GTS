import React from 'react'

//Components
import Nav from '../components/Nav'


const Home = () => {
return (
    <div className='MainContainer h-auto w-full bg-Beigebg'>
        <Nav/>
        <div className="Section1 h-[300px] md:h-[600px] w-full">
            <img src='../images/main_photo.jpg' className='w-full h-[300px] md:h-[600px] relative' alt='main_photo'/>
            <div className="texts">
                <h1 className='text-sm md:text-3xl'>Your Server Doctor</h1>
            </div>
        </div>
    </div>
)
}

export default Home
