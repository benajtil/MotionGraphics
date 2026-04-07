import React from "react";
import {
    AbsoluteFill,
    interpolate,
    spring,
    staticFile,
    useCurrentFrame,
    useVideoConfig,
} from "remotion";

export const OutroScene = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const cupIn = spring({
        fps,
        frame,
        config: {
            damping: 14,
            stiffness: 90,
            mass: 0.9,
        },
    });

    const pourStart = 18;
    const pourEnd = 132;

    const cupRotate = interpolate(frame, [0, 26, 70, 130], [0, 0, -18, -24], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const cupX = interpolate(frame, [0, 70], [0, -18], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const cupY = interpolate(cupIn, [0, 1], [-18, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const streamHeight = interpolate(frame, [pourStart, 60], [0, 320], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const streamOpacity = interpolate(frame, [pourStart, pourStart + 8], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const fillProgress = interpolate(frame, [42, pourEnd], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const earthScale = interpolate(frame, [0, 24], [0.94, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const earthDrift = Math.sin(frame / 40) * 4;
    const glowOpacity = interpolate(frame, [0, 90], [0.16, 0.4], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const textOpacity = interpolate(frame, [140, 172], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const textY = interpolate(frame, [140, 172], [24, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const fillHeight = 100 * fillProgress;

    const wave1 = Math.sin(frame / 7) * 10;
    const wave2 = Math.sin(frame / 11 + 1.6) * 7;
    const waveMix = wave1 + wave2;

    const streamSkew = interpolate(frame, [24, 84, 132], [0, -8, -10], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const streamRotate = cupRotate * 0.9;
    const rippleOpacity = interpolate(frame, [68, 94, 126], [0, 0.55, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const steamOpacity = interpolate(frame, [0, 18, 80], [0, 0.5, 0.22], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const steamRise1 = interpolate(frame, [0, 120], [0, -36], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const steamRise2 = interpolate(frame, [10, 130], [0, -52], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const steamDrift1 = Math.sin(frame / 18) * 8;
    const steamDrift2 = Math.sin(frame / 22 + 1.8) * 10;

    return (
        <AbsoluteFill
            style={{
                background:
                    "radial-gradient(circle at 50% 38%, #16110d 0%, #0b0a09 56%, #030303 100%)",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                fontFamily: "Inter, Arial, sans-serif",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle at center, rgba(0,0,0,0) 34%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.58) 100%)",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    width: 760,
                    height: 760,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, rgba(149,94,52,${glowOpacity}) 0%, rgba(149,94,52,0.08) 40%, rgba(0,0,0,0) 72%)`,
                    filter: "blur(26px)",
                    transform: "translateY(12px)",
                }}
            />

            {/* Cup group */}
            <div
                style={{
                    position: "absolute",
                    left: "52%",
                    top: 92 + cupY,
                    transform: `translateX(${cupX}px) rotate(${cupRotate}deg)`,
                    transformOrigin: "120px 40px",
                    zIndex: 5,
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: 180,
                        height: 100,
                    }}
                >
                    {/* Steam */}
                    <div
                        style={{
                            position: "absolute",
                            left: 66 + steamDrift1,
                            top: -12 + steamRise1,
                            width: 26,
                            height: 44,
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0) 72%)",
                            filter: "blur(10px)",
                            opacity: steamOpacity,
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: 88 + steamDrift2,
                            top: -18 + steamRise2,
                            width: 22,
                            height: 40,
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0) 72%)",
                            filter: "blur(10px)",
                            opacity: steamOpacity * 0.9,
                        }}
                    />

                    {/* Cup body */}
                    <div
                        style={{
                            position: "absolute",
                            left: 18,
                            top: 22,
                            width: 124,
                            height: 58,
                            background: "linear-gradient(to bottom, #f7f4f1, #d9d5d2)",
                            borderBottomLeftRadius: 48,
                            borderBottomRightRadius: 48,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            boxShadow:
                                "0 10px 24px rgba(0,0,0,0.2), inset 0 2px 0 rgba(255,255,255,0.45)",
                        }}
                    />

                    {/* Rim */}
                    <div
                        style={{
                            position: "absolute",
                            left: 12,
                            top: 14,
                            width: 132,
                            height: 16,
                            borderRadius: 999,
                            background: "linear-gradient(to bottom, #ffffff, #ddd8d3)",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                        }}
                    />

                    {/* Coffee inside cup */}
                   

                    {/* Handle */}
                    <div
                        style={{
                            position: "absolute",
                            right: 20,
                            top: 30,
                            width: 34,
                            height: 36,
                            border: "7px solid #dcd7d3",
                            borderLeft: "7px solid transparent",
                            borderRadius: "50%",
                            boxSizing: "border-box",
                        }}
                    />
                </div>
            </div>

            {/* Pour stream behind cup */}
            <svg
                width="140"
                height={Math.max(160, streamHeight + 100)}
                viewBox={`0 0 140 ${Math.max(160, streamHeight + 100)}`}
                style={{
                    position: "absolute",
                    top: 150,
                    left: "50%",
                    marginLeft: -12,
                    opacity: streamOpacity,
                    transform: `translateX(${cupX}px) rotate(${streamRotate}deg) skewX(${streamSkew}deg)`,
                    transformOrigin: "70px 0px",
                    overflow: "visible",
                    zIndex: 2,
                    pointerEvents: "none",
                }}
            >
                <defs>
                    <linearGradient id="coffeeStreamGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ddb07e" />
                        <stop offset="24%" stopColor="#b27a4f" />
                        <stop offset="58%" stopColor="#6f4e37" />
                        <stop offset="100%" stopColor="#341d15" />
                    </linearGradient>

                    <radialGradient id="coffeeDropGradient" cx="35%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#ddb07e" />
                        <stop offset="45%" stopColor="#97623d" />
                        <stop offset="100%" stopColor="#40231a" />
                    </radialGradient>

                    <filter id="coffeeBlur">
                        <feGaussianBlur stdDeviation="0.75" />
                    </filter>
                </defs>

                {(() => {
                    const h = Math.max(70, streamHeight);
                    const wobbleA = Math.sin(frame / 5) * 3.2;
                    const wobbleB = Math.sin(frame / 8 + 1.3) * 2.8;
                    const flowCurve = Math.sin(frame / 10) * 6;
                    const centerX = 70;
                    const topWidth = 14;
                    const midWidth = 26 + Math.sin(frame / 6) * 2.4;
                    const bottomWidth = 18 + Math.sin(frame / 7 + 0.8) * 3.2;

                    const leftTop = centerX - topWidth / 2;
                    const rightTop = centerX + topWidth / 2;
                    const leftMid = centerX - midWidth / 2 + wobbleA;
                    const rightMid = centerX + midWidth / 2 + wobbleB;
                    const leftBottom = centerX - bottomWidth / 2 + wobbleB;
                    const rightBottom = centerX + bottomWidth / 2 + wobbleA;

                    const waveY = h;
                    const localWave1 = Math.sin(frame / 6) * 4;
                    const localWave2 = Math.sin(frame / 9 + 1.7) * 3;

                    const path = `
            M ${leftTop} 0
            C ${leftTop - 2 + flowCurve} ${h * 0.22},
              ${leftMid - 5 + flowCurve} ${h * 0.48},
              ${leftMid} ${h * 0.7}
            C ${leftBottom - 4 + flowCurve} ${h * 0.84},
              ${leftBottom - 2} ${h * 0.94},
              ${leftBottom} ${waveY}
            C ${centerX - 8} ${waveY + localWave1},
              ${centerX + 8} ${waveY - localWave2},
              ${rightBottom} ${waveY}
            C ${rightBottom + 2 - flowCurve} ${h * 0.94},
              ${rightBottom + 4 - flowCurve} ${h * 0.84},
              ${rightMid} ${h * 0.7}
            C ${rightMid + 5 - flowCurve} ${h * 0.48},
              ${rightTop + 2 - flowCurve} ${h * 0.22},
              ${rightTop} 0
            Z
          `;

                    return (
                        <>
                            <path
                                d={path}
                                fill="url(#coffeeStreamGradient)"
                                filter="url(#coffeeBlur)"
                                opacity="0.96"
                            />

                            <path
                                d={`
                  M ${centerX - 5} 8
                  C ${centerX - 9} ${h * 0.28}, ${centerX - 12} ${h * 0.52}, ${centerX - 8} ${h * 0.86}
                `}
                                fill="none"
                                stroke="rgba(255,255,255,0.14)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                opacity="0.72"
                            />

                            <ellipse
                                cx={centerX}
                                cy={h + 12}
                                rx={18 + Math.sin(frame / 5) * 1.5}
                                ry={16 + Math.sin(frame / 7) * 1.2}
                                fill="url(#coffeeDropGradient)"
                                filter="url(#coffeeBlur)"
                                opacity={interpolate(frame, [28, 48], [0, 1], {
                                    extrapolateLeft: "clamp",
                                    extrapolateRight: "clamp",
                                })}
                            />
                        </>
                    );
                })()}
            </svg>

            {/* Earth */}
            <div
                style={{
                    position: "absolute",
                    top: 248 + earthDrift,
                    width: 410,
                    height: 410,
                    borderRadius: "50%",
                    overflow: "hidden",
                    transform: `scale(${earthScale})`,
                    background:
                        "radial-gradient(circle at 32% 28%, #172331 0%, #0f1722 48%, #080d14 100%)",
                    boxShadow:
                        "0 24px 64px rgba(0,0,0,0.58), inset 0 0 28px rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    zIndex: 1,
                }}
            >
                {/* Base map */}
                <img
                    src={staticFile("world-map.svg")}
                    alt="World map"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: 0.18,
                        filter: "invert(1) brightness(1.35) contrast(1.1)",
                        mixBlendMode: "screen",
                        transform: `translateX(${Math.sin(frame / 40) * 4}px)`,
                    }}
                />

                {/* Coffee fill */}
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: "100%",
                        height: `${fillHeight}%`,
                        background:
                            "linear-gradient(to top, #3f261b 0%, #6f4e37 36%, #9c6c45 74%, #bf8d5b 100%)",
                        boxShadow: "inset 0 10px 24px rgba(255,255,255,0.05)",
                    }}
                />

                {/* Moving liquid surface */}
                <svg
                    viewBox="0 0 410 80"
                    style={{
                        position: "absolute",
                        left: 0,
                        bottom: `calc(${fillHeight}% - 22px)`,
                        width: "100%",
                        height: 78,
                        opacity: fillProgress > 0.02 ? 1 : 0,
                        overflow: "visible",
                    }}
                >
                    <path
                        d={`
              M 0 42
              C 45 ${36 + waveMix}, 90 ${50 - wave1}, 135 ${40 + wave2}
              C 180 ${28 - wave2}, 225 ${54 + wave1}, 270 ${39 - waveMix}
              C 315 ${26 + wave2}, 360 ${52 - wave1}, 410 42
              L 410 80
              L 0 80
              Z
            `}
                        fill="rgba(191,141,91,0.95)"
                    />
                    <path
                        d={`
              M 0 46
              C 55 ${38 + wave2}, 110 ${54 - wave1}, 165 ${43 + waveMix}
              C 220 ${31 - wave2}, 275 ${57 + wave1}, 330 ${40 - waveMix}
              C 370 ${34 + wave1}, 395 ${48 - wave2}, 410 46
            `}
                        fill="none"
                        stroke="rgba(233,193,145,0.6)"
                        strokeWidth="2"
                    />
                </svg>

                {/* Impact ripple */}
                <div
                    style={{
                        position: "absolute",
                        top: 104 + Math.sin(frame / 8) * 2,
                        left: 162 + Math.sin(frame / 10) * 3,
                        width: 86,
                        height: 26,
                        borderRadius: "50%",
                        border: "2px solid rgba(246,214,175,0.72)",
                        opacity: rippleOpacity,
                        transform: `scale(${interpolate(frame, [68, 126], [0.7, 1.9], {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp",
                        })})`,
                        filter: "blur(0.4px)",
                    }}
                />

                {/* Map overlay above coffee */}
                <img
                    src={staticFile("world-map.svg")}
                    alt="World map overlay"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: 0.26,
                        filter: "invert(1) brightness(1.6) contrast(1.15)",
                        mixBlendMode: "overlay",
                        transform: `translateX(${Math.sin(frame / 40) * 4}px)`,
                    }}
                />

                {/* Gloss */}
                <div
                    style={{
                        position: "absolute",
                        top: 20,
                        left: 34,
                        width: 150,
                        height: 66,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 72%)",
                        transform: "rotate(-18deg)",
                    }}
                />
            </div>

            <div
                style={{
                    position: "absolute",
                    top: 682,
                    width: 520,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.34)",
                    filter: "blur(18px)",
                    zIndex: 0,
                }}
            />

            {/* End text */}
            <div
                style={{
                    position: "absolute",
                    bottom: 82,
                    textAlign: "center",
                    opacity: textOpacity,
                    transform: `translateY(${textY}px)`,
                    zIndex: 6,
                }}
            >
                <div
                    style={{
                        fontSize: 46,
                        color: "rgba(255,255,255,0.9)",
                        marginBottom: 8,
                        letterSpacing: "-0.03em",
                        textShadow: "0 6px 24px rgba(0,0,0,0.5)",
                    }}
                >
                    Coffee is not local.
                </div>

                <div
                    style={{
                        fontSize: 96,
                        fontWeight: 900,
                        lineHeight: 1,
                        color: "#ddb07e",
                        letterSpacing: "-0.05em",
                        textShadow:
                            "0 8px 30px rgba(0,0,0,0.55), 0 0 24px rgba(152,95,51,0.18)",
                    }}
                >
                    It’s global.
                </div>
            </div>
        </AbsoluteFill>
    );
};