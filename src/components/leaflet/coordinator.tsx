import { useState } from "react";
import { useLeafletMapEvent } from "./hooks/useLeafletEvent";
import { Control } from "./control";

export const Coordinator = () => {
  const [coords, setCoords] = useState([0, 0]);

  useLeafletMapEvent({
    mousemove: (event) => {
      setCoords([event.latlng.lng, event.latlng.lat]);
    },
  }, []);

  return (
    <Control position="topright">
      <div>
        {coords[0].toFixed(2)}, {coords[1].toFixed(2)}
      </div>
    </Control>
  );
};
