import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONTS } from "../styles/theme";

export const BarChart = ({
    title,
    items,
    delay = 0,
    style = {},
    barColor = COLORS.primary,
    unit = "%",
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    return (
        <div
            style={{
                width: 620,
                padding: 36,
                border: `1px solid ${COLORS.panelBorder}`,
                background: COLORS.panel,
                backdropFilter: "blur(10px)",
                borderRadius: 28,
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                ...style,
            }}
        >
            <div
                style={{
                    fontFamily: FONTS.body,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: COLORS.primary,
                    fontWeight: 800,
                    fontSize: 22,
                    marginBottom: 30,
                }}
            >
                {title}
            </div>

            {items.map((item, index) => {
                const localDelay = delay + index * 8;
                const width = interpolate(
                    frame - localDelay,
                    [0, 28],
                    [0, item.value * 11],
                    {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                    }
                );

                const opacity = interpolate(frame - localDelay, [0, 18], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                });

                return (
                    <div key={item.name} style={{ marginBottom: 24, opacity }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: 10,
                                fontSize: 28,
                                color: COLORS.text,
                            }}
                        >
                            <span>{item.name}</span>
                            <span style={{ color: COLORS.muted }}>
                                {item.value}
                                {unit}
                            </span>
                        </div>

                        <div
                            style={{
                                position: "relative",
                                height: 18,
                                borderRadius: 999,
                                background: "rgba(255,255,255,0.08)",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    width,
                                    height: "100%",
                                    background: item.color || barColor,
                                    borderRadius: 999,
                                    boxShadow: `0 0 24px ${item.color || barColor}55`,
                                }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};