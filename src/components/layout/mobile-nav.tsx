"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ChevronRight, Menu, Server } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export function MobileNav() {
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);
    const [expandedItem, setExpandedItem] = React.useState<string | null>(null);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden border border-border"
                >
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0">
                <SheetHeader className="border-b border-border px-6 py-4">
                    <SheetTitle className="flex items-center gap-2 text-left">
                        <Server className="h-5 w-5" />
                        <span className="font-mono text-sm font-bold tracking-tight">
                            {siteConfig.name.toUpperCase()}
                        </span>
                    </SheetTitle>
                </SheetHeader>

                <ScrollArea className="h-[calc(100vh-140px)]">
                    <div className="px-4 py-4">
                        {mainNav.map((item) => (
                            <div
                                key={item.title}
                                className="border-b border-border"
                            >
                                {item.children ? (
                                    <>
                                        <button
                                            onClick={() =>
                                                setExpandedItem(
                                                    expandedItem === item.title
                                                        ? null
                                                        : item.title,
                                                )
                                            }
                                            className="flex w-full items-center justify-between py-4 text-sm font-medium"
                                        >
                                            {item.title}
                                            <ChevronRight
                                                className={cn(
                                                    "h-4 w-4 transition-transform",
                                                    expandedItem ===
                                                        item.title &&
                                                        "rotate-90",
                                                )}
                                            />
                                        </button>
                                        {expandedItem === item.title && (
                                            <div className="pb-4 pl-4">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href || "#"}
                                                        onClick={() =>
                                                            setOpen(false)
                                                        }
                                                        className={cn(
                                                            "flex flex-col gap-0.5 py-2 transition-colors hover:text-foreground",
                                                            pathname ===
                                                                child.href
                                                                ? "text-foreground"
                                                                : "text-muted-foreground",
                                                        )}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-sm">
                                                                {child.title}
                                                            </span>
                                                            {child.badge && (
                                                                <Badge
                                                                    variant="secondary"
                                                                    className="text-[10px] px-1.5 py-0"
                                                                >
                                                                    {
                                                                        child.badge
                                                                    }
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href || "#"}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "flex w-full py-4 text-sm font-medium transition-colors hover:text-foreground",
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
                    </div>
                </ScrollArea>

                <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background p-4">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => setOpen(false)}
                        >
                            Log In
                        </Button>
                        <Button
                            className="flex-1"
                            onClick={() => setOpen(false)}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
