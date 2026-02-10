import { Footer, Navbar } from "@/components/layout";
import {
    BentoCell,
    BentoGrid,
    BentoStat,
    ComparisonTable,
    FeatureGrid,
    Hero,
    ProductSelector,
} from "@/components/marketing";
import { PricingTable } from "@/components/marketing/pricing-table";
import { Button } from "@/components/ui/button";
import { coreFeatures, trustSignals } from "@/config/features";
import { webHostingPlans } from "@/config/pricing";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <Hero
                    badge="Enterprise Infrastructure"
                    title="Hosting Built for"
                    titleHighlight="Peak Performance"
                    description="Deploy web apps, databases, and custom infrastructure on our global edge network. NVMe storage, 99.99% uptime, 24/7 expert support."
                    stats={[
                        { value: trustSignals.uptime, label: "Uptime SLA" },
                        { value: trustSignals.users, label: "Active Users" },
                        {
                            value: trustSignals.rating,
                            label: "Customer Rating",
                        },
                        { value: trustSignals.support, label: "Support" },
                    ]}
                    primaryCta={{ label: "Get Started", href: "/hosting/web" }}
                    secondaryCta={{ label: "View Plans", href: "#pricing" }}
                />

                {/* Product Selector */}
                <section className="border-b border-border">
                    <div className="container mx-auto px-4 py-12">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                    Products
                                </span>
                                <h2 className="text-2xl font-bold mt-1">
                                    Choose Your Solution
                                </h2>
                            </div>
                        </div>
                        <ProductSelector />
                    </div>
                </section>

                {/* Features */}
                <section className="border-b border-border">
                    <div className="container mx-auto px-4 py-12">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                    Infrastructure
                                </span>
                                <h2 className="text-2xl font-bold mt-1">
                                    Enterprise-Grade Features
                                </h2>
                            </div>
                        </div>
                        <FeatureGrid features={coreFeatures} />
                    </div>
                </section>

                {/* Trust Signals Bento */}
                <section className="border-b border-border bg-card">
                    <div className="container mx-auto px-4 py-12">
                        <BentoGrid className="grid-cols-2 md:grid-cols-4">
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
                    </div>
                </section>

                {/* Competitor Comparison */}
                <section className="border-b border-border">
                    <div className="container mx-auto px-4 py-12">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                    Comparison
                                </span>
                                <h2 className="text-2xl font-bold mt-1">
                                    Why Choose Us
                                </h2>
                            </div>
                        </div>
                        <ComparisonTable />
                    </div>
                </section>

                {/* Pricing Teaser */}
                <section id="pricing" className="border-b border-border">
                    <div className="container mx-auto px-4 py-12">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                    Pricing
                                </span>
                                <h2 className="text-2xl font-bold mt-1">
                                    Simple, Transparent Pricing
                                </h2>
                            </div>
                            <Button
                                variant="outline"
                                asChild
                                className="hidden md:inline-flex gap-2"
                            >
                                <Link href="/hosting/web">
                                    View All Plans
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <PricingTable plans={webHostingPlans} />
                    </div>
                </section>

                {/* Final CTA */}
                <section className="border-b border-border bg-accent/30">
                    <div className="container mx-auto px-4 py-16 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Deploy?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                            Join 150,000+ developers who trust Hostmadeup for
                            their infrastructure. Deploy your first app in under
                            5 minutes.
                        </p>
                        <div className="flex justify-center gap-3">
                            <Button size="lg" asChild className="gap-2">
                                <Link href="/hosting/web">
                                    Get Started
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/contact">Contact Sales</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
