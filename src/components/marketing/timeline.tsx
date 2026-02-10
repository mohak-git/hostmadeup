import { cn } from "@/lib/utils";

interface TimelineItem {
    step: string;
    title: string;
    desc: string;
}

interface TimelineGridProps {
    items: TimelineItem[];
    className?: string;
}

export function TimelineGrid({ items, className }: TimelineGridProps) {
    return (
        <div
            className={cn(
                "grid md:grid-cols-4 gap-0 border border-border",
                className,
            )}
        >
            {items.map((item) => (
                <div
                    key={item.step}
                    className="border-r border-border last:border-r-0 p-6"
                >
                    <div className="font-mono text-4xl font-bold text-muted-foreground mb-4">
                        {item.step}
                    </div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
            ))}
        </div>
    );
}
