import React from 'react'

function Navbar({songData}) {
  return (
    <>
        <nav className='w-full flex justify-between items-center px-8 py-5 bg-slate-200'>
            <div className='font-semibold text-'>Music</div>
            <div className='bg-orange-400 px-5 py-2.5 rounded-md text-sm'>Favourites {
                songData.filter((song) => song.favourites).length
            }</div>
        </nav>
    </>
  )
}

export default Navbar