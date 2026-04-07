import { MAP_NATIVE_SIZE } from "../data/coffeeData.js";

export const getMapRect = ({
    frameWidth = 1920,
    frameHeight = 1080,
    scale = 1.12,
    offsetX = 0,
    offsetY = 8,
}) => {
    const nativeRatio = MAP_NATIVE_SIZE.width / MAP_NATIVE_SIZE.height;
    const frameRatio = frameWidth / frameHeight;

    let baseWidth = frameWidth;
    let baseHeight = frameWidth / nativeRatio;

    if (frameRatio > nativeRatio) {
        baseHeight = frameHeight;
        baseWidth = frameHeight * nativeRatio;
    }

    const width = baseWidth * scale;
    const height = baseHeight * scale;

    const left = (frameWidth - width) / 2 + offsetX;
    const top = (frameHeight - height) / 2 + offsetY;

    return { left, top, width, height };
};

export const projectSvgPoint = (point, rect) => {
    return {
        x: rect.left + (point.svgX / MAP_NATIVE_SIZE.width) * rect.width,
        y: rect.top + (point.svgY / MAP_NATIVE_SIZE.height) * rect.height,
    };
};