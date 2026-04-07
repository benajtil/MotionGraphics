import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { SceneContainer } from "../components/SceneContainer";
import { WorldMap } from "../components/WorldMap";
import { TitleBlock } from "../components/TitleBlock";
import { fadeUp } from "../utils/animation";
import { COLORS } from "../styles/theme";

export const OutroScene = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const fade = interpolate(frame, [70, 110], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <SceneContainer>
            <AbsoluteFill style={{ opacity: fade }}>
                <WorldMap scale={1.06} translateY={-6} />
                <div
                    style={{
                        position: "absolute",
                        left: 130,
                        top: 170,
                        ...fadeUp(frame, fps, 0, 24, 32),
                    }}
                >
                    <TitleBlock
                        eyebrow="From farm to cup"
                        title={"A story of\nlogistics,\nlabor, and ritual"}
                        subtitle="Coffee looks simple in the cup. Its movement across the world is anything but."
                        titleSize={112}
                        maxWidth={860}
                    />
                </div>

                <div
                    style={{
                        position: "absolute",
                        left: 130,
                        bottom: 120,
                        fontSize: 26,
                        color: COLORS.muted,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        ...fadeUp(frame, fps, 18, 18, 22),
                    }}
                >
                    Built in React + Remotion
                </div>
            </AbsoluteFill>
        </SceneContainer>
    );
};