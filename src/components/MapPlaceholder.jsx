import React from 'react'

export default function MapPlaceholder({height='300px'}){
  return (
    <div style={{height, borderRadius:8, background:'#e6eef8', display:'flex', alignItems:'center', justifyContent:'center', color:'#28527a'}}>
      Map placeholder — integrate Mapbox or Google Maps and set VITE_MAPBOX_KEY in .env
    </div>
  )
}
