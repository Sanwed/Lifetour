const initMap = () => {
  const map = L
    .map('map', {
      scrollWheelZoom: false,
    })
    .setView([55.81656, 37.63772], 16);

  const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  map.addLayer(layer);

  const markerIcon = L.icon({
    iconUrl: 'img/svg/pin-filled.svg',
    iconSize: [48, 48],
  });
  const marker = new L.Marker([55.81656, 37.63772], {icon: markerIcon});
  marker.addTo(map);
};

export {initMap};
