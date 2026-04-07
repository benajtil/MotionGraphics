import React from "react";
import { Composition } from "remotion";
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import { CoffeeVideo } from "./CoffeeVideo";

const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;

const TRANSITIONS = {
    fade1: 18,
    slide1: 20,
    fade2: 18,
    slide2: 20,
    fade3: 18,
};

const toFrames = (seconds) => Math.ceil(seconds * FPS);

// Small padding so the scene breathes a bit after each line.
// You can tune these later.
const EXTRA = {
    intro: 18,
    origins: 18,
    routes: 20,
    stat: 14,
    comparison: 16,
    outro: 24,
};

export const RemotionRoot = () => {
    return (
        <Composition
            id="CoffeeGlobalJourney"
            component={CoffeeVideo}
            width={WIDTH}
            height={HEIGHT}
            fps={FPS}
            durationInFrames={900}
            defaultProps={{
                timings: {
                    introFrames: 150,
                    originsFrames: 170,
                    routesFrames: 190,
                    statFrames: 145,
                    comparisonFrames: 160,
                    outroFrames: 170,
                },
            }}
            calculateMetadata={async () => {
                const [
                    introSec,
                    scene2Sec,
                    scene3Sec,
                    scene4Sec,
                    scene5Sec,
                    scene6Sec,
                ] = await Promise.all([
                    getAudioDurationInSeconds("/Sound/intro.mp3"),
                    getAudioDurationInSeconds("/Sound/scene2.mp3"),
                    getAudioDurationInSeconds("/Sound/scene3.mp3"),
                    getAudioDurationInSeconds("/Sound/scene4.mp3"),
                    getAudioDurationInSeconds("/Sound/scene5.mp3"),
                    getAudioDurationInSeconds("/Sound/scene6.mp3"),
                ]);

                const introFrames = toFrames(introSec) + EXTRA.intro;
                const originsFrames = toFrames(scene2Sec) + EXTRA.origins;
                const routesFrames = toFrames(scene3Sec) + EXTRA.routes;
                const statFrames = toFrames(scene4Sec) + EXTRA.stat;
                const comparisonFrames = toFrames(scene5Sec) + EXTRA.comparison;
                const outroFrames = toFrames(scene6Sec) + EXTRA.outro;

                const totalSequences =
                    introFrames +
                    originsFrames +
                    routesFrames +
                    statFrames +
                    comparisonFrames +
                    outroFrames;

                const totalTransitions =
                    TRANSITIONS.fade1 +
                    TRANSITIONS.slide1 +
                    TRANSITIONS.fade2 +
                    TRANSITIONS.slide2 +
                    TRANSITIONS.fade3;

                const durationInFrames = totalSequences - totalTransitions;

                return {
                    durationInFrames,
                    props: {
                        timings: {
                            introFrames,
                            originsFrames,
                            routesFrames,
                            statFrames,
                            comparisonFrames,
                            outroFrames,
                        },
                    },
                };
            }}
        />
    );
};