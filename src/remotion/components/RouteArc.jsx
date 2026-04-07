import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

const quadraticPoint = (t, p0, p1, p2) => {
    const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
    const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
    return { x, y };
};

export const RouteArc = ({
    from,
    to,
    color,
    delay = 0,
    duration = 40,
    height = 140,
    strokeWidth = 4,
}) => {
    const frame = useCurrentFrame();

    const progress = interpolate(frame - delay, [0, duration], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const cx = (from.x + to.x) / 2;
    const cy = Math.min(from.y, to.y) - height;
    const control = { x: cx, y: cy };

    const partial = quadraticPoint(progress, from, control, to);

    const fullPath = `M ${from.x} ${from.y} Q ${control.x} ${control.y} ${to.x} ${to.y}`;
    const partialPath = `M ${from.x} ${from.y} Q ${control.x} ${control.y} ${partial.x} ${partial.y}`;

    const traveler = quadraticPoint(
        interpolate(frame - delay - 8, [0, duration], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        }),
        from,
        control,
        to
    );

    return (
        <svg
            width="1920"
            height="1080"
            style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
            <path
                d={fullPath}
                stroke={color}
                strokeOpacity={0.12}
                strokeWidth={strokeWidth}
                fill="none"
            />
            <path
                d={partialPath}
                stroke={color}
                strokeOpacity={0.95}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
            />
            {progress > 0.05 ? (
                <>
                    <circle
                        cx={traveler.x}
                        cy={traveler.y}
                        r="7"
                        fill={color}
                        opacity="0.95"
                    />
                    <circle
                        cx={traveler.x}
                        cy={traveler.y}
                        r="16"
                        fill={color}
                        opacity="0.12"
                    />
                </>
            ) : null}
        </svg>
    );
};