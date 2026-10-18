import React from 'react'
import { CarruselFunctions } from './carrusel-functions'
import { useNavigate } from 'react-router-dom'

export function Carrusel({ slides }) {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/shop")
    }

    return (
        <div className='container mx-auto xl:h-167 bg-orange-100/30 mt-12 sm:mt-20'>

            <div className='grid gap-8 xl:gap-10 xl:grid-cols-[500px_auto] px-6 sm:px-10 xl:pl-20 xl:pr-0 xl:h-full py-10 '>
                <div className='flex flex-col items-start lg:justify-center gap-3 w-full'>
                    <h2 className='font-["Poppins"] font-bold text-3xl sm:text-[40px] text-gray-950'>50+ Beautiful rooms inspiration</h2>
                    <p className='font-["Poppins"] text-gray-600 font-medium'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <button className='font-["Poppins"] font-semibold text-white py-3 px-10 min-h-[44px] bg-brand mt-3 cursor-pointer ' onClick={handleNavigate}>Explore More</button>
                </div>
                <div className="h-72 sm:h-96 xl:h-full min-w-0"><CarruselFunctions slides={slides}/></div>
            </div>

        </div>
    )
}
