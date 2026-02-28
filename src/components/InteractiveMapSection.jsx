import { useCallback, useState } from "react";
import InteractiveCameroonMap from "./InteractiveCameroonMap";
import ZoneInfoPanel from "./ZoneInfoPanel";
import { productionZones } from "../content/productionZones";
import "../styles/interactive-map.css";

const InteractiveMapSection = () => {
  const [activeZoneId, setActiveZoneId] = useState(null);

  const handleReset = useCallback(() => {
    setActiveZoneId(null);
  }, []);

  const activeZone = productionZones.find((zone) => zone.id === activeZoneId) || null;

  return (
    <section className="interactive-map-section" aria-labelledby="basins-title">
      <div className="section-header">
        <p className="section-eyebrow">B.M.E Origin Footprint</p>
        <h2 id="basins-title">Cameroon Cocoa Basins</h2>
        <p className="section-subtitle">
          Explore simplified cocoa basins and request tailored traceability details for
          your sourcing program.
        </p>
      </div>

      <div className="interactive-map-layout">
        <div className="map-wrapper">
          <InteractiveCameroonMap
            activeZoneId={activeZoneId}
            onSelectZone={setActiveZoneId}
            onReset={handleReset}
          />
          {activeZone && (
            <button
              type="button"
              className="reset-map-button"
              onClick={handleReset}
            >
              Reset view
            </button>
          )}
        </div>

        <ZoneInfoPanel zone={activeZone} onClose={handleReset} />
      </div>
    </section>
  );
};

export default InteractiveMapSection;
