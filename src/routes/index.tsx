import { Map } from "@/components/leaflet/map";
import { CTileLayer } from "@/components/leaflet/tile-layer";
import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import {
  CRS as lCrs,
  extend as lExtend,
  transformation as lTransformation,
} from "leaflet";
import { Marker } from "@/components/leaflet/marker";
import { Coordinator } from "@/components/leaflet/coordinator";
import { Control } from "@/components/leaflet/control";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const zoom = 3;
  const mapOptions = useRef<L.MapOptions>({
    center: [0, 0],
    zoom: 0,
    minZoom: 0,
    crs: lExtend({}, lCrs.Simple, {
      transformation: lTransformation((-1) / 2 ** zoom, 0, 1 / 2 ** zoom, 0),
    }),
    zoomControl: false,
    attributionControl: false,
  });

  return (
    <Map initialOptions={mapOptions.current}>
      <CTileLayer
        urlTemplate="/tiles/{x}.{y}.gif"
        tileSize={512}
        bounds={[
          [-Infinity, -Infinity],
          [Infinity, Infinity],
        ]}
        minNativeZoom={zoom}
        maxNativeZoom={zoom}
        noWrap={true}
        className="pixel-map"
      />
      <Marker position={[0.5, 0.5]}></Marker>
      <Marker position={[0.5, 1.5]}></Marker>
      <Marker position={[0.5, 2.5]}></Marker>
      <Coordinator />
      <Control position="bottomleft">
        Test
      </Control>
    </Map>
  );
}
