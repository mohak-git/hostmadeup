import { BoxType, getColors, IsoBoxProps, toIso } from "@/utils/isometric";

const serverData: IsoBoxProps[] = [
    // Platform
    { x: 0, y: 0, z: 0, w: 200, d: 200, h: 4, type: "base" },

    // Server Racks
    { x: 20, y: 30, z: 4, w: 30, d: 40, h: 100, type: "rack" },
    { x: 20, y: 90, z: 4, w: 30, d: 40, h: 120, type: "rack" },
    { x: 20, y: 150, z: 4, w: 30, d: 30, h: 80, type: "rack" },

    // Database Clusters
    { x: 90, y: 30, z: 4, w: 40, d: 40, h: 15, type: "database" },
    { x: 95, y: 35, z: 19, w: 30, d: 30, h: 15, type: "database" },
    { x: 100, y: 40, z: 34, w: 20, d: 20, h: 15, type: "database" },

    { x: 90, y: 90, z: 4, w: 40, d: 40, h: 15, type: "database" },
    { x: 95, y: 95, z: 19, w: 30, d: 30, h: 15, type: "database" },
    { x: 100, y: 100, z: 34, w: 20, d: 20, h: 15, type: "database" },

    // Network Nodes
    { x: 160, y: 40, z: 4, w: 20, d: 70, h: 8, type: "node" },
    { x: 160, y: 40, z: 14, w: 20, d: 70, h: 8, type: "node" },
    { x: 160, y: 40, z: 24, w: 20, d: 70, h: 8, type: "node" },
    { x: 160, y: 130, z: 4, w: 20, d: 40, h: 8, type: "node" },
    { x: 160, y: 130, z: 14, w: 20, d: 40, h: 8, type: "node" },

    // Flowing Packets
    { x: 65, y: 50, z: 20, w: 4, d: 4, h: 4, type: "packetCyan", delay: "0s" },
    {
        x: 75,
        y: 50,
        z: 20,
        w: 4,
        d: 4,
        h: 4,
        type: "packetCyan",
        delay: "1.5s",
    },
    {
        x: 65,
        y: 110,
        z: 30,
        w: 4,
        d: 4,
        h: 4,
        type: "packetPurple",
        delay: "0.8s",
    },
    { x: 140, y: 80, z: 10, w: 4, d: 4, h: 4, type: "packetCyan", delay: "2s" },
    {
        x: 140,
        y: 150,
        z: 10,
        w: 4,
        d: 4,
        h: 4,
        type: "packetPurple",
        delay: "0.5s",
    },
];

export default function IsoServers() {
    const sortedData = [...serverData].sort(
        (a, b) => a.x + a.y - (b.x + b.y) || a.z - b.z,
    );

    return (
        <div className="h-[800px]">
            <svg
                viewBox="-200 -100 400 500"
                className="w-full h-full drop-shadow-[0_20px_50px_rgba(34,211,238,0.15)] overflow-visible"
            >
                <g transform="translate(0, 80)">
                    {sortedData.map((item, i) => (
                        <IsoBox key={i} {...item} />
                    ))}
                </g>
            </svg>
        </div>
    );
}

function IsoBox({ x, y, z, w, d, h, type, delay = "0s" }: IsoBoxProps) {
    const colors = getColors(type as BoxType);
    const isGlowing = type.includes("light") || type.includes("packet");

    let animClass = "transition-transform duration-500 ease-out origin-center";
    if (type.includes("packet")) animClass += " animate-data-flow";
    else if (type.includes("light")) animClass += " animate-pulse-glow";

    const top = `${toIso(x, y, z + h)} ${toIso(x + w, y, z + h)} ${toIso(x + w, y + d, z + h)} ${toIso(x, y + d, z + h)}`;
    const left = `${toIso(x, y + d, z)} ${toIso(x + w, y + d, z)} ${toIso(x + w, y + d, z + h)} ${toIso(x, y + d, z + h)}`;
    const right = `${toIso(x + w, y + d, z)} ${toIso(x + w, y, z)} ${toIso(x + w, y, z + h)} ${toIso(x + w, y + d, z + h)}`;

    return (
        <g className={animClass} style={{ animationDelay: delay }}>
            <polygon
                points={left}
                fill={colors.left}
                stroke={isGlowing ? colors.left : "#1e293b"}
                strokeWidth="0.5"
                strokeLinejoin="round"
            />
            <polygon
                points={right}
                fill={colors.right}
                stroke={isGlowing ? colors.right : "#1e293b"}
                strokeWidth="0.5"
                strokeLinejoin="round"
            />
            <polygon
                points={top}
                fill={colors.top}
                stroke={isGlowing ? colors.top : "#1e293b"}
                strokeWidth="0.5"
                strokeLinejoin="round"
            />
        </g>
    );
}
