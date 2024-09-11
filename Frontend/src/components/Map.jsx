// Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = [51.505, -0.09]; // Center of the map
const zoom = 13;

const Map = () => {
    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
                <Popup>
                    A sample hazard location.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
