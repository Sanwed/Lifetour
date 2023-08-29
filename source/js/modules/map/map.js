const lazyInit = (element, fn) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries.some(({isIntersecting}) => isIntersecting)) {
      observer.disconnect();
      fn();
    }
  });
  observer.observe(element);
};

const mapElement = document.querySelector('#map');
const initMap = () => {
  lazyInit(mapElement, () => {
    const map = L.map(mapElement, {
      scrollWheelZoom: false,
    }).setView([55.81656, 37.63772], 16);

    const layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    const markerIcon = L.icon({
      iconUrl: 'img/svg/pin-filled.svg',
      iconSize: [48, 48],
    });
    const marker = new L.Marker([55.81656, 37.63772], {icon: markerIcon});
    marker.addTo(map);
  });
};

export {initMap};
