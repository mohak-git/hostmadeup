import {
    DatacenterGrid,
    FeatureCardGrid,
    FeatureGrid,
    PageHero,
    PricingTable,
    Section,
    SectionHeader,
    StatsBar,
} from "@/components/marketing";
import { coreFeatures } from "@/config/features";
import { cloudHostingPlans } from "@/config/pricing";
import { cloudFeatures, cloudStats } from "@/constants/hosting";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cloud Hosting",
    description:
        "Scalable cloud infrastructure with dedicated resources. Auto-scaling, full root access, and 99.99% uptime starting at $9.99/mo.",
};

export default function CloudHostingPage() {
    return (
        <>
            <PageHero
                badge="Cloud Hosting"
                title="Scalable Cloud Infrastructure"
                description="Dedicated CPU, RAM, and NVMe storage with automatic scaling. Perfect for apps that need consistent performance."
            />

            <Section background="card">
                <StatsBar stats={cloudStats} />
            </Section>

            <Section>
                <SectionHeader badge="Plans" title="Cloud Plans" centered />
                <PricingTable plans={cloudHostingPlans} />
            </Section>

            <Section>
                <SectionHeader
                    badge="Features"
                    title="Cloud Features"
                    centered
                />
                <FeatureCardGrid features={cloudFeatures} columns={3} />
            </Section>

            <Section>
                <SectionHeader
                    badge="Regions"
                    title="Global Data Centers"
                    centered
                />
                <DatacenterGrid showLatency />
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
