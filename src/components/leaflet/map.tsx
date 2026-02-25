import { LeafletContext } from "@/components/leaflet/context/map";
import { useLeafletMap } from "@/components/leaflet/hooks/useLeaflet";
import type { ReactNode } from "react";

export const Map = ({ children, initialOptions }: {
  children?: ReactNode;
  initialOptions: L.MapOptions;
}) => {
  const { mapRef, map } = useLeafletMap({ options: initialOptions });

  return (
    <div className="c-map w-full h-screen" ref={mapRef}>
      {map &&
        (
          <LeafletContext.Provider value={{ map }}>
            {children}
          </LeafletContext.Provider>
        )}
    </div>
  );
};
