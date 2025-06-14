import React from 'react'

const Background = () => {
  return (
    <div className='fixed w-full h-screen z-[2]'>
        <div className='absolute top-[5%] w-full py-10 text-xl flex justify-center text-zinc-600 font-semibold'>Documents</div>
        <h1 className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] font-semibold text-zinc-900 leading-none tracking-tighter ">Docs.</h1>
    </div>
  )
}

export default Background