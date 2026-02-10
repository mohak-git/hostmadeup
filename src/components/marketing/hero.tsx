import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import {
    BackgroundBlobs,
    GridPattern,
} from "@/components/visuals/background-blobs";
import { FadeIn } from "@/components/visuals/fade-in";
import { ServerIllustration } from "@/components/visuals/server-illustration";

interface HeroProps {
    badge?: string;
    title: string;
    titleHighlight?: string;
    description: string;
    stats?: { value: string; label: string }[];
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    className?: string;
}

export function Hero({
    badge,
    title,
    titleHighlight,
    description,
    stats,
    primaryCta,
    secondaryCta,
    className,
}: HeroProps) {
    return (
        <section
            className={cn(
                "relative overflow-hidden border-b border-border bg-background/50",
                className,
            )}
        >
            <BackgroundBlobs className="opacity-40" />
            <GridPattern />

            <div className="container relative mx-auto px-4 py-20 md:py-32 lg:py-40">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Content */}
                    <div className="text-left max-w-2xl">
                        <FadeIn delay={0}>
                            {badge && (
                                <Badge
                                    variant="secondary"
                                    className="mb-6 font-mono text-xs uppercase tracking-wider bg-brand-50 text-brand-700 dark:bg-brand-950/30 dark:text-brand-300 border-brand-200 dark:border-brand-800"
                                >
                                    {badge}
                                </Badge>
                            )}
                        </FadeIn>

                        <FadeIn delay={100}>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                                {title}{" "}
                                {titleHighlight && (
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-500 to-brand-700 dark:from-brand-400 dark:to-brand-600 relative">
                                        {titleHighlight}
                                        <svg
                                            className="absolute w-full h-3 -bottom-1 left-0 text-brand-500/20 -z-10"
                                            viewBox="0 0 100 10"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M0 5 Q 50 10 100 5"
                                                stroke="currentColor"
                                                strokeWidth="8"
                                                fill="none"
                                            />
                                        </svg>
                                    </span>
                                )}
                            </h1>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-lg mb-8 leading-relaxed">
                                {description}
                            </p>
                        </FadeIn>

                        <FadeIn delay={300}>
                            {(primaryCta || secondaryCta) && (
                                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                    {primaryCta && (
                                        <Button
                                            asChild
                                            size="lg"
                                            className="h-12 px-8 text-base shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-300 bg-brand-600 hover:bg-brand-500 text-white rounded-6"
                                        >
                                            <Link href={primaryCta.href}>
                                                {primaryCta.label}
                                                <ArrowRight className="ml-2 h-4 w-4" />
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

                        <FadeIn delay={400}>
                            {stats && stats.length > 0 && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/50">
                                    {stats.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="text-left"
                                        >
                                            <div className="font-mono text-2xl md:text-3xl font-bold tabular-nums text-foreground">
                                                {stat.value}
                                            </div>
                                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mt-1">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </FadeIn>
                    </div>

                    {/* Right Column: Visuals */}
                    <div className="relative hidden lg:block h-full min-h-[400px]">
                        <FadeIn
                            delay={500}
                            className="w-full h-full flex items-center justify-center"
                        >
                            <div className="relative w-full h-full max-w-lg mx-auto">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-6 blur-3xl animate-pulse-slow" />
                                <ServerIllustration className="w-full h-auto drop-shadow-2xl relative z-10" />

                                {/* Floating Badges */}
                                <div
                                    className="absolute top-10 right-0 bg-card/80 backdrop-blur-sm p-3 rounded-lg border border-border/50 shadow-xl animate-float"
                                    style={{ animationDelay: "1s" }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-6 bg-green-500/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold">
                                                System Status
                                            </div>
                                            <div className="text-[10px] text-muted-foreground">
                                                All Systems Operational
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}

interface PageHeroProps {
    title: string;
    description: string;
    badge?: string;
}

export function PageHero({ title, description, badge }: PageHeroProps) {
    return (
        <section className="border-b border-border bg-card">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-3xl mx-auto text-center">
                    {badge && (
                        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                            {badge}
                        </span>
                    )}
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
