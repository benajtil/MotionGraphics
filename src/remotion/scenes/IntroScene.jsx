import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { SceneContainer } from "../components/SceneContainer";
import { TitleBlock } from "../components/TitleBlock";
import { WorldMap } from "../components/WorldMap";
import { fadeUp, scaleIn } from "../utils/animation";
import { COLORS } from "../styles/theme";

export const IntroScene = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const opacity = interpolate(frame, [0, 20], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const mapScale = 1 + frame * 0.0006;
    const x = -20 + Math.sin(frame * 0.02) * 6;
    const y = 8 + Math.cos(frame * 0.018) * 4;

    return (
        <SceneContainer>
            <AbsoluteFill style={{ opacity }}>
                <WorldMap scale={mapScale} translateX={x} translateY={y} />

                <div
                    style={{
                        position: "absolute",
                        left: 130,
                        top: 140,
                        width: 900,
                        ...fadeUp(frame, fps, 4, 26, 36),
                        transform: `${fadeUp(frame, fps, 4, 26, 36).transform} scale(${scaleIn(
                            frame,
                            fps,
                            0,
                            0.97,
                            1
                        )})`,
                    }}
                >
                    <TitleBlock
                        eyebrow="Global Supply Story"
                        title={"Coffee\nis a global\njourney"}
                        subtitle="From equatorial farms to urban cups, every bean crosses geography, labor, logistics, and ritual."
                        titleSize={126}
                    />
                </div>

                <div
                    style={{
                        position: "absolute",
                        right: 130,
                        bottom: 110,
                        width: 460,
                        paddingTop: 18,
                        borderTop: `1px solid ${COLORS.line}`,
                        color: COLORS.muted,
                        fontSize: 28,
                        lineHeight: 1.5,
                        ...fadeUp(frame, fps, 16, 20, 24),
                    }}
                >
                    A short editorial motion graphic built in Remotion.
                </div>
            </AbsoluteFill>
        </SceneContainer>
    );
};