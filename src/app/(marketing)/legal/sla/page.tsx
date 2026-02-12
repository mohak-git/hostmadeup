import { PageHero, Section, StatsBar } from "@/components/marketing";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Level Agreement",
    description: `SLA and uptime guarantee for ${siteConfig.name}.`,
};

const slaStats = [
    { value: "99.9%", label: "Shared Hosting" },
    { value: "99.99%", label: "VPS & Cloud" },
    { value: "<15 min", label: "Response Time" },
    { value: "100%", label: "Credit for Downtime" },
];

const sections = [
    {
        title: "Uptime Commitment",
        content:
            "We guarantee 99.9% uptime for shared hosting and 99.99% for VPS and cloud services. Uptime is measured monthly, excluding scheduled maintenance windows which are announced 48 hours in advance.",
    },
    {
        title: "Compensation",
        content:
            "If we fail to meet our uptime guarantee, you're entitled to service credits. 99.0-99.9%: 10% credit. 98.0-99.0%: 25% credit. 95.0-98.0%: 50% credit. Below 95.0%: 100% credit. Credits are applied to your next billing cycle.",
    },
    {
        title: "Response Times",
        content:
            "Critical issues: 15 minutes. High priority: 1 hour. Normal priority: 4 hours. Low priority: 24 hours. Response time measured from ticket submission to first human response.",
    },
    {
        title: "Exclusions",
        content:
            "This SLA does not cover: scheduled maintenance, customer-caused issues, third-party service failures, force majeure events, or issues outside our network infrastructure.",
    },
];

export default function SlaPage() {
    return (
        <>
            <PageHero
                title="Service Level Agreement"
                description="Our commitment to uptime, performance, and support response times."
            />

            <Section background="card">
                <StatsBar stats={slaStats} variant="green" />
            </Section>

            <Section>
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        {sections.map((s, i) => (
                            <div
                                key={s.title}
                                className="border border-border p-6"
                            >
                                <h2 className="font-bold text-lg mb-3">
                                    {i + 1}. {s.title}
                                </h2>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {s.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
