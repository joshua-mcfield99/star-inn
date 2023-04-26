import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 51.186068721919824,
    lng: -0.6157010151452339
};

const position = {
    lat: 51.186068721919824,
    lng: -0.6157010151452339
};

const options = {
    disableDefaultUI: true,
    mapTypeControl: false,
    zoomControl: true
};

const Map = () => {
    const [map, setMap] = useState(null);

    const onLoad = (marker) => {
        console.log('Marker loaded:', marker);
    };

    return (
        <LoadScript
            googleMapsApiKey={'AIzaSyB0VeFQaNcknJyTWY23iDD_iEPyjaiXWGo'}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                options={options}
                center={center}
                zoom={18}
                onLoad={(map) => setMap(map)}
            >
                {map && (
                    <Marker
                        position={position}
                        map={map}
                        onLoad={onLoad}
                    />
                )}
            </GoogleMap>
        </LoadScript>
    );
};
    
export default Map;