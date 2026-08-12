import { circle, type LatLngExpression } from 'leaflet';
import './App.css'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent, useMap } from 'react-leaflet'

function DblClickEvent() {
  const map = useMap();
  useMapEvent('dblclick', (event) => {
    const coords = event.latlng;
    circle(coords, { radius: 20, color: 'red', weight: 1 }).addTo(map);
  })
  return null
}


function App() {
  const mapCenter: LatLngExpression = [49.262861, -123.251882]; // Earth sciences
  const marineDriveCoords: LatLngExpression = [49.261442, -123.255066];
  const totemParkCoords: LatLngExpression = [49.259609, -123.252386];
  const csBuilding: LatLngExpression = [49.26140020453208, -123.248899116439];
  const wreckBeach: LatLngExpression = [49.262224, -123.261646];
  const moa: LatLngExpression = [49.269445, -123.259509];

  return (
    <>
      <h2>Map of UBC Places</h2>
      <MapContainer id='leaflet-map' center={mapCenter} zoom={15}>
        {/* OpenStreetMap overlay */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Events */}
        <DblClickEvent></DblClickEvent>

        {/* Markers */}
        <Marker position={marineDriveCoords}>
          <Popup>
            Marine Drive residence, building 4. <br /> A beautiful place.
          </Popup>
        </Marker>
        <Marker position={totemParkCoords}>
          <Popup>
            Totem Park residence, Kwakiutl House. <br /> Lots of good memories.
          </Popup>
        </Marker>
        <Marker position={csBuilding}>
          <Popup>
            ICICS/CS Building. <br /> Yes, the name is that long.
          </Popup>
        </Marker>
        <Marker position={wreckBeach}>
          <Popup>
            Wreck Beach. <br /> Beware, this beach is nude-allowed.
          </Popup>
        </Marker>
        <Marker position={moa}>
          <Popup>
            Museum of Anthropoligy. <br /> A must-visit.
          </Popup>
        </Marker>
      </MapContainer>

    </>
  )
}

export default App
