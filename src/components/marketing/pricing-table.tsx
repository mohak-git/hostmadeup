"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Plan } from "@/config/pricing";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import * as React from "react";

interface PricingTableProps {
    plans: Plan[];
    className?: string;
}

export function PricingTable({ plans, className }: PricingTableProps) {
    const [billing, setBilling] = React.useState<"monthly" | "yearly">(
        "yearly",
    );

    return (
        <div className={cn("", className)}>
            {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
                <Tabs
                    value={billing}
                    onValueChange={(v) => setBilling(v as "monthly" | "yearly")}
                >
                    <TabsList className="border border-border">
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        <TabsTrigger value="yearly">
                            Yearly
                            <Badge
                                variant="secondary"
                                className="ml-2 text-[10px]"
                            >
                                Save 33%
                            </Badge>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-3 gap-0 border border-border">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={cn(
                            "border-r border-b border-border last:border-r-0 p-6 flex flex-col",
                            plan.popular && "bg-accent/30",
                        )}
                    >
                        {/* Header */}
                        <div className="mb-6">
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
                            <p className="text-sm text-muted-foreground">
                                {plan.description}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <div className="flex items-baseline gap-1">
                                <span className="font-mono text-4xl font-bold tabular-nums">
                                    $
                                    {billing === "yearly"
                                        ? plan.yearlyPrice
                                        : plan.monthlyPrice}
                                </span>
                                <span className="text-muted-foreground">
                                    /mo
                                </span>
                            </div>
                            {billing === "yearly" && (
                                <p className="text-xs text-muted-foreground mt-1">
                                    Billed annually
                                </p>
                            )}
                        </div>

                        {/* CTA */}
                        <Button
                            className="w-full mb-6"
                            variant={plan.popular ? "default" : "outline"}
                        >
                            Get Started
                        </Button>

                        {/* Features */}
                        <div className="flex-1">
                            <ul className="space-y-3">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature.name}
                                        className="flex items-start gap-2"
                                    >
                                        {feature.included ? (
                                            <Check className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                                        ) : (
                                            <X className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                                        )}
                                        <span
                                            className={cn(
                                                "text-sm",
                                                !feature.included &&
                                                    "text-muted-foreground",
                                            )}
                                        >
                                            {feature.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Specs */}
                        <div className="mt-6 pt-6 border-t border-border">
                            <div className="grid grid-cols-2 gap-3">
                                {Object.entries(plan.specs).map(
                                    ([key, value]) => (
                                        <div key={key}>
                                            <div className="text-xs uppercase tracking-wider text-muted-foreground">
                                                {key}
                                            </div>
                                            <div className="font-mono text-sm">
                                                {value}
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
