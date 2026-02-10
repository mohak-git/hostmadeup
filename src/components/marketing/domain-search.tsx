"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { domainPricing } from "@/config/pricing";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Search } from "lucide-react";
import * as React from "react";

interface DomainSearchProps {
    className?: string;
}

export function DomainSearch({ className }: DomainSearchProps) {
    const [query, setQuery] = React.useState("");
    const [searched, setSearched] = React.useState(false);
    const [results, setResults] = React.useState<
        { domain: string; tld: string; available: boolean; price: number }[]
    >([]);

    const handleSearch = () => {
        if (!query) return;

        // Mock search results
        const cleanQuery = query.replace(/\.[a-z]+$/i, "").toLowerCase();
        const mockResults = domainPricing.popular.map((tld) => ({
            domain: `${cleanQuery}${tld.tld}`,
            tld: tld.tld,
            available: Math.random() > 0.3,
            price: tld.registerPrice,
        }));

        setResults(mockResults);
        setSearched(true);
    };

    return (
        <div className={cn("", className)}>
            {/* Search Input */}
            <div className="flex gap-0 border border-border">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Find your perfect domain..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        className="h-14 pl-12 border-0 text-lg focus-visible:ring-0"
                    />
                </div>
                <Button onClick={handleSearch} size="lg" className="h-14 px-8">
                    Search
                </Button>
            </div>

            {/* Popular TLDs */}
            {!searched && (
                <div className="mt-6">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                        Popular Extensions
                    </div>
                    <div className="grid grid-cols-5 gap-0 border border-border">
                        {domainPricing.popular.map((tld) => (
                            <div
                                key={tld.tld}
                                className="border-r border-border last:border-r-0 p-4 text-center bg-card hover:bg-accent/50 transition-colors cursor-pointer"
                            >
                                <div className="font-mono font-bold">
                                    {tld.tld}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    ${tld.registerPrice}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Search Results */}
            {searched && (
                <div className="mt-6 border border-border">
                    {results.map((result) => (
                        <div
                            key={result.domain}
                            className={cn(
                                "flex items-center justify-between p-4 border-b border-border last:border-b-0",
                                result.available ? "bg-card" : "bg-muted/30",
                            )}
                        >
                            <div className="flex items-center gap-3">
                                {result.available ? (
                                    <div className="p-1 bg-green-500/10 border border-green-500/20">
                                        <Check className="h-4 w-4 text-green-500" />
                                    </div>
                                ) : (
                                    <div className="p-1 bg-muted border border-border">
                                        <Check className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                )}
                                <span className="font-mono font-bold">
                                    {result.domain}
                                </span>
                                {result.available && (
                                    <Badge
                                        variant="secondary"
                                        className="text-[10px]"
                                    >
                                        Available
                                    </Badge>
                                )}
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-mono text-lg">
                                    ${result.price}/yr
                                </span>
                                <Button
                                    size="sm"
                                    variant={
                                        result.available ? "default" : "outline"
                                    }
                                    disabled={!result.available}
                                    className="gap-1"
                                >
                                    {result.available
                                        ? "Add to Cart"
                                        : "Unavailable"}
                                    {result.available && (
                                        <ArrowRight className="h-3 w-3" />
                                    )}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
