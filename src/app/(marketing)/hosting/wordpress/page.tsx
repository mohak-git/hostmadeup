import {
    FeatureCardGrid,
    FeatureGrid,
    PageHero,
    PricingTable,
    Section,
    SectionHeader,
    StatsBar,
} from "@/components/marketing";
import { coreFeatures } from "@/config/features";
import { wordpressHostingPlans } from "@/config/pricing";
import { wordpressFeatures, wordpressStats } from "@/constants/hosting";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "WordPress Hosting",
    description:
        "Optimized WordPress hosting with LiteSpeed cache, auto-updates, and staging environments. Starting at $2.49/mo.",
};

export default function WordPressHostingPage() {
    return (
        <>
            <PageHero
                title="WordPress, Supercharged"
                description="Purpose-built hosting optimized for WordPress. LiteSpeed cache, automatic updates, staging environments, and one-click installs."
            />

            <Section background="card">
                <StatsBar stats={wordpressStats} />
            </Section>

            <Section>
                <SectionHeader title="WordPress Plans" centered />
                <PricingTable plans={wordpressHostingPlans} />
            </Section>

            <Section>
                <SectionHeader title="WordPress Features" centered />
                <FeatureCardGrid features={wordpressFeatures} columns={3} />
            </Section>

            <Section>
                <SectionHeader title="Platform Features" centered />
                <FeatureGrid features={coreFeatures} columns={2} />
            </Section>
        </>
    );
}
