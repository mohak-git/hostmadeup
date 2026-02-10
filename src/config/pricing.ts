export interface PlanFeature {
    name: string;
    included: boolean | string;
}

export interface Plan {
    id: string;
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    popular?: boolean;
    features: PlanFeature[];
    specs: Record<string, string>;
}

export interface PricingCategory {
    id: string;
    name: string;
    description: string;
    plans: Plan[];
}

export const webHostingPlans: Plan[] = [
    {
        id: "starter",
        name: "Starter",
        description: "Perfect for personal websites",
        monthlyPrice: 2.99,
        yearlyPrice: 1.99,
        features: [
            { name: "1 Website", included: true },
            { name: "10 GB SSD Storage", included: true },
            { name: "Free SSL Certificate", included: true },
            { name: "Weekly Backups", included: true },
            { name: "SSH Access", included: false },
            { name: "Staging Environment", included: false },
        ],
        specs: {
            Storage: "10 GB SSD",
            Bandwidth: "100 GB",
            Domains: "1",
            Email: "1 Account",
            CPU: "1 Core",
            RAM: "512 MB",
        },
    },
    {
        id: "business",
        name: "Business",
        description: "For growing businesses",
        monthlyPrice: 5.99,
        yearlyPrice: 3.99,
        popular: true,
        features: [
            { name: "100 Websites", included: true },
            { name: "100 GB SSD Storage", included: true },
            { name: "Free SSL Certificate", included: true },
            { name: "Daily Backups", included: true },
            { name: "SSH Access", included: true },
            { name: "Staging Environment", included: false },
        ],
        specs: {
            Storage: "100 GB NVMe",
            Bandwidth: "Unlimited",
            Domains: "100",
            Email: "100 Accounts",
            CPU: "2 Cores",
            RAM: "1 GB",
        },
    },
    {
        id: "enterprise",
        name: "Enterprise",
        description: "Maximum power and flexibility",
        monthlyPrice: 12.99,
        yearlyPrice: 8.99,
        features: [
            { name: "Unlimited Websites", included: true },
            { name: "200 GB NVMe Storage", included: true },
            { name: "Free SSL Certificate", included: true },
            { name: "Daily Backups", included: true },
            { name: "SSH Access", included: true },
            { name: "Staging Environment", included: true },
        ],
        specs: {
            Storage: "200 GB NVMe",
            Bandwidth: "Unlimited",
            Domains: "Unlimited",
            Email: "Unlimited",
            CPU: "4 Cores",
            RAM: "2 GB",
        },
    },
];

export const wordpressHostingPlans: Plan[] = [
    {
        id: "wp-starter",
        name: "WP Starter",
        description: "For a single WordPress site",
        monthlyPrice: 3.99,
        yearlyPrice: 2.49,
        features: [
            { name: "1 WordPress Site", included: true },
            { name: "30 GB SSD Storage", included: true },
            { name: "Free SSL", included: true },
            { name: "LiteSpeed Cache", included: true },
            { name: "Auto Updates", included: true },
            { name: "Multisite", included: false },
        ],
        specs: {
            Storage: "30 GB SSD",
            Bandwidth: "100 GB",
            PHP: "8.2+",
            MySQL: "8.0",
            "WP Version": "Latest",
            Cache: "LiteSpeed",
        },
    },
    {
        id: "wp-business",
        name: "WP Business",
        description: "For multiple WordPress sites",
        monthlyPrice: 7.99,
        yearlyPrice: 4.99,
        popular: true,
        features: [
            { name: "100 WordPress Sites", included: true },
            { name: "100 GB NVMe Storage", included: true },
            { name: "Free SSL", included: true },
            { name: "LiteSpeed Cache", included: true },
            { name: "Auto Updates", included: true },
            { name: "Multisite", included: true },
        ],
        specs: {
            Storage: "100 GB NVMe",
            Bandwidth: "Unlimited",
            PHP: "8.2+",
            MySQL: "8.0",
            "WP Version": "Latest",
            Cache: "LiteSpeed + Redis",
        },
    },
    {
        id: "wp-enterprise",
        name: "WP Enterprise",
        description: "High-traffic WordPress sites",
        monthlyPrice: 14.99,
        yearlyPrice: 9.99,
        features: [
            { name: "Unlimited WordPress Sites", included: true },
            { name: "200 GB NVMe Storage", included: true },
            { name: "Free SSL", included: true },
            { name: "LiteSpeed Cache", included: true },
            { name: "Auto Updates", included: true },
            { name: "Multisite", included: true },
        ],
        specs: {
            Storage: "200 GB NVMe",
            Bandwidth: "Unlimited",
            PHP: "8.2+",
            MySQL: "8.0",
            "WP Version": "Latest",
            Cache: "LiteSpeed + Redis + CDN",
        },
    },
];

