import { PageHero, Section, SectionHeader } from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { whoisBenefits } from "@/constants/domains";
import { Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "WHOIS Privacy",
    description:
        "Protect your personal information with free WHOIS privacy protection.",
};

export default function WhoisPrivacyPage() {
    return (
        <>
            <PageHero
                badge="WHOIS Privacy"
                title="Protect Your Identity"
                description="Keep your personal information private with free WHOIS protection on all domains at Hostmadeup."
            />

            <Section>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <SectionHeader
                                badge="The Problem"
                                title="Without WHOIS Privacy"
                            />
                            <div className="border border-border p-6 bg-destructive/5">
                                <div className="font-mono text-sm space-y-2 text-muted-foreground">
                                    <p>
                                        Registrant Name:{" "}
                                        <span className="text-foreground">
                                            John Smith
                                        </span>
                                    </p>
                                    <p>
                                        Registrant Email:{" "}
                                        <span className="text-foreground">
                                            john@example.com
                                        </span>
                                    </p>
                                    <p>
                                        Registrant Phone:{" "}
                                        <span className="text-foreground">
                                            +1.5551234567
                                        </span>
                                    </p>
                                    <p>
                                        Registrant Address:{" "}
                                        <span className="text-foreground">
                                            123 Main St, San Francisco
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4 text-center">
                                Your personal info is publicly visible.
                            </p>
                        </div>
                        <div>
                            <SectionHeader
                                badge="The Solution"
                                title="With WHOIS Privacy"
                            />
                            <div className="border border-border p-6 bg-accent/30">
                                <div className="font-mono text-sm space-y-2 text-muted-foreground">
                                    <p>
                                        Registrant Name:{" "}
                                        <span className="text-foreground">
                                            Privacy Protection
                                        </span>
                                    </p>
                                    <p>
                                        Registrant Email:{" "}
                                        <span className="text-foreground">
                                            proxy@hostmadeup.com
                                        </span>
                                    </p>
                                    <p>
                                        Registrant Phone:{" "}
                                        <span className="text-foreground">
                                            [Protected]
                                        </span>
                                    </p>
                                    <p>
                                        Registrant Address:{" "}
                                        <span className="text-foreground">
                                            [Protected]
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4 text-center">
                                Your info is replaced with proxy details.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionHeader
                    badge="Benefits"
                    title="Why Use WHOIS Privacy"
                    centered
                />
                <div className="grid md:grid-cols-4 gap-0 border border-border">
                    {whoisBenefits.map((item) => (
                        <div
                            key={item.title}
                            className="border-r border-border last:border-r-0 p-6 text-center"
                        >
                            <Shield className="h-8 w-8 mb-4 mx-auto" />
                            <h3 className="font-bold mb-1">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            <section className="border-b border-border bg-accent/30">
                <div className="container mx-auto px-4 py-12 text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        Free on All Domains
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                        WHOIS privacy is included free with every domain at
                        Hostmadeup.
                    </p>
                    <Button size="lg">Search Domains</Button>
                </div>
            </section>
        </>
    );
}
