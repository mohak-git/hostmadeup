import {
    FeatureCardGrid,
    FeatureGrid,
    PageHero,
    Section,
    SectionHeader,
    StatsBar,
    TagGrid,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { coreFeatures, techStack } from "@/config/features";
import {
    nodejsFeatures,
    nodejsFrameworks,
    nodejsStats,
} from "@/constants/hosting";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Node.js Hosting",
    description:
        "Deploy Node.js applications with zero configuration. Support for Express, Next.js, Remix, and more.",
};

export default function NodejsHostingPage() {
    return (
        <>
            <PageHero
                badge="Node.js Hosting"
                title="Deploy Node.js Apps Instantly"
                description="Push your code and we handle the rest. Zero-config deployments for Express, Next.js, Remix, and more."
            />

            <Section background="card">
                <StatsBar stats={nodejsStats} />
            </Section>

            <Section>
                <SectionHeader
                    badge="Frameworks"
                    title="Supported Frameworks"
                    centered
                />
                <TagGrid items={nodejsFrameworks} columns={6} />
            </Section>

            <Section>
                <SectionHeader
                    badge="Runtimes"
                    title="Node.js Versions"
                    centered
                />
                <div className="flex flex-wrap gap-4 justify-center">
                    {techStack.nodejs.map((v) => (
                        <div
                            key={v}
                            className="font-mono text-sm px-6 py-3 bg-card border border-border"
                        >
                            Node.js {v}
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader
                    badge="Features"
                    title="Platform Features"
                    centered
                />
                <FeatureCardGrid features={nodejsFeatures} columns={3} />
            </Section>

            <section className="border-b border-border bg-accent/30">
                <div className="container mx-auto px-4 py-12 text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        Deploy Your First App
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                        Go from git push to production in under 30 seconds.
                    </p>
                    <Button asChild size="lg" className="gap-2">
                        <Link href="/hosting/web">
                            Get Started <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            <Section>
                <SectionHeader
                    badge="Infrastructure"
                    title="Core Features"
                    centered
                />
                <FeatureGrid features={coreFeatures} columns={2} />
            </Section>
        </>
    );
}
