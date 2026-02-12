import {
    FeatureCardGrid,
    FeatureGrid,
    PageHero,
    Section,
    SectionHeader,
    StatsBar
} from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { coreFeatures } from "@/config/features";
import { resellerFeatures, resellerStats } from "@/constants/hosting";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reseller Hosting",
    description:
        "White-label hosting solution for agencies and entrepreneurs. Start your own hosting business.",
};

const resellerPlans = [
    {
        name: "Starter",
        yearlyPrice: 15.99,
        specs: { storage: "60 GB", accounts: "25", bandwidth: "600 GB" },
    },
    {
        name: "Professional",
        yearlyPrice: 24.99,
        popular: true,
        specs: { storage: "140 GB", accounts: "100", bandwidth: "1.4 TB" },
    },
    {
        name: "Enterprise",
        yearlyPrice: 39.99,
        specs: {
            storage: "280 GB",
            accounts: "Unlimited",
            bandwidth: "2.8 TB",
        },
    },
];

export default function ResellerHostingPage() {
    return (
        <>
            <PageHero
                title="Start Your Hosting Business"
                description="White-label hosting platform for agencies, developers, and entrepreneurs. Your brand, our infrastructure."
            />

            <Section background="card">
                <StatsBar stats={resellerStats} />
            </Section>

            <Section>
                <SectionHeader title="Reseller Plans" centered />
                <div className="grid md:grid-cols-3 gap-0 border border-border">
                    {resellerPlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`border-r border-border last:border-r-0 p-6 ${plan.popular ? "bg-accent/30" : ""}`}
                        >
                            <h3 className="font-bold text-lg mb-2">
                                {plan.name}
                            </h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="font-mono text-4xl font-bold">
                                    ${plan.yearlyPrice}
                                </span>
                                <span className="text-muted-foreground">
                                    /mo
                                </span>
                            </div>
                            <Button
                                className="w-full mb-6"
                                variant={plan.popular ? "default" : "outline"}
                            >
                                Get Started
                            </Button>
                            <div className="space-y-2">
                                {Object.entries(plan.specs).map(
                                    ([key, value]) => (
                                        <div
                                            key={key}
                                            className="flex justify-between text-sm"
                                        >
                                            <span className="text-muted-foreground capitalize">
                                                {key}
                                            </span>
                                            <span className="font-mono">
                                                {value}
                                            </span>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader title="Reseller Features" centered />
                <FeatureCardGrid features={resellerFeatures} columns={3} />
            </Section>

            <Section>
                <SectionHeader title="Platform Features" centered />
                <FeatureGrid features={coreFeatures} columns={2} />
            </Section>
        </>
    );
}
