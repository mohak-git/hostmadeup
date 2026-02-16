"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mainNav, type NavItem } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ChevronDown, Server } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
    const pathname = usePathname();
    const [navbarHovered, setNavbarHovered] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) setNavbarHovered(true);
            else setNavbarHovered(false);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 h-[10vh] flex justify-center items-center w-full bg-transparent transition-all duration-700 ease-in-out",
                navbarHovered &&
                    "border border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60",
            )}
        >
            <div className="container max-w-8xl mx-auto px-6 lg:px-12 flex h-[10vh] items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Server className="h-7 w-7" />
                    <span className="font-mono text-xl font-extrabold tracking-tight">
                        {siteConfig.name.toUpperCase()}
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-4 h-[10vh]">
                    {mainNav.map((item) => (
                        <div
                            key={item.title}
                            className="relative"
                            onMouseEnter={() => setHoveredItem(item.title)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            {item.children ? (
                                <>
                                    <button
                                        className={cn(
                                            "flex items-center gap-1 px-3 py-2 font-medium transition-colors hover:text-foreground",
                                            hoveredItem === item.title
                                                ? "text-foreground"
                                                : "text-muted-foreground",
                                        )}
                                    >
                                        {item.title}
                                        <ChevronDown
                                            className={cn(
                                                "h-3 w-3 transition-transform",
                                                hoveredItem === item.title &&
                                                    "rotate-180",
                                            )}
                                        />
                                    </button>

                                    {/* Mega Menu */}
                                    {hoveredItem === item.title && (
                                        <div className="absolute left-0 top-full pt-2">
                                            <div className="border border-border bg-background p-4 shadow-lg min-w-[280px]">
                                                <div className="grid grid-cols-2 gap-1 min-w-150">
                                                    {item.children.map(
                                                        (child) => (
                                                            <NavLink
                                                                key={child.href}
                                                                item={child}
                                                                pathname={
                                                                    pathname
                                                                }
                                                            />
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.href || "#"}
                                    className={cn(
                                        "px-3 py-2 font-medium transition-colors hover:text-foreground",
                                        pathname === item.href
                                            ? "text-foreground"
                                            : "text-muted-foreground",
                                    )}
                                >
                                    {item.title}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-2">
                    <Button
                        size="lg"
                        className="hidden sm:inline-flex font-bold"
                    >
                        Log In
                    </Button>
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
    const isActive = pathname === item.href;

    return (
        <Link
            href={item.href || "#"}
            className={cn(
                "flex flex-col gap-0.5 p-3 transition-colors hover:bg-accent",
                isActive && "bg-accent",
            )}
        >
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{item.title}</span>
                {item.badge && (
                    <Badge
                        variant="secondary"
                        className="text-[10px] px-1.5 py-0"
                    >
                        {item.badge}
                    </Badge>
                )}
            </div>
            {item.description && (
                <span className="text-xs text-muted-foreground">
                    {item.description}
                </span>
            )}
        </Link>
    );
}
