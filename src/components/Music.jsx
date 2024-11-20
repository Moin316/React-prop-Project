import React from 'react'

function Music({values,Handle,index}) {
    const {songName,artistName,image,favourites}=values;
  return (
    <div className='bg-blue-300 py-5 w-60 flex  gap-6 px-5 pb-10 rounded-md relative mt-10'>
        <div className='w-20 h-20 rounded-md bg-orange-400 overflow-hidden '>
            <img className='h-full w-full object-cover' src={image}></img>
        </div>
        <div className='flex-1'>
            <h3 className='text-xl font-semibold leading-none '>{songName}</h3>
            <p className='text-md font-semibold'>{artistName}</p>
        </div>
        <button onClick={()=>Handle(index)} className={`px-4 py-3 absolute ${favourites?"bg-teal-500":"bg-orange-500"} rounded-full  bottom-0 left-1/2 whitespace-nowrap -translate-x-[50%] translate-y-[50%] text-white text-xs`}>{
            favourites?"Added" : "Add to Favourites" }</button>
    </div>
  )
}

export default Music