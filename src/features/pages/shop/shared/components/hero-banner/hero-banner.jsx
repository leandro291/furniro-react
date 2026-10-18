import React from 'react'
import { Link } from 'react-router-dom';
import banner from "../../../../../../assets/imgs/sections-banner.webp"

export function HeroBanner({ title }) {
    return (
        <section
            className='w-full h-80 flex flex-col justify-center items-center gap-4'
            style={{backgroundImage: `url(${banner})`}}
        >
            <h1 className='font-["Poppins"] text-5xl font-medium'>{title}</h1>
            <p className='font-["Poppins"] font-medium'><Link to={"/"} className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center">Home</Link>&gt; <span className='font-light font-["Poppins"]'>{title}</span> </p>

        </section>
    )
}
