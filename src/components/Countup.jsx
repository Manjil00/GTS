import React from 'react'
import CountUp from 'react-countup'


const Countup = () => {
return (
<div className="countUPS">
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
)
}

export default Countup
