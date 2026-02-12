import {
    FeatureCardGrid,
    PageHero,
    PricingTable,
    Section,
    SectionHeader,
    StatsBar,
} from "@/components/marketing";
import { emailPlans } from "@/config/pricing";
import { emailFeatures, emailSecurity, emailStats } from "@/constants/email";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Business Email",
    description:
        "Professional email hosting for your domain. Starting at $0.99/mo.",
};

export default function EmailPage() {
    return (
        <>
            <PageHero
                title="Professional Email Hosting"
                description="Custom email addresses for your domain with enterprise-grade security, spam protection, and mobile sync."
            />

            <Section background="card">
                <StatsBar stats={emailStats} />
            </Section>

            <Section>
                <SectionHeader title="Email Plans" centered />
                <PricingTable plans={emailPlans} />
            </Section>

            <Section>
                <SectionHeader title="Email Features" centered />
                <FeatureCardGrid features={emailFeatures} columns={3} />
            </Section>

            <Section background="card">
                <SectionHeader title="Email Security" centered />
                <div className="grid md:grid-cols-4 gap-0 border border-border">
                    {emailSecurity.map((item) => (
                        <div
                            key={item.title}
                            className="border-r border-border last:border-r-0 p-6 text-center bg-background"
                        >
                            <h3 className="font-mono font-bold text-lg">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
