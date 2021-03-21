import React from 'react'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '550px',
  borderRadius:'15px'
};

const center = {
  lat: 23.777962,
  lng: 90.398279
};
const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
         <Marker
      onLoad={onLoad}
      position={center}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);