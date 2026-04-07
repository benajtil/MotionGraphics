import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONTS } from "../styles/theme";

export const MetricCounter = ({
    from = 0,
    to = 2.25,
    suffix = "",
    prefix = "",
    delay = 0,
    duration = 55,
    decimals = 2,
    label,
}) => {
    const frame = useCurrentFrame();

    const value = interpolate(frame - delay, [0, duration], [from, to], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    fontFamily: FONTS.display,
                    fontWeight: 900,
                    fontSize: 150,
                    letterSpacing: "0.02em",
                    color: COLORS.text,
                    lineHeight: 0.9,
                    textShadow: "0 18px 50px rgba(0,0,0,0.45)",
                }}
            >
                {prefix}
                {value.toFixed(decimals)}
                {suffix}
            </div>
            {label ? (
                <div
                    style={{
                        marginTop: 22,
                        fontSize: 42,
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: COLORS.primary,
                        fontWeight: 700,
                    }}
                >
                    {label}
                </div>
            ) : null}
        </div>
    );
};