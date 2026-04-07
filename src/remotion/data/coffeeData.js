export const MAP_NATIVE_SIZE = {
    width: 1009.6727,
    height: 665.96301,
};

export const PRODUCERS = [
    {
        key: "brazil",
        name: "Brazil",
        value: 35,
        svgX: 332,
        svgY: 504,
        color: "#E6B17E",
        size: "xl",
        labelDx: 20,
        labelDy: -8,
    },
    {
        key: "vietnam",
        name: "Vietnam",
        value: 18,
        svgX: 804,
        svgY: 382,
        color: "#FF6B35",
        size: "xl",
        labelDx: 14,
        labelDy: -18,
    },
    {
        key: "colombia",
        name: "Colombia",
        value: 8,
        svgX: 279,
        svgY: 443,
        color: "#F59E0B",
        size: "lg",
        labelDx: 24,
        labelDy: -18,
    },
    {
        key: "ethiopia",
        name: "Ethiopia",
        value: 5,
        svgX: 580,
        svgY: 437,
        color: "#D97706",
        size: "lg",
        labelDx: 24,
        labelDy: -18,
    },
    {
        key: "indonesia",
        name: "Indonesia",
        value: 6,
        svgX: 842,
        svgY: 470,
        color: "#FB923C",
        size: "lg",
        labelDx: 24,
        labelDy: -18,
    },
    {
        key: "honduras",
        name: "Honduras",
        value: 3,
        svgX: 232,
        svgY: 416,
        color: "#FBBF24",
        size: "sm",
        labelDx: 18,
        labelDy: -14,
    },
    {
        key: "peru",
        name: "Peru",
        value: 4,
        svgX: 261,
        svgY: 475,
        color: "#CA8A04",
        size: "sm",
        labelDx: 18,
        labelDy: -14,
    },
    {
        key: "india",
        name: "India",
        value: 3,
        svgX: 699,
        svgY: 389,
        color: "#EA580C",
        size: "sm",
        labelDx: 18,
        labelDy: -14,
    },
    {
        key: "uganda",
        name: "Uganda",
        value: 2,
        svgX: 555,
        svgY: 468,
        color: "#C2410C",
        size: "sm",
        labelDx: 18,
        labelDy: -14,
    },
    {
        key: "mexico",
        name: "Mexico",
        value: 3,
        svgX: 195,
        svgY: 392,
        color: "#FDBA74",
        size: "sm",
        labelDx: 18,
        labelDy: -14,
    },
];

export const CONSUMERS = [
    {
        key: "usa",
        name: "USA",
        value: 16,
        svgX: 180,
        svgY: 328,
        color: "#60A5FA",
        size: "xl",
        labelDx: 24,
        labelDy: -18,
    },
    {
        key: "germany",
        name: "Germany",
        value: 6,
        svgX: 508,
        svgY: 295,
        color: "#38BDF8",
        size: "lg",
        labelDx: 24,
        labelDy: -18,
    },
    {
        key: "italy",
        name: "Italy",
        value: 5,
        svgX: 510,
        svgY: 328,
        color: "#22D3EE",
        size: "sm",
        labelDx: 18,
        labelDy: -14,
    },
    {
        key: "japan",
        name: "Japan",
        value: 7,
        svgX: 871,
        svgY: 350,
        color: "#A78BFA",
        size: "xl",
        labelDx: 24,
        labelDy: -18,
    },
    {
        key: "south-korea",
        name: "South Korea",
        value: 4,
        svgX: 835,
        svgY: 350,
        color: "#818CF8",
        size: "sm",
        labelDx: 18,
        labelDy: -14,
    },
];
export const DAILY_CUPS = 2.25;

const byKey = [...PRODUCERS, ...CONSUMERS].reduce((acc, item) => {
    acc[item.key] = item;
    return acc;
}, {});

const makeRoute = (fromKey, toKey, height = 120) => ({
    fromKey,
    toKey,
    color: byKey[fromKey].color,
    height,
});

export const ROUTES = [
    makeRoute("brazil", "usa", 80),
    makeRoute("brazil", "germany", 135),
    makeRoute("brazil", "japan", 185),

    makeRoute("vietnam", "germany", 120),
    makeRoute("vietnam", "japan", 75),
    makeRoute("vietnam", "south-korea", 60),

    makeRoute("colombia", "usa", 70),
    makeRoute("colombia", "germany", 120),

    makeRoute("ethiopia", "germany", 90),
    makeRoute("ethiopia", "italy", 70),

    makeRoute("indonesia", "japan", 78),
    makeRoute("indonesia", "south-korea", 64),
];

export const FEATURED_LABELS = [
    "brazil",
    "vietnam",
    "colombia",
    "ethiopia",
    "usa",
    "japan",
];

export const ALL_POINTS = [...PRODUCERS, ...CONSUMERS];