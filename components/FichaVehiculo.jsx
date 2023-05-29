import Weather from '@/components/Weather';
import { WifiIcon, PauseIcon, PlayIcon, WrenchIcon, SignalIcon, XMarkIcon} from '@heroicons/react/24/solid';
import Image from "next/image";

export default function FichaVehiculo ({vehiculo}) {
  return(
  <div className='my-2 pb-4 border border-gray-200 rounded-lg shadow h-[21rem] w-72 mx-auto'>
    <div className=''>
      <Image src = {`/imagenes/vehiculos/${vehiculo.tipo.imagen}`} alt = '' height = {100} width = {180} className='rounded-t-lg object-fill w-72'/>
      <div className='flex flex-col justify-between mb-2'>
        <div className="text-center mt-2 p-1 text-2xl text-gray-800 truncate">{vehiculo.num_uic}</div>
        <div className="text-center text-2xl text-gray-500 truncate">{vehiculo.keeper}</div>
        <div className="text-center mb-2 text-2xl text-gray-500">{vehiculo.tipo.descripcion}</div>
      </div>
    </div>
    <div className="flex justify-between my-2 mx-12 px-2 py-1 rounded-full bg-gray-100">
      {vehiculo.transmitiendo ? 
          (<WifiIcon className="w-6 h-6 mr-1 text-green-400"/>)
        : (<WifiIcon className="w-6 h-6 mr-1 text-red-400"/>)}
      {!vehiculo.en_servicio ? 
          (<XMarkIcon className="w-6 h-6 mr-1 text-slate-200"/>)
        : (vehiculo.en_mantenimiento ? 
            (<WrenchIcon className="w-6 h-6 mr-1 text-green-600"/>)
          : (vehiculo.en_circulacion ? 
              (<PlayIcon className = "w-6 h-6 mr-1 text-green-400"/>)
            : (<PauseIcon className="w-6 h-6 mr-1 text-red-400"/>)))}
      {(vehiculo.alarma)? 
        (<SignalIcon className = "w-6 h-6 mr-1 text-red-400"/>)
      : (<SignalIcon className = "w-6 h-6 mr-1 text-slate-400"/>)}
      </div>
  </div>
  )
}