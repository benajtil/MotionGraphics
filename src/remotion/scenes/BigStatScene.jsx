import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { SceneContainer } from "../components/SceneContainer";
import { MetricCounter } from "../components/MetricCounter";
import { COLORS } from "../styles/theme";

export const BigStatScene = () => {
    const frame = useCurrentFrame();

    const backgroundOpacity = interpolate(frame, [0, 20], [0.2, 0.55], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const kickerOpacity = interpolate(frame, [14, 34], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <SceneContainer>
            <AbsoluteFill
                style={{
                    background: `rgba(0,0,0,${backgroundOpacity})`,
                }}
            />

            <MetricCounter
                from={0.2}
                to={2.25}
                suffix="B"
                decimals={2}
                duration={52}
                label="Cups every day"
            />

            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 160,
                    textAlign: "center",
                    color: COLORS.muted,
                    fontSize: 34,
                    opacity: kickerOpacity,
                }}
            >
                A worldwide habit sustained by farms, shipping, roasting, and retail.
            </div>
        </SceneContainer>
    );
};