import React from 'react'

export function SkeletonCategories() {
    return (
        <div className='grid grid-cols-3 gap-2 sm:gap-5 mt-10 sm:mt-15 max-w-300 w-full rounded-lg'>
            <div className='aspect-[3/4] sm:aspect-auto sm:h-120 bg-gray-200/60 animate-pulse'></div>
            <div className='aspect-[3/4] sm:aspect-auto sm:h-120 bg-gray-200/60 animate-pulse'></div>
            <div className='aspect-[3/4] sm:aspect-auto sm:h-120 bg-gray-200/60 animate-pulse'></div>
        </div>
    )
}