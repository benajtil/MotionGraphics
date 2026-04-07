import React from "react";
import { AbsoluteFill, Img, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../styles/theme";
import { FEATURED_LABELS } from "../data/coffeeData.js";
import { getMapRect, projectSvgPoint } from "../utils/mapProjection";
import { staticFile } from "remotion";


const getMarkerSize = (size = "md") => {
    if (size === "xl") {
        return { outer: 44, mid: 24, core: 10, ring: 58 };
    }

    if (size === "lg") {
        return { outer: 34, mid: 20, core: 8, ring: 46 };
    }

    if (size === "sm") {
        return { outer: 18, mid: 10, core: 4.5, ring: 26 };
    }

    return { outer: 26, mid: 14, core: 6, ring: 36 };
};

const regionGlows = [
    { svgX: 332, svgY: 504, color: "rgba(230,177,126,0.11)", radius: 105 },
    { svgX: 804, svgY: 382, color: "rgba(255,107,53,0.11)", radius: 110 },
    { svgX: 580, svgY: 437, color: "rgba(245,158,11,0.09)", radius: 82 },
    { svgX: 180, svgY: 328, color: "rgba(56,189,248,0.09)", radius: 92 },
    { svgX: 871, svgY: 350, color: "rgba(167,139,250,0.09)", radius: 82 },
];

export const WorldMap = ({
    highlights = [],
    showLabels = false,
    scale = 1,
    translateX = 0,
    translateY = 0,
    mapOpacity = 0.52,
}) => {
    const frame = useCurrentFrame();

    const rect = getMapRect({
        frameWidth: 1920,
        frameHeight: 1080,
        scale: 1.12 * scale,
        offsetX: translateX,
        offsetY: 8 + translateY,
    });

    return (
        <AbsoluteFill>
            <AbsoluteFill
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: mapOpacity,
                    pointerEvents: "none",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: rect.left,
                        top: rect.top,
                        width: rect.width,
                        height: rect.height,
                    }}
                >
                    <Img
                        src={staticFile("world-map.svg")}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            filter: "invert(1) brightness(1.26) contrast(0.9) sepia(0.08)",
                            opacity: 0.42,
                        }}
                    />
                </div>
            </AbsoluteFill>

            <AbsoluteFill
                style={{
                    background: "rgba(180, 200, 255, 0.06)",
                    mixBlendMode: "overlay",
                    pointerEvents: "none",
                }}
            />

            <AbsoluteFill
                style={{
                    background:
                        "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.05), transparent 55%)",
                    mixBlendMode: "screen",
                    pointerEvents: "none",
                }}
            />

            <svg
                width="1920"
                height="1080"
                viewBox="0 0 1920 1080"
                style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "visible",
                }}
            >
                {regionGlows.map((g, i) => {
                    const p = projectSvgPoint(g, rect);

                    return (
                        <circle key={i} cx={p.x} cy={p.y} r={g.radius} fill={g.color} />
                    );
                })}

                {highlights.map((h, index) => {
                    const glow = interpolate(frame - index * 4, [0, 20], [0.35, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                    });

                    const sizes = getMarkerSize(h.size);
                    const p = projectSvgPoint(h, rect);
                    const labelDx = h.labelDx ?? 22;
                    const labelDy = h.labelDy ?? -24;
                    const labelWidth = Math.max(130, h.name.length * 15);

                    return (
                        <g key={h.key || h.name}>
                            <circle cx={p.x} cy={p.y} r={sizes.outer} fill={h.color} opacity={0.08 * glow} />
                            <circle cx={p.x} cy={p.y} r={sizes.mid} fill={h.color} opacity={0.18 * glow} />
                            <circle cx={p.x} cy={p.y} r={sizes.core} fill={h.color} opacity={0.98} />
                            <circle
                                cx={p.x}
                                cy={p.y}
                                r={sizes.ring}
                                fill="none"
                                stroke={h.color}
                                strokeOpacity={0.22}
                                strokeWidth="2"
                            />

                            {showLabels && FEATURED_LABELS.includes(h.key) ? (
                                <g>
                                    <rect
                                        x={p.x + labelDx}
                                        y={p.y + labelDy}
                                        width={labelWidth}
                                        height="42"
                                        rx="21"
                                        fill="rgba(11,15,26,0.86)"
                                        stroke="rgba(255,255,255,0.12)"
                                    />
                                    <text
                                        x={p.x + labelDx + 20}
                                        y={p.y + labelDy + 27}
                                        fill={COLORS.text}
                                        fontSize="24"
                                        fontWeight="700"
                                        fontFamily="Inter, sans-serif"
                                    >
                                        {h.name}
                                    </text>
                                </g>
                            ) : null}
                        </g>
                    );
                })}
            </svg>
        </AbsoluteFill>
    );
};