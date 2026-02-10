import { cn } from "@/lib/utils";

interface TagGridProps {
    items: string[];
    className?: string;
    columns?: 4 | 5 | 6;
}

export function TagGrid({ items, className, columns = 6 }: TagGridProps) {
    const colsClass = {
        4: "grid-cols-2 md:grid-cols-4",
        5: "grid-cols-2 md:grid-cols-5",
        6: "grid-cols-2 md:grid-cols-4 lg:grid-cols-6",
    };

    return (
        <div
            className={cn(
                "grid gap-0 border border-border",
                colsClass[columns],
                className,
            )}
        >
            {items.map((item) => (
                <div
                    key={item}
                    className="border-r border-b border-border p-4 text-center"
                >
                    <span className="font-mono text-sm">{item}</span>
                </div>
            ))}
        </div>
    );
}

interface VersionTagListProps {
    versions: string[];
    className?: string;
}

/**
 * Horizontal list of version/technology tags
 */
export function VersionTagList({ versions, className }: VersionTagListProps) {
    return (
        <div className={cn("flex flex-wrap gap-4", className)}>
            {versions.map((v) => (
                <div
                    key={v}
                    className="font-mono text-sm px-6 py-3 bg-card border border-border"
                >
                    {v}
                </div>
            ))}
        </div>
    );
}

interface TechBlockProps {
    title: string;
    items: string[];
    className?: string;
}

/**
 * Card with technology/version listing
 */
export function TechBlock({ title, items, className }: TechBlockProps) {
    return (
        <div className={cn("border border-border p-6", className)}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {items.map((v) => (
                    <span
                        key={v}
                        className="font-mono text-sm px-3 py-1 bg-accent border border-border"
                    >
                        {v}
                    </span>
                ))}
            </div>
        </div>
    );
}
