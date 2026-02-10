import { PageHero, Section } from "@/components/marketing";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: `Privacy Policy for ${siteConfig.name}.`,
};

const sections = [
    {
        title: "Information We Collect",
        content:
            "We collect account information (name, email, billing address), usage data (service usage, logs), and technical data (IP address, browser type). We collect only what's necessary to provide and improve our services.",
    },
    {
        title: "How We Use Information",
        content:
            "We use your information to provide and maintain services, process payments, send service communications, improve our platform, and comply with legal obligations. We never sell your personal data.",
    },
    {
        title: "Data Sharing",
        content:
            "We share data with payment processors (Stripe), analytics providers (with anonymization), and law enforcement when legally required. We do not sell or rent your personal information to third parties.",
    },
    {
        title: "Data Security",
        content:
            "We implement industry-standard security measures including encryption at rest and in transit, regular security audits, access controls, and backup procedures. We promptly notify affected users of any security breaches.",
    },
    {
        title: "Your Rights",
        content:
            "You have the right to access, correct, or delete your personal data. You can export your data at any time. EU residents have additional rights under GDPR. Contact privacy@hostmadeup.com for requests.",
    },
    {
        title: "Cookies",
        content:
            "We use essential cookies for authentication and preferences. We use analytics cookies to understand usage patterns. You can disable non-essential cookies in your browser settings.",
    },
];

export default function PrivacyPage() {
    return (
        <>
            <PageHero
                badge="Legal"
                title="Privacy Policy"
                description="How we collect, use, and protect your personal information."
            />

            <Section>
                <div className="max-w-3xl mx-auto">
                    <p className="text-sm text-muted-foreground text-center mb-8">
                        Last updated: January 1, 2024
                    </p>
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
