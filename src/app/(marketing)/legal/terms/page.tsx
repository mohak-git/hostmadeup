import { PageHero, Section } from "@/components/marketing";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: `Terms of Service for ${siteConfig.name}.`,
};

const sections = [
    {
        title: "Account Terms",
        content:
            "You must be 18 years or older. You must provide accurate information. You are responsible for maintaining account security. One person or entity per account unless otherwise agreed.",
    },
    {
        title: "Payment Terms",
        content:
            "Services are billed in advance on a monthly or yearly basis. Refunds are available within 30 days of initial signup for shared hosting plans. VPS and dedicated servers are non-refundable after provisioning.",
    },
    {
        title: "Acceptable Use",
        content:
            "You may not use our services for illegal activities, spam, malware distribution, or activities that harm our network or other customers. We reserve the right to suspend accounts that violate this policy.",
    },
    {
        title: "Service Level",
        content:
            "We guarantee 99.9% uptime for shared hosting and 99.99% for VPS and cloud services. Downtime is calculated monthly. Account credits are issued for SLA breaches upon request.",
    },
    {
        title: "Data & Privacy",
        content:
            "We handle your data in accordance with our Privacy Policy. We maintain backups but recommend you maintain your own. We will not share your data with third parties except as required by law.",
    },
    {
        title: "Termination",
        content:
            "Either party may terminate with 30 days notice. We may terminate immediately for policy violations. Upon termination, your data will be retained for 30 days before permanent deletion.",
    },
];

export default function TermsPage() {
    return (
        <>
            <PageHero
                title="Terms of Service"
                description="Please read these terms carefully before using our services."
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
