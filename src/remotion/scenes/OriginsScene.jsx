import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { SceneContainer } from "../components/SceneContainer";
import { WorldMap } from "../components/WorldMap";
import { TitleBlock } from "../components/TitleBlock";
import { PRODUCERS } from "../data/coffeeData.js";
import { fadeUp } from "../utils/animation";
import { COLORS } from "../styles/theme";

export const OriginsScene = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    return (
        <SceneContainer>
            <WorldMap
                highlights={PRODUCERS}
                showLabels
                scale={1.03}
                translateX={0}
                translateY={-8}
                mapOpacity={0.54}
            />

            <div
                style={{
                    position: "absolute",
                    left: 130,
                    top: 110,
                    ...fadeUp(frame, fps, 0, 22, 32),
                }}
            >
                <TitleBlock
                    eyebrow="Origins"
                    title={"Most coffee begins\nin the equatorial belt"}
                    subtitle="A handful of producing nations anchor a globally distributed everyday habit."
                    titleSize={88}
                    maxWidth={900}
                />
            </div>

            <div
                style={{
                    position: "absolute",
                    right: 110,
                    top: 180,
                    width: 500,
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                }}
            >
                {PRODUCERS.slice(0, 5).map((item, index) => (
                    <div
                        key={item.key}
                        style={{
                            padding: "22px 24px",
                            borderRadius: 24,
                            border: `1px solid ${COLORS.panelBorder}`,
                            background: "rgba(11,15,26,0.68)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                            ...fadeUp(frame, fps, 14 + index * 8, 18, 22),
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: 34,
                                marginBottom: 8,
                            }}
                        >
                            <span>{item.name}</span>
                            <span style={{ color: item.color, fontWeight: 800 }}>{item.value}%</span>
                        </div>
                        <div
                            style={{
                                color: COLORS.muted,
                                fontSize: 22,
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                            }}
                        >
                            Share of production
                        </div>
                    </div>
                ))}
            </div>
        </SceneContainer>
    );
};