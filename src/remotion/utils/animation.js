import { Easing, interpolate, spring } from "remotion";

export const fadeUp = (frame, fps, delay = 0, duration = 22, distance = 36) => {
  const local = frame - delay;
  return {
    opacity: interpolate(local, [0, duration], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    }),
    transform: `translateY(${interpolate(
      local,
      [0, duration],
      [distance, 0],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.bezier(0.22, 1, 0.36, 1),
      }
    )}px)`,
  };
};

export const reveal = (frame, delay = 0, duration = 28) =>
  interpolate(frame - delay, [0, duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

export const popIn = (frame, fps, delay = 0) =>
  spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 14,
      mass: 0.7,
      stiffness: 130,
    },
  });

export const drift = (frame, amplitude = 18, speed = 0.018) =>
  Math.sin(frame * speed) * amplitude;

export const scaleIn = (frame, fps, delay = 0, from = 0.93, to = 1) => {
  const s = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 18,
      stiffness: 110,
      mass: 0.9,
    },
  });

  return from + (to - from) * s;
};