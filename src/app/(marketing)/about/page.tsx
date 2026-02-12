import {
    DatacenterGrid,
    FeatureGrid,
    PageHero,
    Section,
    SectionHeader,
    SimpleCardGrid,
    StatsBar,
} from "@/components/marketing";
import { coreFeatures } from "@/config/features";
import { siteConfig } from "@/config/site";
import { companyStory, companyValues } from "@/constants/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: `Learn about ${siteConfig.name} and our mission to provide the best hosting experience.`,
};

const aboutStats = [
    { value: "150K+", label: "Customers" },
    { value: "12", label: "Data Centers" },
    { value: "99.99%", label: "Uptime" },
    { value: "2018", label: "Founded" },
];

export default function AboutPage() {
    return (
        <>
            <PageHero
                title="Built by Engineers, for Engineers"
                description="We're infrastructure engineers who got frustrated with overselling and poor support. So we built something better."
            />

            <Section background="card">
                <StatsBar stats={aboutStats} variant="green" />
            </Section>

            <Section>
                <SectionHeader title="Why We Built Hostmadeup" centered />
                <div className="max-w-3xl mx-auto space-y-4 text-center text-muted-foreground">
                    {companyStory.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader title="What We Stand For" centered />
                <SimpleCardGrid items={companyValues} columns={3} centered />
            </Section>

            <Section>
                <SectionHeader title="Data Center Locations" centered />
                <DatacenterGrid showLatency />
            </Section>

            <Section>
                <SectionHeader title="Platform Features" centered />
                <FeatureGrid features={coreFeatures} columns={2} />
            </Section>
        </>
    );
}
