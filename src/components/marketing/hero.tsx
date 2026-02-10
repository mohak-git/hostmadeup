import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
        <section className={cn("border-b border-border", className)}>
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    {badge && (
                        <Badge
                            variant="secondary"
                            className="mb-4 font-mono text-xs uppercase tracking-wider"
                        >
                            {badge}
                        </Badge>
                    )}

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        {title}
                        {titleHighlight && (
                            <>
                                <br />
                                <span className="text-muted-foreground">
                                    {titleHighlight}
                                </span>
                            </>
                        )}
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        {description}
                    </p>

                    {(primaryCta || secondaryCta) && (
                        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
                            {primaryCta && (
                                <Button asChild size="lg" className="gap-2">
                                    <Link href={primaryCta.href}>
                                        {primaryCta.label}
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            )}
                            {secondaryCta && (
                                <Button asChild size="lg" variant="outline">
                                    <Link href={secondaryCta.href}>
                                        {secondaryCta.label}
                                    </Link>
                                </Button>
                            )}
                        </div>
                    )}

                    {stats && stats.length > 0 && (
                        <div className="inline-flex flex-wrap justify-center gap-8 md:gap-12 border border-border p-6 bg-card">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="font-mono text-2xl md:text-3xl font-bold tabular-nums">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
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
