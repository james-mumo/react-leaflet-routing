import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import "./App.css";
import LeafletGeocoder from "./LeafletGeocoder";
import LeafletRoutingMachine from "./LeafletRoutingMachine";

function App() {
  const kiccCoordinates = [-1.286389, 36.816944]; // KICC coordinates
  return (
    <div className="flex justify-center items-center h-screen p-0">
      <div className="min-w-[390px] w-[400px] flex flex-col p-0 bg-gray-900 relative">
        <div className="App">
          <MapContainer
            center={kiccCoordinates}
            zoom={15}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <LeafletGeocoder /> */}
            <LeafletRoutingMachine />
            <Marker position={kiccCoordinates}>
              <Popup>Kenyatta International Convention Centre (KICC)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default App;
