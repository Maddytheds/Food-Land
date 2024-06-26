import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import './confirmation.css';
import { useNavigate } from 'react-router-dom';

const MapComponent = () => {
  const history = useNavigate();
  const [userLocation, setUserLocation] = useState(null);
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [estimatedTime, setEstimatedTime] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiaGFzbmFhdGFyc2hhZDA1NiIsImEiOiJjbHhzd3NyNjkxZmYxMnFzZWpqdmVpOGxuIn0.YkLawIoQ1s_wt07fJ1_v1w';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9,
    });

    if (userLocation) {
      map.setCenter(userLocation);
      new mapboxgl.Marker().setLngLat(userLocation).addTo(map);
    }

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });

    directions.on('route', (event) => {
      if (event.route && event.route[0] && event.route[0].duration) {
        const durationInSeconds = event.route[0].duration;
        const hours = Math.floor(durationInSeconds / 3600);
        const minutes = Math.floor((durationInSeconds % 3600) / 60);
        setEstimatedTime({ hours, minutes });
      }
    });

    map.addControl(directions, 'top-left');

    if (startLocation && endLocation) {
      directions.setOrigin(startLocation);
      directions.setDestination(endLocation);
    }

    return () => map.remove();
  }, [userLocation, startLocation, endLocation]);

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

  const handleStartLocationChange = (event) => {
    setStartLocation(event.target.value);
  };

  const handleEndLocationChange = (event) => {
    setEndLocation(event.target.value);
  };
  const handleConfirm = () => {
    alert('Location Confirm');
    history('/home');
  };
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
              <label htmlFor="startLocation">Your Location</label>
              <input
                type="text"
                name="startLocation"
                value={startLocation}
                onChange={handleStartLocationChange}
              />
            </div>
            <div className="deliverTo">
              <label htmlFor="endLocation">End Location</label>
              <input
                type="text"
                name="endLocation"
                value={endLocation}
                onChange={handleEndLocationChange}
              />
            </div>
            {estimatedTime && (
              <div className="estimatedTimeDisplay">
                Estimated Time: {estimatedTime.hours}h {estimatedTime.minutes}m
              </div>
            )}
            <div className="deliveryButton">
              <button type="button" onClick={handleConfirm}>
                Confirm Location
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MapComponent;
