import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS, FONTS } from "../styles/theme";

export const SceneContainer = ({ children }) => {
    return (
        <AbsoluteFill
            style={{
                background: `
          radial-gradient(circle at 20% 20%, rgba(255,107,53,0.12), transparent 30%),
          radial-gradient(circle at 85% 18%, rgba(230,177,126,0.12), transparent 30%),
          linear-gradient(180deg, #0b0f1a 0%, #0f172a 55%, #0b0f1a 100%)
        `,
                color: COLORS.text,
                fontFamily: FONTS.body,
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.45) 100%)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.045,
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />
            {children}
        </AbsoluteFill>
    );
};