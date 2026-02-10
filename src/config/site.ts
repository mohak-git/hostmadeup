export const siteConfig = {
    name: "Hostmadeup",
    description:
        "Enterprise-grade web hosting, VPS, cloud servers, and domain registration. Built for developers who demand performance.",
    url: "https://hostmadeup.com",
    ogImage: "https://hostmadeup.com/og.png",
    links: {
        twitter: "https://twitter.com/hostmadeup",
        github: "https://github.com/hostmadeup",
    },
    contact: {
        email: "support@hostmadeup.com",
        phone: "+1 (555) 123-4567",
        address: "123 Data Center Way, San Francisco, CA 94102",
    },
    stats: {
        uptime: "99.99%",
        customers: "150,000+",
        datacenters: "12",
        support: "24/7/365",
    },
};

export type SiteConfig = typeof siteConfig;
