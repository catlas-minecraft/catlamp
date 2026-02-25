import { useLeaflet } from "@/components/leaflet/context/map";
import {
  type LatLngExpression,
  type Marker as LMarker,
  marker,
  type MarkerOptions,
} from "leaflet";
import { useEffect, useRef } from "react";

export interface CMarkerProps extends MarkerOptions {
  position: LatLngExpression;
}

export const Marker = ({ position, ...options }: CMarkerProps) => {
  const { map } = useLeaflet();
  const markerRef = useRef<LMarker | null>(null);

  useEffect(() => {
    if (!map) return;

    const m = marker(position, options).addTo(map);
    markerRef.current = m;

    return () => {
      m.remove();
      markerRef.current = null;
    };
  }, [map]);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLatLng(position);
    }
  }, [position]);

  return null;
};
