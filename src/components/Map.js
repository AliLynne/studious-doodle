import { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import { useCurrentLocation } from '../lib/userLocation';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

export function Map() {
  const { location, error } = useCurrentLocation();
  const [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: '30vh', width: '100%' }}>
      {error && <p>Location Error: {error}</p>}
      {location && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={location}
          defaultZoom={zoom}
        />
      )}
    </div>
  );
}
