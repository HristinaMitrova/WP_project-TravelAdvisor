import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as agencyData from "./data/agencies.json"



export default function Mapping() {
    const [viewport, setViewport] = useState({
        latitude: 41.806366,
        longitude: 21.420244,
        width: "100vw",
        height: "100vh",
        zoom: 10
    });

    const [selectedPark, setSelectedPark] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedPark(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);

    return <div>
        <ReactMapGL {...viewport}
                    mapboxApiAccessToken="pk.eyJ1IjoibWhyaXMiLCJhIjoiY2thMDdhZ3p6MGUwOTNtcG1jOG9pMmJzZSJ9.1pHfzSImjNCaVnPTU7YUhw"
                    mapStyle= "mapbox://styles/mhris/cka07yep142sa1iouxngntotc"
                    onViewportChange={viewport => {
                        setViewport(viewport);
                    }}
        >
            {agencyData.features.map(agency=>(
            <Marker key={agency.properties.PARK_ID}
            latitude={agency.geometry.coordinates[1]}
                    longitude={agency.geometry.coordinates[0]}
            >
                <button className="marker-btn"
                        onClick={e => {
                            e.preventDefault();
                            setSelectedPark(agency);
                        }}
                >
                    <img src="./travel.svg" alt="Travelling Agencies" />
                </button>
            </Marker>
            ))}
            {selectedPark ? (
                <Popup
                    latitude={selectedPark.geometry.coordinates[1]}
                    longitude={selectedPark.geometry.coordinates[0]}
                    onClose={() => {
                        setSelectedPark(null);
                    }}
                >
                    <div>
                        <h2>{selectedPark.properties.NAME}</h2>
                        <p>{selectedPark.properties.ADDRESS}</p>
                        <p>{selectedPark.properties.ACCESSIBLE}</p>
                    </div>
                </Popup>
            ) : null}
        </ReactMapGL>
    </div>
}