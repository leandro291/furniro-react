// Foto de cada celda del mosaico y su posición en la grilla de 11 columnas (md y más).
// En móvil las mismas fotos caen en 2 columnas y la última ocupa todo el ancho.
export const ROOM_PHOTOS = [
    ['33569933', 'md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-5'],
    ['16283231', 'md:col-start-1 md:col-span-1 md:row-start-6 md:row-span-5'],
    ['8989592', 'md:col-start-2 md:col-span-4 md:row-start-2 md:row-span-4'],
    ['4581902', 'md:col-start-3 md:col-span-3 md:row-start-6 md:row-span-4'],
    ['32841967', 'md:col-start-8 md:col-span-3 md:row-start-2 md:row-span-5'],
    ['2090786', 'md:col-start-6 md:col-span-2 md:row-start-3 md:row-span-6'],
    ['777001', 'md:col-start-10 md:col-span-2 md:row-start-7 md:row-span-2'],
    ['35820991', 'md:col-start-11 md:col-span-1 md:row-start-1 md:row-span-6'],
    ['29043373', 'md:col-start-8 md:col-span-2 md:row-start-7 md:row-span-3'],
]

export const roomPhotoUrl = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`
