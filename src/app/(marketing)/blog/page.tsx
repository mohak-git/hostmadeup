import { PageHero, Section, SectionHeader } from "@/components/marketing";
import { blogCategories, blogPosts } from "@/constants/support";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog",
    description: "News, tutorials, and updates from the Hostmadeup team.",
};

export default function BlogPage() {
    return (
        <>
            <PageHero
                badge="Blog"
                title="News & Updates"
                description="The latest news, tutorials, and product updates from our team."
            />

            <Section>
                <SectionHeader
                    badge="Categories"
                    title="Browse Topics"
                    centered
                />
                <div className="flex flex-wrap gap-2 justify-center">
                    {blogCategories.map((cat) => (
                        <button
                            key={cat}
                            className="px-4 py-2 text-sm border border-border hover:bg-accent/50"
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader badge="Latest" title="Recent Posts" centered />
                <div className="grid md:grid-cols-3 gap-0 border border-border">
                    {blogPosts.map((post) => (
                        <article
                            key={post.slug}
                            className="border-r border-b border-border p-6"
                        >
                            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                {post.category}
                            </span>
                            <h3 className="font-bold text-lg mt-1 mb-2">
                                {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                {post.excerpt}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xs text-muted-foreground">
                                    {new Date(post.date).toLocaleDateString()}
                                </span>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-1 text-sm hover:text-foreground"
                                >
                                    Read <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </Section>
        </>
    );
}
