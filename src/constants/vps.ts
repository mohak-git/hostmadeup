export const vpsStats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "NVMe", label: "Storage" },
    { value: "Full", label: "Root Access" },
    { value: "<1 min", label: "Deploy Time" },
];

export const vpsOperatingSystems = [
    "Ubuntu 24.04",
    "Ubuntu 22.04",
    "Debian 12",
    "CentOS Stream 9",
    "Rocky Linux 9",
    "AlmaLinux 9",
    "Fedora 40",
    "Arch Linux",
    "openSUSE Leap",
    "Windows Server 2022",
    "Windows Server 2019",
    "Custom ISO",
];

export const vpsFeatures = [
    { title: "Instant Provisioning", desc: "Deploy in under 60 seconds." },
    { title: "Snapshot Backups", desc: "Point-in-time recovery." },
    { title: "DDoS Protection", desc: "10 Tbps+ mitigation." },
    { title: "IPv4 + IPv6", desc: "Dual-stack networking." },
    { title: "Console Access", desc: "VNC/KVM emergency access." },
    { title: "API Control", desc: "Full REST API." },
];

// N8N VPS Constants
export const n8nStats = [
    { value: "1-Click", label: "Deploy" },
    { value: "Auto", label: "Updates" },
    { value: "SSL", label: "Included" },
    { value: "24/7", label: "Uptime" },
];

export const n8nPlans = [
    {
        name: "Starter",
        price: 9.99,
        specs: {
            CPU: "2 vCPU",
            RAM: "4 GB",
            Storage: "50 GB NVMe",
            Workflows: "50+",
        },
    },
    {
        name: "Professional",
        price: 24.99,
        popular: true,
        specs: {
            CPU: "4 vCPU",
            RAM: "8 GB",
            Storage: "100 GB NVMe",
            Workflows: "200+",
        },
    },
    {
        name: "Enterprise",
        price: 49.99,
        specs: {
            CPU: "8 vCPU",
            RAM: "16 GB",
            Storage: "200 GB NVMe",
            Workflows: "Unlimited",
        },
    },
];

export const n8nFeatures = [
    { title: "Pre-installed N8N", desc: "Latest version configured." },
    { title: "PostgreSQL", desc: "Persistent database." },
    { title: "SSL Certificate", desc: "Auto-renewing SSL." },
    { title: "Custom Domain", desc: "Point your domain." },
    { title: "Auto Backups", desc: "7-day retention." },
    { title: "Auto Updates", desc: "Zero downtime updates." },
];
