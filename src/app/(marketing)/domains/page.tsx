import {
    DomainSearch,
    PageHero,
    Section,
    SectionHeader,
    SimpleCardGrid,
} from "@/components/marketing";
import { domainPricing } from "@/config/pricing";
import { domainFeatures } from "@/constants/domains";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Domain Search",
    description:
        "Find and register your perfect domain name. 500+ TLDs available starting at $0.99.",
};

export default function DomainsPage() {
    return (
        <>
            <PageHero
                badge="Domains"
                title="Find Your Perfect Domain"
                description="Search over 500 domain extensions and register your brand in seconds. Free WHOIS privacy on all domains."
            />

            <Section>
                <div className="max-w-2xl mx-auto">
                    <DomainSearch />
                </div>
            </Section>

            <Section>
                <SectionHeader
                    badge="Pricing"
                    title="Domain Pricing"
                    centered
                />
                <div className="space-y-8">
                    <div>
                        <h3 className="text-sm font-medium mb-4 text-center">
                            Popular Domains
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border border-border">
                            {domainPricing.popular.map((tld) => (
                                <div
                                    key={tld.tld}
                                    className="border-r border-border last:border-r-0 p-4 text-center"
                                >
                                    <div className="font-mono font-bold text-lg">
                                        {tld.tld}
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-muted-foreground">
                                            Register:
                                        </span>{" "}
                                        <span className="font-mono">
                                            ${tld.registerPrice}
                                        </span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-muted-foreground">
                                            Renew:
                                        </span>{" "}
                                        <span className="font-mono">
                                            ${tld.renewPrice}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium mb-4 text-center">
                            Budget-Friendly
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border">
                            {domainPricing.cheap.map((tld) => (
                                <div
                                    key={tld.tld}
                                    className="border-r border-border last:border-r-0 p-4 text-center"
                                >
                                    <div className="font-mono font-bold text-lg">
                                        {tld.tld}
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-muted-foreground">
                                            Register:
                                        </span>{" "}
                                        <span className="font-mono">
                                            ${tld.registerPrice}
                                        </span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-muted-foreground">
                                            Renew:
                                        </span>{" "}
                                        <span className="font-mono">
                                            ${tld.renewPrice}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionHeader
                    badge="Included"
                    title="What's Included"
                    centered
                />
                <SimpleCardGrid items={domainFeatures} columns={4} centered />
            </Section>
        </>
    );
}
