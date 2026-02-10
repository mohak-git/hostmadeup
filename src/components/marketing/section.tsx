import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    background?: "default" | "card";
}

export function Section({
    children,
    className,
    background = "default",
}: SectionProps) {
    return (
        <section
            className={cn(
                "border-b border-border",
                background === "card" && "bg-card",
                className,
            )}
        >
            <div className="container mx-auto px-4 py-12">{children}</div>
        </section>
    );
}

interface SectionHeaderProps {
    badge: string;
    title: string;
    centered?: boolean;
    className?: string;
}

/**
 * Consistent section header with badge and title
 * Used across all marketing pages
 */
export function SectionHeader({
    badge,
    title,
    centered = false,
    className,
}: SectionHeaderProps) {
    return (
        <div className={cn("mb-8", centered && "text-center", className)}>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {badge}
            </span>
            <h2 className="text-2xl font-bold mt-1">{title}</h2>
        </div>
    );
}
