import { Footer, Navbar } from "@/components/layout";
import {
    BentoCell,
    BentoGrid,
    BentoStat,
    ComparisonTable,
    FeaturesBento,
    Hero,
    ProductSelector,
} from "@/components/marketing";
import { PricingTable } from "@/components/marketing/pricing-table";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/visuals/fade-in";
import { SectionHeading } from "@/components/visuals/section-heading";
import { WaveBackground, WavyWave } from "@/components/visuals/wave-background";
import { trustSignals } from "@/config/features";
import { webHostingPlans } from "@/config/pricing";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <div>
                <WaveBackground />

                <Navbar />
                <main>
                    {/* Hero */}
                    <Hero
                        title="Hosting Built for"
                        titleHighlight="Peak Performance"
                        description="Deploy web apps, databases, and custom infrastructure on our global edge network"
                        primaryCta={{
                            label: "Get Started",
                            href: "/hosting/web",
                        }}
                        secondaryCta={{ label: "View Plans", href: "#pricing" }}
                    />

                    <WavyWave />

                    {/* Product Selector */}
                    <section className="relative border-b border-border bg-(--accent-fill-heavy) pt-6 pb-24 overflow-hidden">
                        <div className="container relative mx-auto px-4">
                            <FadeIn>
                                <SectionHeading
                                    title="Choose Your Solution"
                                    description="Scalable infrastructure for every stage of your growth journey."
                                />
                            </FadeIn>
                            <FadeIn delay={100}>
                                <ProductSelector />
                            </FadeIn>
                        </div>
                    </section>
                    {/* Features */}
                    <section className="relative border-b border-border bg-muted/30 py-24 overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] pointer-events-none" />
                        <div className="container relative mx-auto px-4">
                            <FadeIn>
                                <SectionHeading
                                    title="Enterprise-Grade Features"
                                    description="Built on cutting-edge hardware with redundant networks and automated failover."
                                />
                            </FadeIn>
                            <FadeIn delay={100}>
                                <FeaturesBento />
                            </FadeIn>
                        </div>
                    </section>
                    {/* Trust Signals Bento */}
                    <section className="relative border-b border-border bg-card py-24">
                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
                        <div className="container relative mx-auto px-4">
                            <FadeIn>
                                <SectionHeading
                                    title="Global Scale & Performance"
                                    align="center"
                                    className="mb-16"
                                />
                            </FadeIn>
                            <FadeIn delay={100}>
                                <BentoGrid className="grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto shadow-2xl shadow-black/5">
                                    <BentoCell>
                                        <BentoStat
                                            value={trustSignals.uptime}
                                            label="Guaranteed Uptime"
                                        />
                                    </BentoCell>
                                    <BentoCell>
                                        <BentoStat
                                            value={trustSignals.users}
                                            label="Active Customers"
                                        />
                                    </BentoCell>
                                    <BentoCell>
                                        <BentoStat
                                            value="12"
                                            label="Global Data Centers"
                                        />
                                    </BentoCell>
                                    <BentoCell>
                                        <BentoStat
                                            value="<5min"
                                            label="Avg Response Time"
                                        />
                                    </BentoCell>
                                </BentoGrid>
                            </FadeIn>
                        </div>
                    </section>
                    {/* Competitor Comparison */}
                    <section className="relative border-b border-border py-24">
                        <div className="container mx-auto px-4">
                            <FadeIn>
                                <SectionHeading
                                    title="Why Choose Us"
                                    description="See how we stack up against traditional hosting providers."
                                />
                            </FadeIn>
                            <FadeIn delay={100}>
                                <ComparisonTable />
                            </FadeIn>
                        </div>
                    </section>
                    {/* Pricing Teaser */}
                    <section
                        id="pricing"
                        className="relative border-b border-border bg-muted/30 py-24 overflow-hidden"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-6 blur-3xl" />
                        <div className="container relative mx-auto px-4">
                            <FadeIn>
                                <div className="flex items-end justify-between mb-12">
                                    <SectionHeading
                                        title="Simple, Transparent Pricing"
                                        description="No hidden fees. No contracts. Cancel anytime."
                                    />
                                </div>
                            </FadeIn>
                            <FadeIn delay={100}>
                                <PricingTable plans={webHostingPlans} />
                            </FadeIn>
                        </div>
                    </section>
                    {/* Final CTA */}
                    <section className="relative border-b border-border overflow-hidden bg-zinc-950 text-white py-32">
                        <div className="absolute inset-0 bg-brand-950/20" />
                        <div className="container relative mx-auto px-4 text-center">
                            <FadeIn>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                    Ready to Deploy?
                                </h2>
                                <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                                    Join 150,000+ developers who trust
                                    Hostmadeup for their infrastructure. Deploy
                                    your first app in under 5 minutes.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Button
                                        size="lg"
                                        asChild
                                        className="h-12 px-8 rounded-6 text-base bg-brand-600 hover:bg-brand-500 text-white border-0 shadow-lg shadow-brand-500/25"
                                    >
                                        <Link href="/hosting/web">
                                            Get Started
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        asChild
                                        className="h-12 px-8 rounded-6 text-base bg-transparent border-zinc-800 text-white hover:bg-zinc-800 hover:text-white"
                                    >
                                        <Link href="/contact">
                                            Contact Sales
                                        </Link>
                                    </Button>
                                </div>
                            </FadeIn>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
