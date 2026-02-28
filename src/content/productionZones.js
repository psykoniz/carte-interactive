export const mapConfig = {
  tileUrl: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  tileAttribution:
    "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>",
  defaultCenter: [4.8, 12.4],
  defaultZoom: 6,
  defaultBounds: [
    [2.0, 8.0],
    [7.5, 16.5],
  ],
};

export const productionZones = [
  {
    id: "centre",
    name: "Centre Basin",
    shortDescription:
      "Historic cocoa production basin spanning mid-altitude zones with established drying and collection practices.",
    localities: ["Yaoundé", "Mbalmayo", "Obala", "Bafia"],
    traceability: "Coop → Basin → Village (GPS optional on request)",
    lots: "250–1,000 t",
    incoterms: "FOB Douala (CIF Europe available upon discussion)",
    coordinates: [
      [5.3, 11.2],
      [5.6, 12.3],
      [5.2, 13.2],
      [4.4, 13.1],
      [4.0, 12.0],
      [4.6, 11.0],
    ],
  },
  {
    id: "south",
    name: "South Basin",
    shortDescription:
      "Humid forest cocoa belt known for strong agroforestry traditions and cooperative aggregation.",
    localities: ["Ebolowa", "Kribi", "Sangmélima", "Campo"],
    traceability: "Coop → Basin → Village (GPS optional on request)",
    lots: "250–1,000 t",
    incoterms: "FOB Douala (CIF Europe available upon discussion)",
    coordinates: [
      [3.6, 10.2],
      [4.2, 10.9],
      [3.9, 12.0],
      [2.7, 12.0],
      [2.1, 11.0],
      [2.4, 10.1],
    ],
  },
  {
    id: "east",
    name: "East Basin",
    shortDescription:
      "Major forest production basin with hubs around Bertoua, Batouri, Abong-Mbang, and Yokadouma, supporting aggregation and traceability programs.",
    localities: ["Bertoua", "Batouri", "Abong-Mbang", "Yokadouma"],
    traceability: "Coop → Basin → Village (GPS optional on request)",
    lots: "250–1,000 t",
    incoterms: "FOB Douala (CIF Europe available upon discussion)",
    coordinates: [
      [5.8, 13.0],
      [6.4, 14.6],
      [5.6, 15.8],
      [4.4, 15.6],
      [3.8, 14.2],
      [4.7, 13.0],
    ],
  },
];
