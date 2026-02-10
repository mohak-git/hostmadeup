import {
    FeatureCardGrid,
    FeatureGrid,
    PageHero,
    PricingTable,
    Section,
    SectionHeader,
    StatsBar,
    TechBlock,
} from "@/components/marketing";
import { coreFeatures, techStack } from "@/config/features";
import { webHostingPlans } from "@/config/pricing";
import {
    webHostingFeatures,
    webHostingStats,
    webHostingUseCases,
} from "@/constants/hosting";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Hosting",
    description:
        "Fast, reliable shared hosting for websites and blogs. NVMe storage, free SSL, and 24/7 support starting at $1.99/mo.",
};

export default function WebHostingPage() {
    return (
        <>
            <PageHero
                badge="Web Hosting"
                title="Reliable Hosting for Every Website"
                description="Deploy static sites, PHP apps, and dynamic content on our optimized shared hosting platform."
            />

            <Section background="card">
                <StatsBar stats={webHostingStats} />
            </Section>

            <Section>
                <SectionHeader
                    badge="Plans"
                    title="Choose Your Plan"
                    centered
                />
                <PricingTable plans={webHostingPlans} />
            </Section>

            <Section>
                <SectionHeader
                    badge="Features"
                    title="What's Included"
                    centered
                />
                <FeatureCardGrid features={webHostingFeatures} columns={3} />
            </Section>

            <Section>
                <SectionHeader
                    badge="Stack"
                    title="Supported Technologies"
                    centered
                />
                <div className="grid md:grid-cols-3 gap-6">
                    <TechBlock title="PHP Versions" items={techStack.php} />
                    <TechBlock title="Databases" items={techStack.databases} />
                    <TechBlock title="Caching" items={techStack.caching} />
                </div>
            </Section>

            <Section background="card">
                <SectionHeader badge="Use Cases" title="Perfect For" centered />
                <div className="grid md:grid-cols-4 gap-0 border border-border">
                    {webHostingUseCases.map((item) => (
                        <div
                            key={item.title}
                            className="border-r border-border last:border-r-0 p-6 bg-background text-center"
                        >
                            <h3 className="font-bold mb-1">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader
                    badge="Infrastructure"
                    title="Platform Features"
                    centered
                />
                <FeatureGrid features={coreFeatures} columns={2} />
            </Section>
        </>
    );
}
