import { useLeaflet } from "@/components/leaflet/context/map";
import { type TileLayer, tileLayer, type TileLayerOptions } from "leaflet";
import { useEffect, useRef } from "react";

export interface CTileLayerProps extends TileLayerOptions {
  urlTemplate: string;
}

export const CTileLayer = ({ urlTemplate, ...options }: CTileLayerProps) => {
  const { map } = useLeaflet();
  const layerRef = useRef<TileLayer | null>(null);

  useEffect(() => {
    if (!map) return;

    const tl = tileLayer(urlTemplate, options).addTo(map);
    layerRef.current = tl;

    return () => {
      tl.remove();
      layerRef.current = null;
    };
  }, [map]);

  return null;
};
