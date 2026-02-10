import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog Post",
    description: "Read the latest updates from Hostmadeup.",
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    // Mock post data - in real app this would come from CMS/database
    const post = {
        title: "Introducing Node.js Hosting",
        date: "2024-01-15",
        author: "John Developer",
        category: "Product",
        content: `
We're excited to announce the launch of our new Node.js Hosting platform. Deploy your Node.js applications with zero configuration and get your apps running in seconds.

## What's Included

- **Git-Based Deploys**: Push to any Git repository and deploy automatically
- **Multiple Node Versions**: Support for Node.js 18, 20, and 22 LTS
- **Environment Variables**: Secure secrets management
- **Custom Domains**: Point any domain with free SSL
- **Preview Deploys**: Every PR gets a unique preview URL

## Supported Frameworks

Our platform supports all popular Node.js frameworks out of the box:

- Next.js
- Express
- Remix
- Fastify
- NestJS
- And many more...

## Getting Started

Getting started is simple. Just connect your Git repository, configure your environment variables, and push. We handle the rest.

\`\`\`bash
git push origin main
\`\`\`

Your app will be live in under 30 seconds.

## Pricing

Node.js hosting starts at just $4.99/mo with our Web Hosting plans, or you can deploy on dedicated VPS resources for even more power.

Ready to get started? [Check out our Node.js Hosting page](/hosting/nodejs) for more details.
        `,
    };

    return (
        <>
            {/* Header */}
            <section className="border-b border-border">
                <div className="container mx-auto px-4 py-6">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </Link>
                </div>
            </section>

            {/* Article */}
            <article className="border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-3xl mx-auto">
                        {/* Meta */}
                        <div className="mb-8">
                            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                {post.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <User className="h-4 w-4" />
                                    {post.author}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(post.date).toLocaleDateString()}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            {post.content.split("\n\n").map((paragraph, i) => {
                                if (paragraph.startsWith("## ")) {
                                    return (
                                        <h2
                                            key={i}
                                            className="text-xl font-bold mt-8 mb-4"
                                        >
                                            {paragraph.replace("## ", "")}
                                        </h2>
                                    );
                                }
                                if (paragraph.startsWith("- ")) {
                                    return (
                                        <ul
                                            key={i}
                                            className="list-disc list-inside space-y-2 my-4"
                                        >
                                            {paragraph
                                                .split("\n")
                                                .map((item, j) => (
                                                    <li
                                                        key={j}
                                                        className="text-muted-foreground"
                                                    >
                                                        {item
                                                            .replace("- ", "")
                                                            .replace(
                                                                /\*\*(.*?)\*\*/g,
                                                                "$1",
                                                            )}
                                                    </li>
                                                ))}
                                        </ul>
                                    );
                                }
                                if (paragraph.includes("```")) {
                                    const code = paragraph.replace(
                                        /```.*\n?/g,
                                        "",
                                    );
                                    return (
                                        <pre
                                            key={i}
                                            className="bg-zinc-950 dark:bg-zinc-900 text-zinc-100 font-mono text-sm p-4 border border-zinc-800 my-4"
                                        >
                                            <code>{code}</code>
                                        </pre>
                                    );
                                }
                                return (
                                    <p
                                        key={i}
                                        className="text-muted-foreground my-4"
                                    >
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </article>

            {/* CTA */}
            <section className="border-b border-border bg-accent/30">
                <div className="container mx-auto px-4 py-12 text-center">
                    <h2 className="text-2xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                        Deploy your first app in under 5 minutes.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/hosting/nodejs">Try Node.js Hosting</Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
