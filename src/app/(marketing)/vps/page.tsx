import {
    DatacenterGrid,
    FeatureCardGrid,
    FeatureGrid,
    PageHero,
    PricingTable,
    Section,
    SectionHeader,
    StatsBar,
    TagGrid,
    VpsCalculator,
} from "@/components/marketing";
import { coreFeatures } from "@/config/features";
import { vpsPlans } from "@/config/pricing";
import { vpsFeatures, vpsOperatingSystems, vpsStats } from "@/constants/vps";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "VPS Hosting",
    description:
        "Full root access virtual private servers with NVMe storage. Starting at $4.99/mo.",
};

export default function VpsPage() {
    return (
        <>
            <PageHero
                badge="VPS Hosting"
                title="Virtual Private Servers"
                description="Full root access, dedicated resources, and complete control. Deploy any OS, run any software, scale as needed."
            />

            <Section background="card">
                <StatsBar stats={vpsStats} />
            </Section>

            <Section>
                <SectionHeader
                    badge="Configure"
                    title="Custom VPS Configuration"
                    centered
                />
                <div className="max-w-2xl mx-auto">
                    <VpsCalculator />
                </div>
            </Section>

            <Section>
                <SectionHeader
                    badge="Standard Plans"
                    title="Pre-configured VPS Plans"
                    centered
                />
                <PricingTable plans={vpsPlans.slice(0, 3)} />
            </Section>

            <Section>
                <SectionHeader
                    badge="Operating Systems"
                    title="Choose Your OS"
                    centered
                />
                <TagGrid items={vpsOperatingSystems} columns={6} />
            </Section>

            <Section>
                <SectionHeader badge="Features" title="VPS Features" centered />
                <FeatureCardGrid features={vpsFeatures} columns={3} />
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
