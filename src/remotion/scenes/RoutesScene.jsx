import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { SceneContainer } from "../components/SceneContainer";
import { WorldMap } from "../components/WorldMap";
import { TitleBlock } from "../components/TitleBlock";
import { RouteArc } from "../components/RouteArc";
import { ALL_POINTS, CONSUMERS, ROUTES } from "../data/coffeeData";
import { getMapRect, projectSvgPoint } from "../utils/mapProjection";
import { fadeUp } from "../utils/animation";
import { COLORS } from "../styles/theme";

const pointsByKey = ALL_POINTS.reduce((acc, item) => {
    acc[item.key] = item;
    return acc;
}, {});

export const RoutesScene = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const mapRect = getMapRect({
        frameWidth: 1920,
        frameHeight: 1080,
        scale: 1.12 * 1.04,
        offsetX: 0,
        offsetY: 8,
    });

    return (
        <SceneContainer>
            <WorldMap highlights={ALL_POINTS} showLabels={false} scale={1.04} />

            {ROUTES.map((route, index) => {
                const fromPoint = projectSvgPoint(pointsByKey[route.fromKey], mapRect);
                const toPoint = projectSvgPoint(pointsByKey[route.toKey], mapRect);

                return (
                    <RouteArc
                        key={`${route.fromKey}-${route.toKey}`}
                        from={fromPoint}
                        to={toPoint}
                        color={route.color}
                        delay={8 + index * 5}
                        duration={30}
                        height={route.height ?? 120}
                        strokeWidth={4}
                    />
                );
            })}

            <div
                style={{
                    position: "absolute",
                    left: 130,
                    top: 110,
                    ...fadeUp(frame, fps, 0, 22, 34),
                }}
            >
                <TitleBlock
                    eyebrow="Routes"
                    title={"Beans travel\nthousands of miles"}
                    subtitle="Production is concentrated. Consumption is dispersed. The route between them is where the system becomes global."
                    titleSize={92}
                    maxWidth={860}
                />
            </div>

            <div
                style={{
                    position: "absolute",
                    right: 110,
                    bottom: 120,
                    width: 460,
                    padding: "26px 28px",
                    borderRadius: 28,
                    border: `1px solid ${COLORS.panelBorder}`,
                    background: "rgba(11,15,26,0.72)",
                    backdropFilter: "blur(10px)",
                    ...fadeUp(frame, fps, 26, 18, 24),
                }}
            >
                <div
                    style={{
                        color: COLORS.primary,
                        letterSpacing: "0.24em",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        fontSize: 20,
                        marginBottom: 16,
                    }}
                >
                    Major destinations
                </div>

                {CONSUMERS.map((c, index) => (
                    <div
                        key={c.key}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: 30,
                            marginBottom: index === CONSUMERS.length - 1 ? 0 : 12,
                        }}
                    >
                        <span>{c.name}</span>
                        <span style={{ color: c.color }}>{c.value}%</span>
                    </div>
                ))}
            </div>
        </SceneContainer>
    );
};