import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapContainer = styled.div`
  width: 600px;
  height: 400px;
`;

const Map = ({ locations }) => {
  useEffect(() => {
    const map = L.map('map').setView([-23.5505, -46.6333], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    locations.forEach(location => {
      L.marker([location.lat, location.lng]).addTo(map)
        .bindPopup(location.name)
        .openPopup();
    });

    return () => map.remove();
  }, [locations]);

  return <MapContainer id="map" />;
};

Map.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Map;
