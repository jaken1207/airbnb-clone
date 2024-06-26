import Image from "next/image";
import React from 'react';
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserIcon } from '@heroicons/react/24/outline'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
         src="https://links.papareact.com/qd3" 
         alt="airbnb logo"
         layout="fill" 
         objectFit="contain"
         objectPosition="left"
        />
      </div>

      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
        <input className="flex-grow text-gray-600 placeholder-gray-400 pl-5 bg-transparent outline-none" type="text" placeholder="Start your search"/>
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 md:mx-2"/>
      </div>
      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-400 ">
        <p className="hidden md:inline cursor-pointer">Airbnbにお部屋を掲載</p>
        <GlobeAltIcon className="h-6 cursor-pointer"/>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <UserIcon className="h-6"/>
          <Bars3Icon className="h-6"/>
        </div>
      </div>
    </header>
  )
}

export default Header
