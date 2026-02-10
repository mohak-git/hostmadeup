import { Separator } from "@/components/ui/separator";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Server } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                    {/* Hosting */}
                    <div>
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            Hosting
                        </h3>
                        <ul className="space-y-2">
                            {footerNav.hosting.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* VPS */}
                    <div>
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            VPS
                        </h3>
                        <ul className="space-y-2">
                            {footerNav.vps.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Domains */}
                    <div>
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            Domains
                        </h3>
                        <ul className="space-y-2">
                            {footerNav.domains.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Email */}
                    <div>
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            Email
                        </h3>
                        <ul className="space-y-2">
                            {footerNav.email.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {footerNav.company.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            {footerNav.legal.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                        <Server className="h-4 w-4" />
                        <span className="font-mono text-xs font-bold tracking-tight">
                            {siteConfig.name.toUpperCase()}
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span>
                            © {new Date().getFullYear()} {siteConfig.name}. All
                            rights reserved.
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="font-mono">
                            {siteConfig.stats.uptime} Uptime
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="font-mono">
                            {siteConfig.stats.datacenters} Data Centers
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
