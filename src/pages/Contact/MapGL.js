import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = process.env.REACT_APP_MAP_ACCESS_TOKEN;

const MapGL = () => {
    const mapContainer = useRef(null);
    const lng = -79.918836;
    const lat = 43.257921;
    const zoom = 7;

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
        });

        new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

        return () => map.remove();
    }, []);

    return (
        <div>
            <div ref={mapContainer} className='map-container' />
        </div>
    );
};

export default MapGL;
