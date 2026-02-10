export const supportCategories = [
    {
        title: "Getting Started",
        articles: [
            "Creating your first website",
            "Setting up DNS",
            "Connecting a domain",
        ],
        href: "/support/getting-started",
    },
    {
        title: "Hosting",
        articles: [
            "Uploading files via FTP",
            "Database management",
            "PHP configuration",
        ],
        href: "/support/hosting",
    },
    {
        title: "Domains",
        articles: ["Domain registration", "DNS management", "Domain transfer"],
        href: "/support/domains",
    },
    {
        title: "Email",
        articles: [
            "Setting up email client",
            "Spam filtering",
            "Email forwarding",
        ],
        href: "/support/email",
    },
    {
        title: "VPS",
        articles: ["SSH access", "Firewall configuration", "Snapshot backups"],
        href: "/support/vps",
    },
    {
        title: "Billing",
        articles: ["Payment methods", "Invoices", "Refund requests"],
        href: "/support/billing",
    },
];

export const contactOptions = [
    {
        title: "Live Chat",
        desc: "Instant help",
        cta: "Start Chat",
        available: "24/7",
    },
    {
        title: "Email Support",
        desc: "Detailed message",
        cta: "Send Email",
        available: "<4 hour",
    },
    {
        title: "Phone Support",
        desc: "Talk to specialist",
        cta: "Call Now",
        available: "Business Hours",
    },
];

export const contactDepartments = [
    {
        title: "Sales",
        email: "sales@hostmadeup.com",
        desc: "Plans and pricing",
    },
    {
        title: "Technical Support",
        email: "support@hostmadeup.com",
        desc: "Existing services",
    },
    {
        title: "Abuse Reports",
        email: "abuse@hostmadeup.com",
        desc: "Report violations",
    },
];

export const statusServices = [
    { name: "Web Hosting", status: "operational" as const },
    { name: "VPS Servers", status: "operational" as const },
    { name: "Cloud Hosting", status: "operational" as const },
    { name: "Domain Services", status: "operational" as const },
    { name: "Email Services", status: "operational" as const },
    { name: "Control Panel", status: "operational" as const },
    { name: "API", status: "operational" as const },
    { name: "Billing System", status: "operational" as const },
];

export const statusDatacenters = [
    { name: "San Francisco (SFO)", status: "operational" as const },
    { name: "New York (NYC)", status: "operational" as const },
    { name: "London (LON)", status: "operational" as const },
    { name: "Frankfurt (FRA)", status: "operational" as const },
    { name: "Singapore (SGP)", status: "operational" as const },
    { name: "Tokyo (TYO)", status: "operational" as const },
];

export const uptimeStats = [
    { value: "100%", label: "Last 24 Hours" },
    { value: "99.99%", label: "Last 7 Days" },
    { value: "99.98%", label: "Last 30 Days" },
    { value: "99.99%", label: "Last 90 Days" },
];

export const blogPosts = [
    {
        slug: "introducing-nodejs-hosting",
        title: "Introducing Node.js Hosting",
        excerpt: "Deploy with zero configuration.",
        date: "2024-01-15",
        category: "Product",
    },
    {
        slug: "new-datacenter-tokyo",
        title: "New Data Center in Tokyo",
        excerpt: "Our 12th data center.",
        date: "2024-01-10",
        category: "Infrastructure",
    },
    {
        slug: "wordpress-litespeed-performance",
        title: "10x WordPress Performance",
        excerpt: "LiteSpeed integration.",
        date: "2024-01-05",
        category: "Tutorial",
    },
    {
        slug: "security-best-practices-2024",
        title: "Security Best Practices 2024",
        excerpt: "Essential security measures.",
        date: "2024-01-02",
        category: "Security",
    },
    {
        slug: "vps-scaling-guide",
        title: "Complete VPS Scaling Guide",
        excerpt: "Scale resources effectively.",
        date: "2023-12-28",
        category: "Tutorial",
    },
    {
        slug: "year-in-review-2023",
        title: "2023 Year in Review",
        excerpt: "Achievements and growth.",
        date: "2023-12-20",
        category: "Company",
    },
];

export const blogCategories = [
    "All",
    "Product",
    "Tutorial",
    "Infrastructure",
    "Security",
    "Company",
];
