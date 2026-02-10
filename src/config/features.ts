export interface Feature {
    icon: string;
    title: string;
    description: string;
    specs?: Record<string, string>;
}

export const coreFeatures: Feature[] = [
    {
        icon: "Zap",
        title: "Lightning Fast",
        description:
            "NVMe SSD storage and LiteSpeed servers deliver sub-100ms response times globally.",
        specs: {
            TTFB: "<100ms",
            SSD: "NVMe Gen4",
            CDN: "Included",
        },
    },
    {
        icon: "Shield",
        title: "Enterprise Security",
        description:
            "Advanced DDoS protection, WAF, and free SSL certificates keep your sites secure.",
        specs: {
            DDoS: "10 Tbps+",
            WAF: "ModSecurity",
            SSL: "Let's Encrypt",
        },
    },
    {
        icon: "Clock",
        title: "99.99% Uptime",
        description:
            "Redundant infrastructure and automatic failover ensure your sites never go down.",
        specs: {
            Uptime: "99.99%",
            SLA: "Guaranteed",
            Failover: "Automatic",
        },
    },
    {
        icon: "Globe",
        title: "Global Network",
        description:
            "12 data centers worldwide ensure low latency for your visitors anywhere.",
        specs: {
            Locations: "12",
            Regions: "6 Continents",
            Latency: "<50ms",
        },
    },
    {
        icon: "Headphones",
        title: "24/7 Expert Support",
        description:
            "Real humans available around the clock via live chat, phone, and tickets.",
        specs: {
            Response: "<5 min",
            Channels: "Chat, Phone, Email",
            Languages: "12+",
        },
    },
    {
        icon: "CheckCircle2",
        title: "Easy Management",
        description:
            "Intuitive control panel with one-click installs, backups, and monitoring.",
        specs: {
            Panel: "Custom Built",
            "1-Click": "400+ Apps",
            API: "REST + GraphQL",
        },
    },
];

export const trustSignals = {
    uptime: "99.99%",
    users: "150,000+",
    rating: "4.9/5",
    support: "24/7/365",
};

export const comparisonTable = {
    headers: ["Feature", "Hostmadeup", "Competitor A", "Competitor B"],
    rows: [
        ["NVMe Storage", "✓", "✗", "✓"],
        ["Free SSL", "✓", "✓", "✓"],
        ["Daily Backups", "✓", "✗", "✓"],
        ["24/7 Support", "✓", "✓", "✗"],
        ["LiteSpeed Cache", "✓", "✗", "✗"],
        ["Free CDN", "✓", "✗", "✓"],
        ["Starting Price", "$1.99/mo", "$2.99/mo", "$3.49/mo"],
    ],
};

export const datacenters = [
    { location: "San Francisco, US", code: "SFO", latency: "12ms" },
    { location: "New York, US", code: "NYC", latency: "18ms" },
    { location: "London, UK", code: "LON", latency: "24ms" },
    { location: "Frankfurt, DE", code: "FRA", latency: "28ms" },
    { location: "Amsterdam, NL", code: "AMS", latency: "26ms" },
    { location: "Singapore", code: "SGP", latency: "45ms" },
    { location: "Tokyo, JP", code: "TYO", latency: "52ms" },
    { location: "Sydney, AU", code: "SYD", latency: "68ms" },
    { location: "São Paulo, BR", code: "GRU", latency: "120ms" },
    { location: "Mumbai, IN", code: "BOM", latency: "85ms" },
    { location: "Toronto, CA", code: "YYZ", latency: "22ms" },
    { location: "Paris, FR", code: "CDG", latency: "30ms" },
];

export const techStack = {
    php: ["8.3", "8.2", "8.1", "8.0", "7.4"],
    nodejs: ["22 LTS", "20 LTS", "18 LTS"],
    python: ["3.12", "3.11", "3.10"],
    databases: ["MySQL 8.0", "MariaDB 11", "PostgreSQL 16", "MongoDB 7"],
    caching: ["Redis 7", "Memcached", "LiteSpeed Cache"],
};
