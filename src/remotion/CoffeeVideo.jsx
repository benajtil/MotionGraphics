import React from "react";
import { Easing, Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";

import { IntroScene } from "./scenes/IntroScene";
import { OriginsScene } from "./scenes/OriginsScene";
import { RoutesScene } from "./scenes/RoutesScene";
import { BigStatScene } from "./scenes/BigStatScene";
import { ComparisonScene } from "./scenes/ComparisonScene";
import { OutroScene } from "./scenes/OutroScene";
import { asset } from "./utils/assets";

export const CoffeeVideo = ({ timings }) => {
    const {
        introFrames,
        originsFrames,
        routesFrames,
        statFrames,
        comparisonFrames,
        outroFrames,
    } = timings;

    return (
        <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={introFrames} name="Intro">
                <>
                    <Audio src={asset("Sound/intro.mp3")} />
                    <IntroScene />
                </>
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={fade()}
                timing={linearTiming({ durationInFrames: 18 })}
            />

            <TransitionSeries.Sequence durationInFrames={originsFrames} name="Origins">
                <>
                    <Audio src={asset("Sound/scene2.mp3")} />
                    <OriginsScene />
                </>
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={slide({ direction: "from-right" })}
                timing={linearTiming({
                    durationInFrames: 20,
                    easing: Easing.bezier(0.22, 1, 0.36, 1),
                })}
            />

            <TransitionSeries.Sequence durationInFrames={routesFrames} name="Routes">
                <>
                    <Audio src={asset("Sound/fixed-scene.mp3")} />
                    <RoutesScene />
                </>
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={fade()}
                timing={linearTiming({
                    durationInFrames: 18,
                    easing: Easing.bezier(0.22, 1, 0.36, 1),
                })}
            />

            <TransitionSeries.Sequence durationInFrames={statFrames} name="BigStat">
                <>
                    <Audio src={asset("Sound/scene5.mp3")} />
                    <BigStatScene />
                </>
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={slide({ direction: "from-bottom" })}
                timing={linearTiming({
                    durationInFrames: 20,
                    easing: Easing.bezier(0.22, 1, 0.36, 1),
                })}
            />

            <TransitionSeries.Sequence
                durationInFrames={comparisonFrames}
                name="Comparison"
            >
                <>
                    <Audio src={asset("Sound/scene4.mp3")} />
                    <ComparisonScene />
                </>
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={fade()}
                timing={linearTiming({ durationInFrames: 18 })}
            />

            <TransitionSeries.Sequence durationInFrames={outroFrames} name="Outro">
                <>
                    <Audio src={asset("Sound/scene6.mp3")} />
                    <OutroScene />
                </>
            </TransitionSeries.Sequence>
        </TransitionSeries>
    );
};