"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/components/visuals/fade-in";
import { cn } from "@/lib/utils";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const TLD_OPTIONS = [
    { value: ".com", label: ".com" },
    { value: ".net", label: ".net" },
    { value: ".org", label: ".org" },
    { value: ".dev", label: ".dev" },
];

export function DomainSearchBar() {
    const [query, setQuery] = useState("");
    const [selectedTld, setSelectedTld] = useState(".com");
    const [isTldOpen, setIsTldOpen] = useState(false);

    const handleSearch = () => console.log("searching...");

    return (
        <div className="container max-w-6xl mx-auto px-6 lg:px-12">
            <FadeIn delay={350}>
                <Card className="bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border-border/60 py-0 transition-shadow duration-300 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)]">
                    <CardContent className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-6">
                            <div className="w-full md:w-1/3 text-center md:text-left">
                                <h2 className="text-lg md:text-xl font-semibold text-secondary tracking-tight leading-snug">
                                    Find your perfect domain name
                                </h2>
                                <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                                    Starting at{" "}
                                    <Badge
                                        variant="outline"
                                        className="text-foreground font-semibold border-transparent px-0 py-0 text-xs md:text-sm"
                                    >
                                        $9.99/year
                                    </Badge>
                                </p>
                            </div>

                            <div className="flex-1 w-full flex items-stretch gap-0 rounded-lg border border-border bg-muted/30 focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-400/20 transition-all duration-200">
                                <Input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={(e) =>
                                        e.key === "Enter" && handleSearch()
                                    }
                                    placeholder={`example${selectedTld}`}
                                    className="flex-1 min-w-0 h-12 px-4 bg-transparent text-sm md:text-base text-foreground placeholder:text-muted-foreground/60 outline-none rounded-l-lg rounded-r-none border-0 shadow-none focus-visible:ring-0 focus-visible:border-0"
                                />

                                <DropdownMenu
                                    open={isTldOpen}
                                    onOpenChange={setIsTldOpen}
                                >
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            className={cn(
                                                "flex items-center gap-1.5 h-12 px-3.5 border-l border-border rounded-none bg-white text-sm font-medium text-foreground cursor-pointer select-none transition-colors duration-150 shadow-none focus-visible:ring-0",
                                                "hover:bg-muted/60",
                                                isTldOpen && "bg-muted/60",
                                            )}
                                        >
                                            <span>{selectedTld}</span>
                                            <ChevronDown
                                                className={cn(
                                                    "h-3.5 w-3.5 text-muted-foreground transition-transform duration-200",
                                                    isTldOpen && "rotate-180",
                                                )}
                                            />
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent
                                        align="end"
                                        className="min-w-[120px]"
                                    >
                                        {TLD_OPTIONS.map((tld) => (
                                            <DropdownMenuItem
                                                key={tld.value}
                                                onClick={() => {
                                                    setSelectedTld(tld.value);
                                                    setIsTldOpen(false);
                                                }}
                                                className={cn(
                                                    "cursor-pointer",
                                                    selectedTld === tld.value &&
                                                        "bg-brand-50 text-brand-700 font-medium",
                                                )}
                                            >
                                                {tld.label}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <Button
                                    onClick={handleSearch}
                                    size="lg"
                                    className="h-12 px-5 md:px-6 rounded-none rounded-r-lg bg-secondary hover:bg-secondary/90 text-white text-sm font-semibold gap-2 shrink-0 shadow-none border-0 cursor-pointer transition-colors duration-200"
                                >
                                    <Search className="h-4 w-4" />
                                    <span className="hidden sm:inline">
                                        Search
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </FadeIn>
        </div>
    );
}
