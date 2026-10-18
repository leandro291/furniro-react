import React from 'react'

export function FooterNewsletter() {
    return (
        <div className='flex flex-col gap-10 '>
            <h4 className='font-["Poppins"] text-gray-500 text-center'>Newsletter</h4>
            
            <div className='flex gap-4 w-full'>
                <input
                    className='border-b-2 pr-5 min-h-[44px] min-w-0 flex-1' 
                    type="email"
                    placeholder='Enter Your Email Address' 
                />
                <button className='font-["Poppins"] text-14px uppercase border-b-2 cursor-pointer min-h-[44px] px-2'>Subscribe</button>
            </div>
        </div>
    )
}
