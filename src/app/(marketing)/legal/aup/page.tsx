import { PageHero, Section } from "@/components/marketing";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Acceptable Use Policy",
    description: "Guidelines for using Hostmadeup services responsibly.",
};

const prohibited = [
    "Distribution of malware, viruses, or malicious code",
    "Spam, phishing, or unsolicited bulk email",
    "Copyright infringement or piracy",
    "Hosting illegal content in any jurisdiction",
    "DDoS attacks or network abuse",
    "Cryptocurrency mining on shared hosting",
    "Port scanning or security probing without authorization",
    "Resource abuse that affects other customers",
];

const allowed = [
    "Standard web hosting and applications",
    "E-commerce and business websites",
    "Development and staging environments",
    "API services and microservices",
    "Email hosting and communication tools",
    "Content management and databases",
];

export default function AupPage() {
    return (
        <>
            <PageHero
                title="Acceptable Use Policy"
                description="Guidelines for using our services responsibly."
            />

            <Section>
                <div className="max-w-3xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="border border-border p-6">
                            <h2 className="font-bold text-lg mb-4 text-destructive">
                                Prohibited Activities
                            </h2>
                            <ul className="space-y-2">
                                {prohibited.map((item) => (
                                    <li
                                        key={item}
                                        className="text-sm text-muted-foreground flex items-start gap-2"
                                    >
                                        <span className="text-destructive">
                                            ✕
                                        </span>{" "}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="border border-border p-6">
                            <h2 className="font-bold text-lg mb-4 text-green-500">
                                Allowed Activities
                            </h2>
                            <ul className="space-y-2">
                                {allowed.map((item) => (
                                    <li
                                        key={item}
                                        className="text-sm text-muted-foreground flex items-start gap-2"
                                    >
                                        <span className="text-green-500">
                                            ✓
                                        </span>{" "}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            <Section background="card">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-bold text-lg mb-4">Enforcement</h2>
                    <p className="text-sm text-muted-foreground">
                        Violations may result in warnings, service suspension,
                        or account termination without refund. Severe violations
                        may be reported to law enforcement. We reserve the right
                        to determine what constitutes a violation of this
                        policy.
                    </p>
                </div>
            </Section>
        </>
    );
}
