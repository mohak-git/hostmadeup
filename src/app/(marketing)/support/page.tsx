import { PageHero, Section, SectionHeader } from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supportCategories, contactOptions } from "@/constants/support";
import { ArrowRight, Search } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Support",
    description:
        "Get help with your hosting account. Knowledge base, tutorials, and 24/7 support.",
};

export default function SupportPage() {
    return (
        <>
            <PageHero
                badge="Support"
                title="How Can We Help?"
                description="Find answers in our knowledge base or get in touch with our support team."
            />

            <Section>
                <div className="max-w-xl mx-auto">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="Search for help articles..."
                            className="h-14 pl-12 text-base"
                        />
                    </div>
                </div>
            </Section>

            <Section>
                <SectionHeader
                    badge="Knowledge Base"
                    title="Browse by Topic"
                    centered
                />
                <div className="grid md:grid-cols-3 gap-0 border border-border">
                    {supportCategories.map((cat) => (
                        <div
                            key={cat.title}
                            className="border-r border-b border-border p-6"
                        >
                            <h3 className="font-bold mb-3">{cat.title}</h3>
                            <ul className="space-y-2">
                                {cat.articles.map((a) => (
                                    <li
                                        key={a}
                                        className="text-sm text-muted-foreground"
                                    >
                                        • {a}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={cat.href}
                                className="inline-flex items-center gap-1 text-sm mt-4 hover:text-foreground text-muted-foreground"
                            >
                                View all <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="card">
                <SectionHeader badge="Contact" title="Get in Touch" centered />
                <div className="grid md:grid-cols-3 gap-0 border border-border">
                    {contactOptions.map((opt) => (
                        <div
                            key={opt.title}
                            className="border-r border-border last:border-r-0 p-6 text-center bg-background"
                        >
                            <h3 className="font-bold mb-1">{opt.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                                {opt.desc}
                            </p>
                            <p className="font-mono text-xs mb-4">
                                {opt.available}
                            </p>
                            <Button variant="outline" size="sm">
                                {opt.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
