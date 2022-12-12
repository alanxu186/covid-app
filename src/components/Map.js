import React from 'react';
import '../stylesheets/Map.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { showDataOnMap } from './Util';

const Map = ({ countries, casesType, center, zoom }) => {

    return (
        <div className='map'>
            <MapContainer center={center} zoom={zoom}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'>
                    {showDataOnMap(countries, casesType)}
                </TileLayer>
            </MapContainer>

        </div>
    )
}

export default Map