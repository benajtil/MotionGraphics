import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { getQuadraticPoint } from "../utils/geometry";

export const RouteParticle = ({ from, to, delay = 0, height = 140 }) => {
    const frame = useCurrentFrame();

    const t = interpolate(frame - delay, [0, 55], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const point = getQuadraticPoint(from, to, height, t);

    return (
        <div
            style={{
                position: "absolute",
                left: point.x,
                top: point.y,
                width: 10,
                height: 10,
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                background: "#F5E6D3",
                boxShadow: "0 0 20px rgba(245,230,211,0.75)",
            }}
        />
    );
};