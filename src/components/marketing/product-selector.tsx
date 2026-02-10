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
                "grid md:grid-cols-5 gap-0 border border-border",
                className,
            )}
        >
            {products.map((product) => {
                const Icon = product.icon;
                return (
                    <Link
                        key={product.id}
                        href={product.href}
                        className="group border-r border-b border-border last:border-r-0 p-6 bg-card hover:bg-accent/50 transition-colors flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 border border-border group-hover:border-foreground/50 transition-colors">
                                <Icon className="h-5 w-5" />
                            </div>
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <h3 className="font-bold mb-1">{product.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-1">
                            {product.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border">
                            {Object.entries(product.specs).map(
                                ([key, value]) => (
                                    <div key={key}>
                                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                                            {key}
                                        </div>
                                        <div className="font-mono text-sm">
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
