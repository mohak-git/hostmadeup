import { cn } from "@/lib/utils";
import { ArrowRight, Boxes, Cloud, Globe, Server, Users } from "lucide-react";
import Link from "next/link";

const products = [
    {
        id: "web-hosting",
        title: "Web Hosting",
        description: "Fast, reliable shared hosting for websites",
        icon: Server,
        href: "/hosting/web",
        specs: { from: "$1.99/mo", sites: "Up to 100" },
    },
    {
        id: "vps",
        title: "VPS Hosting",
        description: "Full root access virtual servers",
        icon: Cloud,
        href: "/vps",
        specs: { from: "$4.99/mo", cpu: "1-8 vCPU" },
    },
    {
        id: "domains",
        title: "Domains",
        description: "Register and manage domain names",
        icon: Globe,
        href: "/domains",
        specs: { from: "$0.99", tlds: "500+" },
    },
    {
        id: "wordpress",
        title: "WordPress",
        description: "Optimized WordPress hosting",
        icon: Boxes,
        href: "/hosting/wordpress",
        specs: { from: "$2.49/mo", cache: "LiteSpeed" },
    },
    {
        id: "reseller",
        title: "Reseller",
        description: "White-label hosting for agencies",
        icon: Users,
        href: "/hosting/reseller",
        specs: { from: "$19.99/mo", accounts: "Unlimited" },
    },
];

interface ProductSelectorProps {
    className?: string;
}

export function ProductSelector({ className }: ProductSelectorProps) {
    return (
        <div
            className={cn(
                "grid md:grid-cols-2 lg:grid-cols-5 gap-4",
                className,
            )}
        >
            {products.map((product) => {
                const Icon = product.icon;
                return (
                    <Link
                        key={product.id}
                        href={product.href}
                        className="group relative flex flex-col p-6 bg-card hover:bg-muted/50 border border-border/50 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-500/20 hover:-translate-y-1"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2.5 rounded-lg bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="h-5 w-5" />
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </div>

                        <h3 className="font-bold mb-2 text-foreground">
                            {product.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/40">
                            {Object.entries(product.specs).map(
                                ([key, value]) => (
                                    <div key={key}>
                                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                                            {key}
                                        </div>
                                        <div className="font-mono text-sm font-medium text-foreground/90">
                                            {value}
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
