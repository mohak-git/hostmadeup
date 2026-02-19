"use client";

import { BillingToggle, PlanCard } from "@/components/marketing";
import { FadeIn } from "@/components/visuals/fade-in";
import { SectionHeading } from "@/components/visuals/section-heading";
import { webHostingPlans, type Plan } from "@/config/pricing";
import { Check } from "lucide-react";
import { Fragment, useState } from "react";

interface PricingProps {
    title?: string;
    titleHighlight?: string;
    description?: string;
    plans?: Plan[];
}

export function Pricing({
    title = "Simple, Transparent",
    titleHighlight = "Pricing",
    description = "No hidden fees. No long-term contracts.",
    plans = webHostingPlans,
}: PricingProps) {
    const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

    return (
        <div className="container max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <FadeIn>
                <SectionHeading
                    title={title}
                    highlight={titleHighlight}
                    description={description}
                />
            </FadeIn>

            <BillingToggle billing={billing} setBilling={setBilling} />

            <div className="grid gap-6 items-stretch md:grid-cols-3">
                {plans.map((plan, i) => (
                    <PlanCard
                        key={plan.id}
                        plan={plan}
                        billing={billing}
                        index={i}
                    />
                ))}
            </div>

            <TrustBar
                points={[
                    "30-day money-back guarantee",
                    "No setup fees",
                    "Cancel anytime",
                ]}
            />
        </div>
    );
}

function TrustBar({ points }: { points: string[] }) {
    return (
        <FadeIn delay={200}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
                {points.map((point, i) => (
                    <Fragment key={i}>
                        <span className="flex items-center gap-2 bg-secondary text-white px-12 py-2 [clip-path:polygon(0%_0%,100%_0%,95%_50%,100%_100%,0%_100%,5%_50%)]">
                            <Check className="w-3 h-3" />
                            {point}
                        </span>
                        {i < points.length - 1 && (
                            <span className="hidden sm:block border-l-2 border-secondary h-4" />
                        )}
                    </Fragment>
                ))}
            </div>
        </FadeIn>
    );
}
