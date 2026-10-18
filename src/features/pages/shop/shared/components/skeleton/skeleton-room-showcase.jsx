import { SkeletonRoomShowcaseBlock } from "./skeleton-room-showcase-block";
import { ROOM_PHOTOS } from "../../../constants/home/room-showcase";

export function RoomShowcaseSkeleton() {
    return (
        <div className='grid grid-cols-2 gap-3 md:grid-cols-11 md:grid-rows-[repeat(10,60px)] md:gap-5 w-full'>
            {ROOM_PHOTOS.map(([id, place], i) => (
                <SkeletonRoomShowcaseBlock key={id} className={`aspect-[4/5] md:aspect-auto ${i === ROOM_PHOTOS.length - 1 ? 'max-md:col-span-2 max-md:aspect-video' : ''} ${place}`} />
            ))}
        </div>
    );
}
