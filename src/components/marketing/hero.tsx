"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/visuals/fade-in";
import IsoServers from "@/components/visuals/iso-servers";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroProps {
    title: string;
    titleHighlight?: string;
    description: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    className?: string;
}

export function Hero({
    title,
    titleHighlight,
    description,
    primaryCta,
    secondaryCta,
    className,
}: HeroProps) {
    return (
        <section
            className={cn(
                "relative overflow-hidden bg-background font-sans border-b border-border",
                "h-[calc(100vh-60px)]",
                className,
            )}
        >
            <div className="container z-2 relative max-w-8xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
                <div className="text-left max-w-2xl">
                    <FadeIn delay={100}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                            {title}{" "}
                            {titleHighlight && (
                                <span className="text-transparent py-1 bg-clip-text bg-linear-to-r from-brand-500 to-brand-700 dark:from-brand-400 dark:to-brand-600 relative">
                                    {titleHighlight}
                                </span>
                            )}
                        </h1>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <div className="text-base md:text-lg text-muted-foreground/90 max-w-lg mb-8 leading-relaxed">
                            {description}
                        </div>
                    </FadeIn>

                    <FadeIn delay={300}>
                        {(primaryCta || secondaryCta) && (
                            <div className="flex flex-col sm:flex-row gap-4">
                                {primaryCta && (
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 px-8 text-base shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-300 bg-brand-600 hover:bg-brand-500 text-white rounded-6"
                                    >
                                        <Link href={primaryCta.href}>
                                            {primaryCta.label}
                                        </Link>
                                    </Button>
                                )}
                                {secondaryCta && (
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="h-12 px-8 text-base hover:bg-muted/50 border-input hover:border-brand-200 dark:hover:border-brand-800 rounded-6"
                                    >
                                        <Link href={secondaryCta.href}>
                                            {secondaryCta.label}
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        )}
                    </FadeIn>
                </div>
                <div className="w-full lg:w-[55%] h-[500px] lg:h-[700px] relative mt-16 lg:mt-0 flex items-center justify-center">
                    <IsoServers />
                </div>
            </div>
        </section>
    );
}

interface PageHeroProps {
    title: string;
    description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
    return (
        <section className="border-b border-border bg-card">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-tight mt-2 mb-4">
                        {title}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
