import React, { useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import "ol/ol.css";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";
import Overlay from "ol/Overlay";
import { Style, Fill, Stroke, Circle } from "ol/style";
import './app.css';
useGeographic();

const polygonStyle = new Style({
    fill: new Fill({
        color: 'rgba(173, 216, 230, 0.4)',
    }),
    stroke: new Stroke({
        color: '#87CEFA',
        width: 2,
    }),
});

const pointStyle = new Style({
    image: new Circle({
        radius: 7,
        fill: new Fill({
            color: 'rgba(173, 216, 230, 0.6)',
        }),
        stroke: new Stroke({
            color: '#4682B4',
            width: 2,
        }),
    }),
});

const hoverStyle = new Style({
    fill: new Fill({
        color: 'rgb(100,174,241)',
    }),
    stroke: new Stroke({
        color: 'rgb(100,174,241)',
        width: 3,
    }),
    image: new Circle({
        radius: 9,
        fill: new Fill({
            color: 'rgb(100,174,241)',
        }),
        stroke: new Stroke({
            color: 'rgba(106,162,178,0.8)',
            width: 3,
        }),
    }),
});

const osmLayer = new TileLayer({
    source: new OSM(),
});

const defenceLayer = new VectorLayer({
    source: new VectorSource({
        url: "public/geojson/Sivilforsvarsdistrikter.geojson",
        format: new GeoJSON(),
    }),
    style: polygonStyle,
});

const shelterLayer = new VectorLayer({
    source: new VectorSource({
        url: "public/geojson/Offentligetilfluktsrom.geojson",
        format: new GeoJSON(),
    }),
    style: pointStyle,
});

const map = new Map({
    view: new View({ center: [10.8, 59.9], zoom: 9 }),
    layers: [osmLayer, defenceLayer, shelterLayer],
});

export function Application() {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const [shelterInfo, setShelterInfo] = useState<string>("");
    const [defenceLayerVisible, setDefenceLayerVisible] = useState(true);
    const [shelterLayerVisible, setShelterLayerVisible] = useState(true);

    useEffect(() => {
        map.setTarget(mapRef.current!);

        if (overlayRef.current) {
            const overlay = new Overlay({
                element: overlayRef.current as HTMLElement,
                positioning: "bottom-left",
                offset: [10, -10],
            });

            map.addOverlay(overlay);

            map.on("click", (e) => {
                const feature = map.forEachFeatureAtPixel(e.pixel, (feat) => feat);
                if (feature) {
                    const romnr = feature.get("romnr") || "Unknown Room Number";
                    const plasser = feature.get("plasser") || "Unknown Capacity";
                    const adresse = feature.get("adresse") || "Unknown Address";

                    setShelterInfo(`
                        Room Number: ${romnr}<br/>
                        Capacity: ${plasser}<br/>
                        Address: ${adresse}
                    `);

                    overlay.setPosition(e.coordinate);
                }
            });

            const highlightLayer = new VectorLayer({
                source: new VectorSource(),
                style: hoverStyle,
            });
            map.addLayer(highlightLayer);

            map.on("pointermove", (e) => {
                const featureAtPixel = map.forEachFeatureAtPixel(e.pixel, (feat) => feat);

                if (featureAtPixel) {
                    highlightLayer.getSource()?.clear();
                    highlightLayer.getSource()?.addFeature(featureAtPixel);
                } else {
                    highlightLayer.getSource()?.clear();
                }
            });
        }

        return () => {
            map.setTarget(undefined);
        };
    }, []);

    const handleLayerVisibilityChange = (layer: "defence" | "shelter") => {
        if (layer === "defence") {
            setDefenceLayerVisible(!defenceLayerVisible);
            defenceLayer.setVisible(!defenceLayerVisible);
        } else if (layer === "shelter") {
            setShelterLayerVisible(!shelterLayerVisible);
            shelterLayer.setVisible(!shelterLayerVisible);
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    map.getView().setCenter([longitude, latitude]);
                    map.getView().setZoom(14);
                },
                (error) => {
                    console.error("Error getting location", error);
                    alert("Unable to retrieve your location.");
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };

    return (
        <div style={{ display: "flex", height: "100vh", width: "100%", position: "relative" }}>
            {}
            <div
                ref={mapRef}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            />

            {}
            <div
                style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    zIndex: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    padding: "10px",
                    borderRadius: "5px",
                }}
            >
                <label style={{ display: "block", marginBottom: "10px" }}>
                    <input
                        type="checkbox"
                        checked={defenceLayerVisible}
                        onChange={() => handleLayerVisibilityChange("defence")}
                        style={{
                            transform: "scale(0.8)",
                            marginRight: "10px",
                        }}
                    />
                    Show Civil Defence Regions
                </label>
                <label style={{ display: "block", marginBottom: "10px" }}>
                    <input
                        type="checkbox"
                        checked={shelterLayerVisible}
                        onChange={() => handleLayerVisibilityChange("shelter")}
                        style={{
                            transform: "scale(0.8)",
                            marginRight: "10px",
                        }}
                    />
                    Show Emergency Shelters
                </label>
                <br />
                <button
                    onClick={handleLocationClick}
                    style={{
                        backgroundColor: "#ADD8E6",
                        border: "2px solid #4682B4",
                        color: "#4682B4",
                        padding: "10px 15px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    My Location
                </button>
            </div>

            {}
            <div
                ref={overlayRef}
                id="shelter-info"
                dangerouslySetInnerHTML={{ __html: shelterInfo }}
                style={{
                    width: "400px",
                    height: "100px",
                    padding: "10px",
                    borderLeft: "2px solid #ccc",
                    boxSizing: "border-box",
                    overflowY: "hidden",
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    zIndex: 10,
                }}
            />
        </div>
    );
}