export const cloudHostingPlans: Plan[] = [
    {
        id: "cloud-startup",
        name: "Cloud Startup",
        description: "Entry-level cloud power",
        monthlyPrice: 9.99,
        yearlyPrice: 7.99,
        features: [
            { name: "2 CPU Cores", included: true },
            { name: "4 GB RAM", included: true },
            { name: "80 GB NVMe", included: true },
            { name: "Full Root Access", included: true },
            { name: "Dedicated IP", included: true },
            { name: "Auto Scaling", included: false },
        ],
        specs: {
            CPU: "2 Cores",
            RAM: "4 GB",
            Storage: "80 GB NVMe",
            Bandwidth: "4 TB",
            IP: "1 Dedicated",
            Uptime: "99.99%",
        },
    },
    {
        id: "cloud-professional",
        name: "Cloud Professional",
        description: "For production workloads",
        monthlyPrice: 24.99,
        yearlyPrice: 19.99,
        popular: true,
        features: [
            { name: "4 CPU Cores", included: true },
            { name: "8 GB RAM", included: true },
            { name: "160 GB NVMe", included: true },
            { name: "Full Root Access", included: true },
            { name: "Dedicated IP", included: true },
            { name: "Auto Scaling", included: true },
        ],
        specs: {
            CPU: "4 Cores",
            RAM: "8 GB",
            Storage: "160 GB NVMe",
            Bandwidth: "8 TB",
            IP: "2 Dedicated",
            Uptime: "99.99%",
        },
    },
    {
        id: "cloud-enterprise",
        name: "Cloud Enterprise",
        description: "Maximum cloud performance",
        monthlyPrice: 49.99,
        yearlyPrice: 39.99,
        features: [
            { name: "8 CPU Cores", included: true },
            { name: "16 GB RAM", included: true },
            { name: "320 GB NVMe", included: true },
            { name: "Full Root Access", included: true },
            { name: "Dedicated IP", included: true },
            { name: "Auto Scaling", included: true },
        ],
        specs: {
            CPU: "8 Cores",
            RAM: "16 GB",
            Storage: "320 GB NVMe",
            Bandwidth: "16 TB",
            IP: "4 Dedicated",
            Uptime: "99.99%",
        },
    },
];

