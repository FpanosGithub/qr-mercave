'use client'
import { Map, Marker, ZoomControl} from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers'
import Weather from '@/components/Weather';

export default function MapaPosicion ({lat, lng}) {
  const maptilerProvider = maptiler('t3404nTGTEs1Q4VOSvmj', 'basic')
  return(
    <div className="mx-auto mt-3 mb-4 border border-gray-200 rounded-lg shadow p-2 h-[30rem] w-72">
      <div className="h-24">
        <Weather 
          lat={lat}
          long={lng} />
      </div>
      <div className="h-80">
        <Map 
          provider={maptilerProvider}
          dprs={[1, 2]} 
          defaultHeight={300} 
          defaultCenter={[lat,lng]}
          defaultZoom={6} 
          attribution = {false}
          metaWheelZoom = {true}>
          <ZoomControl /> 
          <Marker 
            width={40} 
            color = {'#087314'} 
            anchor={[lat,lng]}/>
        </Map>
      </div>
      
    </div>
  )
}