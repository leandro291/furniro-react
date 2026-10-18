import React, { useState } from 'react'
import { RoomShowcaseSkeleton } from '../../../shared/components/skeleton/skeleton-room-showcase'
import { ROOM_PHOTOS, roomPhotoUrl } from '../../../constants/home/room-showcase'

export function RoomShowcaseMosaic() {

    const [ loadingCount, setLoadingCount] = useState(0);

    const handleImageLoad = () => {
        setLoadingCount(next => next + 1);
    };

    const allLoading = loadingCount >= ROOM_PHOTOS.length;

    return (
        <div className='relative px-4 md:px-0'>

            {!allLoading && <RoomShowcaseSkeleton />}

            <div className={`container grid grid-cols-2 gap-3 md:grid-cols-11 md:grid-rows-[repeat(10,60px)] md:gap-5 ${!allLoading ? 'hidden' : ''}`}>
                {ROOM_PHOTOS.map(([id, place], i) => (
                    <div key={id} className={`aspect-[4/5] md:aspect-auto overflow-hidden ${i === ROOM_PHOTOS.length - 1 ? 'max-md:col-span-2 max-md:aspect-video' : ''} ${place}`}>
                        <img src={roomPhotoUrl(id)} alt="" className='w-full h-full object-cover' onLoad={handleImageLoad} />
                    </div>
                ))}
            </div>
        </div>
    )
}
