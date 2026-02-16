"use client";

import { Button } from "@/components/ui/button";
import { UserBadge } from "@/components/ui/user-badge";
import { FadeIn } from "@/components/visuals/fade-in";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
    titleLine1: string;
    titleHighlight: string;
    titleLine2?: string;
    description: string;
    heroImage: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    trustText?: string;
    trustCount?: string;
    className?: string;
}

export function Hero({
    titleLine1,
    titleHighlight,
    titleLine2,
    description,
    heroImage,
    primaryCta,
    secondaryCta,
    trustText = "creators worldwide",
    trustCount = "10,000+",
    className,
}: HeroProps) {
    return (
        <section
            className={cn(
                "relative overflow-hidden bg-linear-to-br from-background via-brand-100  font-sans",
                className,
            )}
        >
            <div className="container max-w-8xl mx-auto px-6 lg:px-12 py-10">
                <div className="flex items-center gap-12 lg:gap-16 ">
                    <FadeIn className="hidden md:block w-1/2">
                        <div className="rounded-3xl bg-brand-100 shadow-lg overflow-hidden aspect-4/3 flex items-center justify-center">
                            {/* Image */}
                            <Image
                                src={heroImage}
                                alt="Cloud hosting infrastructure"
                                fill
                                priority
                                className="object-contain p-4"
                            />
                        </div>
                    </FadeIn>

                    <div className="w-full md:w-1/2 flex flex-col items-start">
                        {/* Heading */}
                        <FadeIn delay={150}>
                            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight mb-5">
                                {titleLine1}
                                <br />
                                <span className="text-brand-600">
                                    {titleHighlight}
                                </span>{" "}
                                {titleLine2}
                            </h1>
                        </FadeIn>

                        {/* Description */}
                        <FadeIn className="w-full" delay={200}>
                            <p className="text-base md:text-lg text-muted-foreground/90 max-w-lg mb-8 leading-relaxed">
                                {description}
                            </p>
                        </FadeIn>

                        {/* CTAs */}
                        <FadeIn delay={250}>
                            <div className="flex flex-col sm:flex-row gap-3 mb-8">
                                {primaryCta && (
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 px-6 text-sm font-medium shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-300 bg-brand-600 hover:bg-brand-500 text-white rounded-md"
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
                                        className="h-12 px-6 text-sm font-medium hover:bg-muted/50 border-border hover:border-brand-200 rounded-md"
                                    >
                                        <Link href={secondaryCta.href}>
                                            {secondaryCta.label}
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </FadeIn>

                        {/* Trust Badge */}
                        <FadeIn delay={300}>
                            <div className="flex items-center justify-between gap-3">
                                <UserBadge />
                                <p className="ml-5 text-sm sm:text-base text-muted-foreground">
                                    Trusted by{" "}
                                    <strong className="font-bold text-foreground">
                                        {trustCount}
                                    </strong>{" "}
                                    {trustText}
                                </p>
                            </div>
                        </FadeIn>
                    </div>
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