export const vpsPlans: Plan[] = [
    {
        id: "vps-1",
        name: "VPS 1",
        description: "Entry-level VPS",
        monthlyPrice: 4.99,
        yearlyPrice: 3.99,
        features: [
            { name: "1 vCPU Core", included: true },
            { name: "1 GB RAM", included: true },
            { name: "25 GB NVMe", included: true },
            { name: "1 TB Bandwidth", included: true },
            { name: "Full Root Access", included: true },
            { name: "Snapshot Backups", included: true },
        ],
        specs: {
            vCPU: "1 Core",
            RAM: "1 GB",
            Storage: "25 GB NVMe",
            Bandwidth: "1 TB",
            OS: "Linux/Windows",
            Uptime: "99.9%",
        },
    },
    {
        id: "vps-2",
        name: "VPS 2",
        description: "Balanced performance",
        monthlyPrice: 9.99,
        yearlyPrice: 7.99,
        popular: true,
        features: [
            { name: "2 vCPU Cores", included: true },
            { name: "4 GB RAM", included: true },
            { name: "50 GB NVMe", included: true },
            { name: "2 TB Bandwidth", included: true },
            { name: "Full Root Access", included: true },
            { name: "Snapshot Backups", included: true },
        ],
        specs: {
            vCPU: "2 Cores",
            RAM: "4 GB",
            Storage: "50 GB NVMe",
            Bandwidth: "2 TB",
            OS: "Linux/Windows",
            Uptime: "99.9%",
        },
    },
    {
        id: "vps-4",
        name: "VPS 4",
        description: "High-performance VPS",
        monthlyPrice: 19.99,
        yearlyPrice: 15.99,
        features: [
            { name: "4 vCPU Cores", included: true },
            { name: "8 GB RAM", included: true },
            { name: "100 GB NVMe", included: true },
            { name: "4 TB Bandwidth", included: true },
            { name: "Full Root Access", included: true },
            { name: "Snapshot Backups", included: true },
        ],
        specs: {
            vCPU: "4 Cores",
            RAM: "8 GB",
            Storage: "100 GB NVMe",
            Bandwidth: "4 TB",
            OS: "Linux/Windows",
            Uptime: "99.9%",
        },
    },
    {
        id: "vps-8",
        name: "VPS 8",
        description: "Maximum power",
        monthlyPrice: 39.99,
        yearlyPrice: 31.99,
        features: [
            { name: "8 vCPU Cores", included: true },
            { name: "16 GB RAM", included: true },
            { name: "200 GB NVMe", included: true },
            { name: "8 TB Bandwidth", included: true },
            { name: "Full Root Access", included: true },
            { name: "Snapshot Backups", included: true },
        ],
        specs: {
            vCPU: "8 Cores",
            RAM: "16 GB",
            Storage: "200 GB NVMe",
            Bandwidth: "8 TB",
            OS: "Linux/Windows",
            Uptime: "99.9%",
        },
    },
];

export const emailPlans: Plan[] = [
    {
        id: "email-starter",
        name: "Email Starter",
        description: "Basic business email",
        monthlyPrice: 0.99,
        yearlyPrice: 0.79,
        features: [
            { name: "10 GB Mailbox", included: true },
            { name: "Custom Domain", included: true },
            { name: "Spam Protection", included: true },
            { name: "Mobile Sync", included: true },
            { name: "Email Forwarding", included: true },
            { name: "Shared Calendars", included: false },
        ],
        specs: {
            Storage: "10 GB",
            Attachments: "25 MB",
            Aliases: "5",
            IMAP: "Yes",
            POP3: "Yes",
            Webmail: "Yes",
        },
    },
    {
        id: "email-business",
        name: "Email Business",
        description: "Full-featured email",
        monthlyPrice: 2.99,
        yearlyPrice: 2.49,
        popular: true,
        features: [
            { name: "50 GB Mailbox", included: true },
            { name: "Custom Domain", included: true },
            { name: "Spam Protection", included: true },
            { name: "Mobile Sync", included: true },
            { name: "Email Forwarding", included: true },
            { name: "Shared Calendars", included: true },
        ],
        specs: {
            Storage: "50 GB",
            Attachments: "50 MB",
            Aliases: "Unlimited",
            IMAP: "Yes",
            POP3: "Yes",
            Webmail: "Yes",
        },
    },
];

export const domainPricing = {
    popular: [
        { tld: ".com", registerPrice: 9.99, renewPrice: 14.99 },
        { tld: ".net", registerPrice: 11.99, renewPrice: 16.99 },
        { tld: ".org", registerPrice: 11.99, renewPrice: 16.99 },
        { tld: ".io", registerPrice: 39.99, renewPrice: 49.99 },
        { tld: ".dev", registerPrice: 14.99, renewPrice: 17.99 },
    ],
    cheap: [
        { tld: ".xyz", registerPrice: 1.99, renewPrice: 12.99 },
        { tld: ".online", registerPrice: 0.99, renewPrice: 29.99 },
        { tld: ".site", registerPrice: 0.99, renewPrice: 24.99 },
        { tld: ".store", registerPrice: 1.99, renewPrice: 49.99 },
    ],
    business: [
        { tld: ".co", registerPrice: 24.99, renewPrice: 29.99 },
        { tld: ".biz", registerPrice: 12.99, renewPrice: 18.99 },
        { tld: ".company", registerPrice: 9.99, renewPrice: 14.99 },
    ],
};
