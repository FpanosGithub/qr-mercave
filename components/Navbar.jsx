'use client'
import Image from 'next/image';
import adif from  '@/public/logos/adif.png'

export default function Navbar({admin}) {  
  return (
    <div className='border border-b border-gray-300 flex px-4 justify-between items-center bg-white'>
        <Image src={adif} width = {80} height={40} alt='logo adif' className='w-auto' priority/>
    </div>
  )
}
