import { BillingType } from "@/components/marketing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/visuals/fade-in";
import { type Plan } from "@/config/pricing";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle, CircleX } from "lucide-react";
import Link from "next/link";

interface PlanCardProps {
    plan: Plan;
    billing: BillingType;
    index: number;
}

export function PlanCard({ plan, billing, index }: PlanCardProps) {
    const price = billing === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
    const specEntries = Object.entries(plan.specs);
    const featured = plan.popular;

    return (
        <FadeIn delay={index * 80}>
            <div
                className={cn(
                    "relative flex flex-col h-full transition-all duration-300 border hover:shadow-lg",
                    featured
                        ? "bg-brand-500/10 border-brand-500 scale-102 z-2 backdrop-blur-3xl"
                        : "bg-card border-border hover:border-brand-500/30 ",
                )}
            >
                {featured && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-background text-xs font-semibold px-4 py-1 border-0 shadow-lg">
                        Most Popular
                    </Badge>
                )}

                <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                        <h3 className="font-semibold text-lg tracking-tight text-foreground">
                            {plan.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {plan.description}
                        </p>
                    </div>

                    {/* Price */}
                    <div className="mb-5 flex justify-between items-baseline">
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-foreground">
                                ₹{price}
                            </span>
                            <span className="text-sm text-muted-foreground">
                                /mo
                            </span>
                        </div>
                        {billing === "yearly" && (
                            <span className="mt-1 text-xs text-brand-600 bg-brand-50 px-2 py-1 rounded-md w-fit">
                                ₹{(price * 12).toFixed(0)} billed annually
                            </span>
                        )}
                    </div>

                    {/* CTA */}
                    <Button
                        asChild
                        className={cn(
                            "group w-full h-12 rounded-sm text-sm mb-6 transition-all duration-500",
                            featured
                                ? "bg-brand-500 hover:bg-brand-600 shadow-md"
                                : "border border-border hover:border-brand-500 hover:text-brand-600",
                        )}
                        variant={featured ? "default" : "outline"}
                    >
                        <Link href="/hosting/web">
                            Get Started
                            <ArrowRight className="transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-45" />
                        </Link>
                    </Button>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                        {plan.features.map((feature) => (
                            <li
                                key={feature.name}
                                className="flex items-center gap-2"
                            >
                                {feature.included ? (
                                    <>
                                        <CheckCircle className="w-4 h-4  text-brand-600" />
                                        <span className="text-sm text-foreground">
                                            {feature.name}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <CircleX className="w-4 h-4 text-muted-foreground/60" />
                                        <span className="text-sm text-muted-foreground/60">
                                            {feature.name}
                                        </span>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-4 pt-5 border-t border-border">
                        {specEntries.slice(0, 6).map(([key, value]) => (
                            <div key={key} className="text-center ">
                                <div className="text-sm font-semibold text-foreground">
                                    {value}
                                </div>
                                <div className="text-xs uppercase tracking-wider text-muted-foreground/60">
                                    {key}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}
