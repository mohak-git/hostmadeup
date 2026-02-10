export const emailStats = [
    { value: "99.9%", label: "Uptime" },
    { value: "50 GB", label: "Max Storage" },
    { value: "Anti-Spam", label: "Protection" },
    { value: "Mobile", label: "Sync" },
];

export const emailFeatures = [
    { title: "Custom Domain", desc: "Professional addresses." },
    { title: "Webmail", desc: "Access anywhere." },
    { title: "Mobile Sync", desc: "iOS and Android." },
    { title: "Spam Protection", desc: "Enterprise-grade." },
    { title: "Encryption", desc: "TLS for all mail." },
    { title: "Forwarding", desc: "External forwarding." },
];

export const emailSecurity = [
    { title: "SPF", desc: "Sender Policy Framework" },
    { title: "DKIM", desc: "DomainKeys Identified Mail" },
    { title: "DMARC", desc: "Domain-based Message Auth" },
    { title: "2FA", desc: "Two-Factor Authentication" },
];

// Google Workspace Constants
export const workspaceStats = [
    { value: "Google", label: "Powered By" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Support" },
    { value: "Official", label: "Reseller" },
];

export const workspacePlans = [
    {
        name: "Business Starter",
        price: 6,
        storage: "30 GB",
        features: [
            "Custom email",
            "100-person meetings",
            "30 GB storage",
            "Security controls",
        ],
    },
    {
        name: "Business Standard",
        price: 12,
        storage: "2 TB",
        popular: true,
        features: [
            "Everything in Starter",
            "150-person meetings",
            "2 TB storage",
            "Recording",
        ],
    },
    {
        name: "Business Plus",
        price: 18,
        storage: "5 TB",
        features: [
            "Everything in Standard",
            "500-person meetings",
            "5 TB storage",
            "eDiscovery",
        ],
    },
];

export const workspaceApps = [
    "Gmail",
    "Drive",
    "Docs",
    "Sheets",
    "Slides",
    "Meet",
    "Calendar",
    "Chat",
    "Forms",
    "Sites",
    "Keep",
    "Currents",
];

export const workspaceBenefits = [
    { title: "Unified Billing", desc: "Manage all in one place." },
    { title: "Free Migration", desc: "We migrate your email." },
    { title: "Expert Setup", desc: "DNS and security configured." },
];
