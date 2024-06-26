/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'

function Bunner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image src="https://links.papareact.com/0fm" 
      layout="fill"
      objectFit='cover'/>
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>旅の計画を手伝ってもらいますか？</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
            こちらをクリック
        </button>
      </div>
    </div>
    
  )
}

export default Bunner
