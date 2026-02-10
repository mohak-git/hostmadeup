import {
    PageHero,
    Section,
    SectionHeader,
    SimpleCardGrid,
    StatsBar,
    TagGrid,
} from "@/components/marketing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    workspaceApps,
    workspaceBenefits,
    workspacePlans,
    workspaceStats,
} from "@/constants/email";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Google Workspace",
    description:
        "Gmail, Drive, Docs, and more for your business. Official Google Workspace reseller.",
};

export default function GoogleWorkspacePage() {
    return (
        <>
            <PageHero
                badge="Google Workspace"
                title="Gmail, Drive & More for Business"
                description="Get custom email, cloud storage, and collaboration tools powered by Google. We're an official Google Workspace reseller."
            />

            <Section background="card">
                <StatsBar stats={workspaceStats} />
            </Section>

            <Section>
                <SectionHeader
                    badge="Plans"
                    title="Google Workspace Plans"
                    centered
                />
                <div className="grid md:grid-cols-3 gap-0 border border-border">
                    {workspacePlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`border-r border-border last:border-r-0 p-6 ${plan.popular ? "bg-accent/30" : ""}`}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-bold text-lg">
                                    {plan.name}
                                </h3>
                                {plan.popular && (
                                    <Badge
                                        variant="default"
                                        className="text-[10px]"
                                    >
                                        Popular
                                    </Badge>
                                )}
                            </div>
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="font-mono text-4xl font-bold">
                                    ${plan.price}
                                </span>
                                <span className="text-muted-foreground">
                                    /user/mo
                                </span>
                            </div>
                            <div className="font-mono text-sm text-muted-foreground mb-4">
                                {plan.storage} storage
                            </div>
                            <Button
                                className="w-full mb-6"
                                variant={plan.popular ? "default" : "outline"}
                            >
                                Get Started
                            </Button>
                            <ul className="space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="text-sm text-muted-foreground"
                                    >
                                        • {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader
                    badge="Included"
                    title="Apps Included"
                    centered
                />
                <TagGrid items={workspaceApps} columns={6} />
            </Section>

            <Section background="card">
                <SectionHeader
                    badge="Benefits"
                    title="Why Buy Through Hostmadeup"
                    centered
                />
                <SimpleCardGrid
                    items={workspaceBenefits}
                    columns={3}
                    background="background"
                />
            </Section>
        </>
    );
}
