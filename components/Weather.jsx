'use client'
import {useEffect, useState} from 'react'
import IconoTiempo from './IconoTiempo'

export default function Weather({lat, long}) {
  const [weather, setWeather] = useState (null)
  const [loading, setLoading]= useState(false)
  
  useEffect(()=>{
    setLoading(true)
    const getWeather = async ()=>{
      const res = await fetch(`/api/weather?lat=${lat}&lon=${long}`)
      const data = await res.json()
      setWeather(data)
      setLoading(false)
    }
    getWeather()
  },[lat,long])

  console.log(weather?.icono)
  return (
    <div className='mx-3 mt-3 py-2 border-t border-gray-200 flex justify-between'>
      <div className='px-2 w-36 text-base'>{weather?.ciudad}</div>
      <div className='flex flex-col justify-center'>
        <div className='flex justify-center px-3 pt-1'>
          <IconoTiempo icono = {weather?.icono}/>
          <span className='text-sm'>{weather?.temperatura}º</span>
        </div>
       {/* 
       <div className='flex px-4'>
          <Image src={humedad} width = {20} height={20} alt='humedad' className='h-4 w-auto'/>
          <span className='ml-4 text-xs'>{weather?.humedad}%</span>
        </div>
        */}
      </div>
    </div>
  )
}
