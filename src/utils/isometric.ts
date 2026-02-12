export interface IsoBoxProps {
    x: number;
    y: number;
    z: number;
    w: number;
    d: number;
    h: number;
    type: string;
    delay?: string;
}

export type BoxType =
    | "rack"
    | "base"
    | "database"
    | "node"
    | "packetCyan"
    | "packetPurple";

export const toIso = (x: number, y: number, z: number): string => {
    const isoX = (x - y) * 0.866;
    const isoY = (x + y) * 0.5 - z;

    return `${isoX.toFixed(2)},${isoY.toFixed(2)}`;
};

export const getColors = (type: BoxType) => {
    switch (type) {
        case "rack":
            return { top: "#334155", left: "#1e293b", right: "#0f172a" };
        case "base":
            return { top: "#1e293b", left: "#0f172a", right: "#020617" };
        case "database":
            return { top: "#3730a3", left: "#312e81", right: "#1e1b4b" };
        case "node":
            return { top: "#6b21a8", left: "#581c87", right: "#3b0764" };
        case "packetCyan":
            return { top: "#22d3ee", left: "#06b6d4", right: "#0891b2" };
        case "packetPurple":
            return { top: "#c084fc", left: "#a855f7", right: "#7e22ce" };
        default:
            return { top: "#475569", left: "#334155", right: "#1e293b" };
    }
};
