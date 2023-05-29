import { urls_mercave } from '@/lib/mercave';
import Weather from '@/components/Weather';
import { WifiIcon, PauseIcon, PlayIcon, WrenchIcon, SignalIcon, XMarkIcon} from '@heroicons/react/24/solid';
import Image from "next/image";

export const revalidate = 600

async function getVehiculo(id) {
  const res = await fetch(`${urls_mercave.servidor_backend}${urls_mercave.vehiculos}/${id}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch data for vehicle: ${id}`);
  }
  return res.json();
}

export default async function Page({params}) {
  const vehiculo = await getVehiculo(params.vehiculo);
  
  return (
    <div className='my-4 pb-4 rounded-lg shadow h-[24rem] w-80 mx-auto'>
      <div className=''>
        <Image src = {`/imagenes/vehiculos/${vehiculo.tipo.imagen}`} alt = '' height = {100} width = {180} className='rounded-t-lg object-fill w-80'/>
        <div className='flex flex-col justify-between mb-2'>
          <div className="text-center p-1 text-gray-800 truncate">{vehiculo.num_uic}</div>
          <div className="text-center text-base text-gray-500 truncate">{vehiculo.keeper}</div>
          <div className="text-center text-base text-gray-500">{vehiculo.tipo.descripcion}</div>
        </div>
        </div>
          <div className="flex justify-between my-2 mx-4 px-2 py-1 rounded-full bg-gray-100">
            {vehiculo.transmitiendo ? 
              (<WifiIcon className="w-6 h-6 mr-1 text-green-400"/>)
            : (<WifiIcon className="w-6 h-6 mr-1 text-red-400"/>)}
            {!vehiculo.en_servicio ? 
              (<XMarkIcon className="w-6 h-6 mr-1 text-slate-200"/>)
            : (vehiculo.en_mantenimiento ? 
              (<WrenchIcon className="w-6 h-6 mr-1 text-green-600"/>)
              : (vehiculo.en_circulacion ? 
                  (<PlayIcon className = "w-6 h-6 mr-1 text-green-400"/>)
                  : (<PauseIcon className="w-6 h-6 mr-1 text-red-400"/>)
                ))}
            {(vehiculo.alarma)? 
              (<SignalIcon className = "w-6 h-6 mr-1 text-red-400"/>)
            : (<SignalIcon className = "w-6 h-6 mr-1 text-slate-400"/>)}
          </div>
          <Weather 
            lat={vehiculo.lat}
            long={vehiculo.lng} />
    </div>
  )
}