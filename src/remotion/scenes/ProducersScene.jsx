import React from "react";
import { BackgroundGlow } from "../components/BackgroundGlow";
import { WorldMap } from "../components/WorldMap";
import { MapMarker } from "../components/MapMarker";
import { producerCountries } from "../data/coffeeData";

export const ProducersScene = () => {
    return (
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
            <BackgroundGlow />
            <WorldMap opacity={0.95} scale={1.03} />

            <MapMarker
                x={producerCountries[0].x}
                y={producerCountries[0].y}
                title={producerCountries[0].name}
                subtitle={producerCountries[0].shortLabel}
                delay={0}
            />
            <MapMarker
                x={producerCountries[1].x}
                y={producerCountries[1].y}
                title={producerCountries[1].name}
                subtitle={producerCountries[1].shortLabel}
                delay={10}
            />
            <MapMarker
                x={producerCountries[2].x}
                y={producerCountries[2].y}
                title={producerCountries[2].name}
                subtitle={producerCountries[2].shortLabel}
                delay={20}
            />
        </div>
    );
};