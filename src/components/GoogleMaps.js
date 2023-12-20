import React from 'react';
import { GoogleMap, LoadScript } from 'react-google-maps';

const GoogleMaps = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAueYTqZILyh2C4sYvcfTUdq0tsV9YkSEI"
      libraries={['places']}
    >
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '100%' }}
        center={{ lat: 43.2566700, lng: 76.9286100 }}
        zoom={8}
      />
    </LoadScript>
  );
} 

export default GoogleMaps;
