import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";

const ZoneInfoPanel = ({ zone, onClose }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (zone && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [zone]);

  useEffect(() => {
    if (!zone) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zone, onClose]);

  if (!zone) {
    return null;
  }

  return (
    <aside className="zone-panel is-open" aria-live="polite">
      <div className="zone-panel-header">
        <div>
          <p className="zone-panel-eyebrow">Cocoa basin</p>
          <h3>{zone.name}</h3>
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          className="icon-button"
          aria-label="Close basin panel"
          onClick={onClose}
        >
          <X size={18} />
        </button>
      </div>

      <p className="zone-description">{zone.shortDescription}</p>

      <div className="zone-detail">
        <h4>Key localities</h4>
        <ul>
          {zone.localities.map((locality) => (
            <li key={locality}>{locality}</li>
          ))}
        </ul>
      </div>

      <div className="zone-detail-list">
        <p>
          <strong>Traceability:</strong> {zone.traceability}
        </p>
        <p>
          <strong>Lots:</strong> {zone.lots}
        </p>
        <p>
          <strong>Incoterms:</strong> {zone.incoterms}
        </p>
      </div>

      <div className="zone-panel-actions">
        <a className="button primary" href="/contact">
          Request a quote
        </a>
        <a className="button secondary" href="/contact?reason=traceability">
          Request traceability file sample
        </a>
      </div>
    </aside>
  );
};

ZoneInfoPanel.propTypes = {
  zone: PropTypes.shape({
    name: PropTypes.string,
    shortDescription: PropTypes.string,
    localities: PropTypes.arrayOf(PropTypes.string),
    traceability: PropTypes.string,
    lots: PropTypes.string,
    incoterms: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

ZoneInfoPanel.defaultProps = {
  zone: null,
};

export default ZoneInfoPanel;
