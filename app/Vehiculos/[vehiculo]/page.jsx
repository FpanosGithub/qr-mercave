import { urls_mercave } from '@/lib/mercave';
import FichaVehiculo from '@/components/FichaVehiculo';
import Weather from '@/components/Weather';
import { WifiIcon, PauseIcon, PlayIcon, WrenchIcon, SignalIcon, XMarkIcon} from '@heroicons/react/24/solid';
import Image from "next/image";
import MapaPosicion from '@/components/MapaPosicion';

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
    <>
    <FichaVehiculo 
      vehiculo = {vehiculo}/>
    <MapaPosicion 
      lat={vehiculo.lat}
      lng={vehiculo.lng} />
  </>
  )
}