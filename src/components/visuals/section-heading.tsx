import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    badge?: string;
    title: string;
    description?: string;
    align?: "left" | "center" | "right";
    className?: string;
}

export function SectionHeading({
    badge,
    title,
    description,
    align = "center",
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12",
                align === "center" && "text-center mx-auto max-w-3xl",
                align === "right" && "text-right ml-auto",
                className,
            )}
        >
            {badge && (
                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/50 px-3 py-1 rounded-full mb-3 border border-brand-200 dark:border-brand-800">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {title}
            </h2>
            {description && (
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
}
