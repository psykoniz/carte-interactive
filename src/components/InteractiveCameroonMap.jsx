import { MapContainer, Polygon, TileLayer, useMap } from "react-leaflet";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { mapConfig, productionZones } from "../content/productionZones";

const MapController = ({ activeZoneId, onReset }) => {
  const map = useMap();

  useEffect(() => {
    if (!activeZoneId) {
      map.flyToBounds(mapConfig.defaultBounds, { duration: 1.4, padding: [20, 20] });
      return;
    }

    const zone = productionZones.find((item) => item.id === activeZoneId);
    if (!zone) {
      return;
    }

    map.flyToBounds(zone.coordinates, { duration: 1.5, padding: [30, 30] });
  }, [activeZoneId, map]);

  return null;
};

MapController.propTypes = {
  activeZoneId: PropTypes.string,
  onReset: PropTypes.func,
};

const InteractiveCameroonMap = ({ activeZoneId, onSelectZone, onReset }) => {
  const [hoveredZoneId, setHoveredZoneId] = useState(null);

  const zonesById = new Map(productionZones.map((zone) => [zone.id, zone]));

  return (
    <div className="interactive-map" aria-label="Cameroon cocoa basins map">
      <MapContainer
        center={mapConfig.defaultCenter}
        zoom={mapConfig.defaultZoom}
        scrollWheelZoom={false}
        className="leaflet-map"
      >
        <TileLayer url={mapConfig.tileUrl} attribution={mapConfig.tileAttribution} />
        <MapController activeZoneId={activeZoneId} onReset={onReset} />
        {productionZones.map((zone) => {
          const isActive = activeZoneId === zone.id;
          const isHovered = hoveredZoneId === zone.id;
          const isDimmed = Boolean(activeZoneId) && !isActive;

          const pathOptions = {
            color: isActive || isHovered ? "#C9A24D" : "#1F4D3A",
            weight: isActive || isHovered ? 2.5 : 1.5,
            fillColor: "#1F4D3A",
            fillOpacity: isActive ? 0.28 : isDimmed ? 0.1 : isHovered ? 0.22 : 0.16,
          };

          return (
            <Polygon
              key={zone.id}
              positions={zone.coordinates}
              pathOptions={pathOptions}
              eventHandlers={{
                click: () => onSelectZone(zone.id),
                mouseover: () => setHoveredZoneId(zone.id),
                mouseout: () => setHoveredZoneId(null),
              }}
              title={`${zone.name} cocoa basin`}
            />
          );
        })}
      </MapContainer>

      <div className="map-legend" aria-hidden="true">
        {productionZones.map((zone) => (
          <div key={zone.id} className="legend-item">
            <span
              className="legend-swatch"
              style={{ background: "#1F4D3A", borderColor: "#C9A24D" }}
            />
            <span>{zonesById.get(zone.id)?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

InteractiveCameroonMap.propTypes = {
  activeZoneId: PropTypes.string,
  onSelectZone: PropTypes.func.isRequired,
  onReset: PropTypes.func,
};

export default InteractiveCameroonMap;
