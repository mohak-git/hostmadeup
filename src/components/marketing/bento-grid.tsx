import { cn } from "@/lib/utils";

interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div className={cn("grid gap-0 border border-border", className)}>
            {children}
        </div>
    );
}

interface BentoCellProps {
    children: React.ReactNode;
    className?: string;
    span?: "1" | "2" | "3" | "full";
    rowSpan?: "1" | "2";
}

export function BentoCell({
    children,
    className,
    span = "1",
    rowSpan = "1",
}: BentoCellProps) {
    return (
        <div
            className={cn(
                "border-r border-b border-border bg-card p-6 last:border-r-0",
                span === "2" && "md:col-span-2",
                span === "3" && "md:col-span-3",
                span === "full" && "col-span-full",
                rowSpan === "2" && "md:row-span-2",
                className,
            )}
        >
            {children}
        </div>
    );
}

interface BentoHeaderProps {
    label?: string;
    title: string;
    description?: string;
}

export function BentoHeader({ label, title, description }: BentoHeaderProps) {
    return (
        <div className="mb-4">
            {label && (
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                </span>
            )}
            <h3 className="text-lg font-bold mt-1">{title}</h3>
            {description && (
                <p className="text-sm text-muted-foreground mt-1">
                    {description}
                </p>
            )}
        </div>
    );
}

interface BentoStatProps {
    value: string;
    label: string;
    className?: string;
}

export function BentoStat({ value, label, className }: BentoStatProps) {
    return (
        <div className={cn("", className)}>
            <div className="font-mono text-3xl font-bold tabular-nums">
                {value}
            </div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {label}
            </div>
        </div>
    );
}
