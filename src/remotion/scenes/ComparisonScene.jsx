import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { SceneContainer } from "../components/SceneContainer";
import { BarChart } from "../components/BarChart";
import { TitleBlock } from "../components/TitleBlock";
import { CONSUMERS, PRODUCERS } from "../data/coffeeData";
import { fadeUp } from "../utils/animation";

export const ComparisonScene = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    return (
        <SceneContainer>
            <div
                style={{
                    position: "absolute",
                    left: 130,
                    top: 100,
                    ...fadeUp(frame, fps, 0, 24, 30),
                }}
            >
                <TitleBlock
                    eyebrow="Comparison"
                    title={"Production and\nconsumption\nrarely live\nin the same place"}
                    subtitle="That gap is what makes coffee such a strong visual story for maps, charts, and motion."
                    titleSize={76}
                    maxWidth={700}
                />
            </div>

            <BarChart
                title="Production"
                items={PRODUCERS}
                delay={16}
                style={{ position: "absolute", right: 760, top: 210 }}
            />

            <BarChart
                title="Consumption"
                items={CONSUMERS}
                delay={28}
                style={{ position: "absolute", right: 100, top: 210 }}
            />
        </SceneContainer>
    );
};