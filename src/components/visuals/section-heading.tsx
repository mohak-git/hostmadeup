import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    description?: string;
    align?: "left" | "center" | "right";
    className?: string;
}

export function SectionHeading({
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
