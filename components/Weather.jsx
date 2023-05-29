'use client'
import {useEffect, useState} from 'react'
import Image from 'next/image'
import IconoTiempo from './IconoTiempo'
import humedad from  '@/public/imagenes/clima/humedad.png'
import viento from  '@/public/imagenes/clima/viento.png'

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
  <div className='mx-2 my-2 flex justify-between'>
    <div className='text-base'>{weather?.ciudad}</div>
    <div className=''>
      <div className='flex gap-2 justify-between my-1'>
        <IconoTiempo icono = {weather?.icono}/>
        <span className='text-sm'>{weather?.temperatura}º</span>
      </div> 
      <div className='flex gap-2 justify-between my-1 pl-3'>
        <Image src={humedad} width = {20} height={20} alt='humedad' className='h-4 w-auto'/>
        <span className='text-xs'>{weather?.humedad}%</span>
      </div>
      <div className='flex gap-2 justify-between my-1 pl-3'>
        <Image src={viento} width = {20} height={20} alt='viento' className='h-4 w-auto'/>
        <span className='text-xs'>{weather?.viento} m/s</span>
      </div>
    </div>
  </div>
  )
}
