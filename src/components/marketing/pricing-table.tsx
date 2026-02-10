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
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={cn(
                            "relative flex flex-col p-8 rounded-2xl transition-all duration-300",
                            plan.popular
                                ? "bg-card border-2 border-brand-500 shadow-2xl scale-105 z-10"
                                : "bg-card/50 border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-card",
                        )}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                Most Popular
                            </div>
                        )}

                        {/* Header */}
                        <div className="mb-6">
                            <h3
                                className={cn(
                                    "font-bold text-2xl mb-2",
                                    plan.popular
                                        ? "text-brand-600 dark:text-brand-400"
                                        : "text-foreground",
                                )}
                            >
                                {plan.name}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {plan.description}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="mb-8">
                            <div className="flex items-baseline gap-1">
                                <span
                                    className={cn(
                                        "text-4xl font-bold tracking-tight",
                                        plan.popular
                                            ? "text-foreground"
                                            : "text-foreground/80",
                                    )}
                                >
                                    $
                                    {billing === "yearly"
                                        ? plan.yearlyPrice
                                        : plan.monthlyPrice}
                                </span>
                                <span className="text-muted-foreground/80 font-medium">
                                    /mo
                                </span>
                            </div>
                            {billing === "yearly" && (
                                <p className="text-xs text-brand-600 dark:text-brand-400 font-medium mt-2 bg-brand-50 dark:bg-brand-950/50 inline-block px-2 py-1 rounded">
                                    Billed annually
                                </p>
                            )}
                        </div>

                        {/* CTA */}
                        <Button
                            className={cn(
                                "w-full mb-8 h-11 rounded-xl text-base",
                                plan.popular
                                    ? "bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-500/20"
                                    : "",
                            )}
                            variant={plan.popular ? "default" : "outline"}
                        >
                            Get Started
                        </Button>

                        {/* Features */}
                        <div className="flex-1">
                            <ul className="space-y-4">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature.name}
                                        className="flex items-start gap-3"
                                    >
                                        {feature.included ? (
                                            <div className="mt-0.5 rounded-full bg-green-500/10 p-0.5">
                                                <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-500" />
                                            </div>
                                        ) : (
                                            <div className="mt-0.5 rounded-full bg-muted p-0.5">
                                                <X className="h-3.5 w-3.5 text-muted-foreground" />
                                            </div>
                                        )}
                                        <span
                                            className={cn(
                                                "text-sm leading-tight",
                                                !feature.included &&
                                                    "text-muted-foreground/60 decoration-slate-400/30",
                                            )}
                                        >
                                            {feature.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Specs */}
                        <div className="mt-8 pt-6 border-t border-border/50">
                            <div className="grid grid-cols-2 gap-4">
                                {Object.entries(plan.specs).map(
                                    ([key, value]) => (
                                        <div key={key}>
                                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                                {key}
                                            </div>
                                            <div className="font-mono text-sm font-medium">
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
