export const getQuadraticPoint = (from, to, height, t) => {
    const [x1, y1] = from;
    const [x2, y2] = to;
    const cx = (x1 + x2) / 2;
    const cy = Math.min(y1, y2) - height;

    const x =
        (1 - t) * (1 - t) * x1 +
        2 * (1 - t) * t * cx +
        t * t * x2;

    const y =
        (1 - t) * (1 - t) * y1 +
        2 * (1 - t) * t * cy +
        t * t * y2;

    return { x, y };
};