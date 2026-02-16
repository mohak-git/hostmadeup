import { FadeIn } from "@/components/visuals/fade-in";
import { SectionHeading } from "@/components/visuals/section-heading";
import { ServiceCard, type ServiceItem } from "./service-card";

interface ServicesProps {
    title: string;
    titleHighlight: string;
    description: string;
    services?: ServiceItem[];
}

const ServicesData: ServiceItem[] = [
    {
        title: "Web Hosting That Never Sleeps",
        imageUrl:
            "https://images.unsplash.com/photo-1515041219749-89347f83291a",
        highlights: [
            {
                prefix: "LiteSpeed-powered servers for",
                highlight: "10x faster load times",
                action: "underline",
            },
            { prefix: "Free SSL, daily backups & DDoS protection included" },
            { prefix: "Scales from a personal blog to millions of visitors" },
        ],
        cta: { label: "Explore Web Hosting", href: "/hosting/web" },
    },
    {
        title: "Full-Root VPS, Zero Compromise",
        imageUrl: "",
        highlights: [
            {
                prefix: "Up to",
                highlight: "8 vCPU cores & 32 GB RAM",
                suffix: "per instance",
            },
            { prefix: "Instant snapshots and one-click OS reinstalls" },
            { prefix: "Global data centers with sub-5 ms latency" },
        ],
        cta: { label: "Configure Your VPS", href: "/vps" },
    },
    {
        title: "Claim Your Corner of the Internet",
        imageUrl: "",
        highlights: [
            {
                prefix: "Industry-low pricing starting at",
                highlight: "$0.99/year",
                action: "circle",
            },
            { prefix: "Free WHOIS privacy on every domain" },
            { prefix: "Instant DNS propagation with Anycast network" },
        ],
        cta: { label: "Search Domains", href: "/domains" },
    },
    {
        title: "WordPress, Supercharged",
        imageUrl: "",
        highlights: [
            { prefix: "One-click WordPress install with staging environments" },
            { prefix: "LiteSpeed Cache & built-in CDN for peak performance" },
            { prefix: "Managed security patches and automatic updates" },
        ],
        cta: { label: "Launch WordPress", href: "/hosting/wordpress" },
    },
    {
        title: "Build Your Hosting Empire",
        imageUrl: "",
        highlights: [
            {
                highlight: "Unlimited",
                action: "box",
                suffix: "client accounts with custom branding",
            },
            { prefix: "WHMCS-ready with automated billing & provisioning" },
            { prefix: "Dedicated support team for your business" },
        ],
        cta: { label: "Start Reselling", href: "/hosting/reseller" },
    },
];

export function Services({
    title,
    titleHighlight,
    description,
    services = ServicesData,
}: ServicesProps) {
    return (
        <div className="container max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <FadeIn className="sticky top-0 sm:top-[15vh] pb-0.5">
                <SectionHeading
                    title={title}
                    highlight={titleHighlight}
                    description={description}
                />
            </FadeIn>

            {services.map((service, index) => (
                <div
                    key={service.title}
                    className="sticky top-[20vh] md:top-[35vh] lg:top-[38vh] flex items-center pb-8"
                >
                    <FadeIn delay={index * 60} className="w-full">
                        <ServiceCard
                            service={service}
                            isReversed={index % 2 !== 0}
                        />
                    </FadeIn>
                </div>
            ))}
        </div>
    );
}
