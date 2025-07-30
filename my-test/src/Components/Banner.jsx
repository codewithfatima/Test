import React, { useEffect, useState } from 'react'
import Men from '../../src/assets/Men.png';
import Women from '../../src/assets/women.png';
import Jwellery from '../../src/assets/Jwellery.png';
import Electronic from '../../src/assets/Electronic.png'

const Banner = () => {
    const [current, setCurrent] = useState(0)
    const slides = [
        {
            img: Men,
            text: "Elevate Your Look – Men's Style Picks",
        },
        {
            img: Women,
            text: "Grace in Every Detail – Women's Collection",
        },
        {
            img: Jwellery,
            text: "Shine with Every Step – Shop Jewelry",
        },
        {
            img: Electronic,
            text: "Smart Choices – Explore Electronics",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [slides.length])

    return (
        <>
            <div className='bg-yellow-100 p-4 h-[400px] relative overflow-hidden'>
                <div className='flex justify-between items-center space-x-4 h-full duration-500'>
                    <div className='ml-10 w-1/2 '>
                        <p className='text-[28px] font-semibold sm:text[20px]'>{slides[current].text}</p>
                        <button className='bg-yellow-500 px-8 py-2 text-white rounded-lg mt-5 '>Show Now</button>
                        <button className='m-2 p-2 border border-yellow-500 rounded-lg'>Explore More</button>
                    </div>
                    <img
                        src={slides[current].img}
                        alt="Slide"
                        className="w-[210px] h-[280px] 
                         sm:w-[180px] sm:h-[120px] 
                        md:w-[210px] md:h-[280px] 
                        object-cover rounded mr-10 sm:mr-16 md:mr-20 "
                    />
                </div>

                <div className='flex justify-center mt-4 space-x-3 absolute bottom-4 left-0 right-0'>
                    {slides.map((_i, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-3 w-3  rounded-full cursor-pointer transition-all duration-300  border-yellow-500 outline-none
                                ${index === current ? 'bg-yellow-500 scale-125' : 'bg-white border border-yellow-500'} `}
                        >

                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Banner