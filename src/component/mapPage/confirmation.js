// src/components/MapComponent.js
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './confirmation.css';

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiaGFzbmFhdGFyc2hhZDA1NiIsImEiOiJjbHhzd3NyNjkxZmYxMnFzZWpqdmVpOGxuIn0.YkLawIoQ1s_wt07fJ1_v1w';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40], // Default center
      zoom: 9,
    });

    if (userLocation) {
      map.setCenter(userLocation);
      new mapboxgl.Marker().setLngLat(userLocation).addTo(map);
    }

    return () => map.remove();
  }, [userLocation]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([longitude, latitude]);
        },
        (error) => {
          console.error('Error getting user location:', error);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="confirmContainer">
      <div className="cateringHeading">
        <img src="/foodServices/catering.png" alt="" />
        <h1>Confirmation</h1>
      </div>
      <div className="mapContainer">
        <div id="map"></div>
      </div>
      <form action="">
        <div className="searchLocation">
          <div className="searchLocationInner">
            <div className="deliverTo">
              <label htmlFor="deliverTo">Deliver to</label>
              <input type="text" name="deliverTo" />
            </div>
            <div className="deliverTo">
              <label htmlFor="deliveryDuration">Delivery Duration</label>
              <input type="text" name="deliveryDuration" />
            </div>
            <div className="deliveryButtom">
              <button>Confirm Order</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MapComponent;
