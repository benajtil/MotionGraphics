import React from "react";
import { Player } from "@remotion/player";
import { CoffeeVideo } from "./remotion/CoffeeVideo";

export default function App() {
  return (
    <div className="app-shell">
      <div className="content">
        <div className="text-block">
          <p className="eyebrow">Motion Graphics</p>
          <h1>Bean to Brew</h1>
          <p className="subtitle">
            A short documentary-style coffee journey animation built with React,
            Vite, and Remotion.
          </p>
        </div>

        <div className="player-wrap">
          <Player
            component={CoffeeVideo}
            inputProps={{
              timings: {
                introFrames: 150,
                originsFrames: 170,
                routesFrames: 190,
                statFrames: 145,
                comparisonFrames: 200,
                outroFrames: 260,
              },
            }}
            durationInFrames={960}
            compositionWidth={1920}
            compositionHeight={1080}
            fps={30}
            controls
            acknowledgeRemotionLicense
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}