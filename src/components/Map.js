import React from 'react';
import '../stylesheets/Map.css';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { showDataOnMap } from './Util';

const Map = ({ countries, casesType, center, zoom }) => {

    console.log(countries)

    return (
        <div>map of countries</div>
    )
}

export default Map