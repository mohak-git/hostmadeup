export interface NavItem {
    title: string;
    href?: string;
    description?: string;
    children?: NavItem[];
    badge?: string;
    external?: boolean;
}

export const mainNav: NavItem[] = [
    {
        title: "Hosting",
        children: [
            {
                title: "Web Hosting",
                href: "/hosting/web",
                description: "Reliable shared hosting for websites and blogs",
            },
            {
                title: "WordPress Hosting",
                href: "/hosting/wordpress",
                description: "Optimized hosting for WordPress sites",
            },
            {
                title: "Cloud Hosting",
                href: "/hosting/cloud",
                description: "Scalable cloud infrastructure on demand",
            },
            {
                title: "Node.js Hosting",
                href: "/hosting/nodejs",
                description: "Deploy Node.js apps with zero config",
                badge: "New",
            },
            {
                title: "Reseller Hosting",
                href: "/hosting/reseller",
                description: "White-label hosting for agencies",
            },
        ],
    },
    {
        title: "VPS",
        children: [
            {
                title: "VPS Hosting",
                href: "/vps",
                description: "Full root access virtual servers",
            },
            {
                title: "N8N VPS",
                href: "/vps/n8n",
                description: "Pre-configured N8N automation servers",
                badge: "Popular",
            },
        ],
    },
    {
        title: "Domains",
        children: [
            {
                title: "Domain Search",
                href: "/domains",
                description: "Find your perfect domain name",
            },
            {
                title: "Domain Transfer",
                href: "/domains/transfer",
                description: "Move your domains to Hostmadeup",
            },
            {
                title: "WHOIS Privacy",
                href: "/domains/whois-privacy",
                description: "Protect your personal information",
            },
        ],
    },
    {
        title: "Email",
        children: [
            {
                title: "Business Email",
                href: "/email",
                description: "Professional email for your domain",
            },
            {
                title: "Google Workspace",
                href: "/email/google-workspace",
                description: "Gmail, Drive, and more for teams",
            },
        ],
    },
    { title: "Support", href: "/support" },
];

export const footerNav = {
    hosting: [
        { title: "Web Hosting", href: "/hosting/web" },
        { title: "WordPress Hosting", href: "/hosting/wordpress" },
        { title: "Cloud Hosting", href: "/hosting/cloud" },
        { title: "Node.js Hosting", href: "/hosting/nodejs" },
        { title: "Reseller Hosting", href: "/hosting/reseller" },
    ],
    vps: [
        { title: "VPS Hosting", href: "/vps" },
        { title: "N8N VPS", href: "/vps/n8n" },
    ],
    domains: [
        { title: "Domain Search", href: "/domains" },
        { title: "Domain Transfer", href: "/domains/transfer" },
        { title: "WHOIS Privacy", href: "/domains/whois-privacy" },
    ],
    email: [
        { title: "Business Email", href: "/email" },
        { title: "Google Workspace", href: "/email/google-workspace" },
    ],
    company: [
        { title: "About Us", href: "/about" },
        { title: "Blog", href: "/blog" },
        { title: "Contact", href: "/contact" },
        { title: "System Status", href: "/status" },
    ],
    legal: [
        { title: "Terms of Service", href: "/legal/terms" },
        { title: "Privacy Policy", href: "/legal/privacy" },
        { title: "AUP", href: "/legal/aup" },
        { title: "SLA", href: "/legal/sla" },
    ],
};
