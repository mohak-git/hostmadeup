import {
    FeatureCardGrid,
    FeatureGrid,
    PageHero,
    Section,
    SectionHeader,
    StatsBar,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { coreFeatures } from "@/config/features";
import { n8nFeatures, n8nPlans, n8nStats } from "@/constants/vps";
import { ArrowRight, Workflow } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "N8N VPS Hosting",
    description:
        "Pre-configured N8N automation servers. Deploy your workflow automation platform in one click.",
};

export default function N8nVpsPage() {
    return (
        <>
            <PageHero
                badge="N8N VPS"
                title="N8N Automation Hosting"
                description="Pre-configured virtual servers optimized for N8N workflow automation. One-click deployment with automatic updates."
            />

            <Section background="card">
                <StatsBar stats={n8nStats} />
            </Section>

            <Section>
                <SectionHeader
                    badge="Pre-configured"
                    title="N8N VPS Packages"
                    centered
                />
                <div className="grid md:grid-cols-3 gap-0 border border-border">
                    {n8nPlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`border-r border-border last:border-r-0 p-6 ${plan.popular ? "bg-accent/30" : ""}`}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Workflow className="h-5 w-5" />
                                <h3 className="font-bold text-lg">
                                    {plan.name}
                                </h3>
                            </div>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="font-mono text-4xl font-bold">
                                    ${plan.price}
                                </span>
                                <span className="text-muted-foreground">
                                    /mo
                                </span>
                            </div>
                            <Button
                                className="w-full mb-6"
                                variant={plan.popular ? "default" : "outline"}
                            >
                                Deploy N8N
                            </Button>
                            <div className="space-y-2 pt-4 border-t border-border">
                                {Object.entries(plan.specs).map(
                                    ([key, value]) => (
                                        <div
                                            key={key}
                                            className="flex justify-between text-sm"
                                        >
                                            <span className="text-muted-foreground">
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
                <SectionHeader badge="Included" title="What You Get" centered />
                <FeatureCardGrid features={n8nFeatures} columns={3} />
            </Section>

            <section className="border-b border-border bg-accent/30">
                <div className="container mx-auto px-4 py-12 text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        Automate Everything
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                        Connect 400+ apps and build powerful workflows without
                        code.
                    </p>
                    <Button asChild size="lg" className="gap-2">
                        <Link href="/vps">
                            Deploy N8N Now <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>

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
