import { comparisonTable } from "@/config/features";
import { cn } from "@/lib/utils";

interface ComparisonTableProps {
    className?: string;
}

export function ComparisonTable({ className }: ComparisonTableProps) {
    return (
        <div
            className={cn(
                "border border-border/50 rounded-xl overflow-hidden shadow-sm bg-card",
                className,
            )}
        >
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-border/50 bg-muted/40">
                            {comparisonTable.headers.map((header, i) => (
                                <th
                                    key={header}
                                    className={cn(
                                        "p-5 text-left text-xs uppercase tracking-wider font-mono font-semibold text-muted-foreground",
                                        i === 1 &&
                                            "bg-brand-50/50 dark:bg-brand-950/20 text-brand-700 dark:text-brand-300 border-x border-brand-100 dark:border-brand-900/50",
                                    )}
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonTable.rows.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className="border-b border-border/50 last:border-b-0 group hover:bg-muted/20 transition-colors"
                            >
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className={cn(
                                            "p-5 text-sm",
                                            cellIndex === 0 &&
                                                "font-medium text-foreground",
                                            cellIndex === 1 &&
                                                "bg-brand-50/30 dark:bg-brand-950/10 font-mono font-medium text-brand-700 dark:text-brand-300 border-x border-brand-100 dark:border-brand-900/50 shadow-[inset_0_0_10px_rgba(0,0,0,0.01)]",
                                            cellIndex > 1 &&
                                                "text-muted-foreground font-mono",
                                            cell === "✓" &&
                                                "text-green-600 dark:text-green-500 font-bold",
                                            cell === "✗" &&
                                                "text-red-400 dark:text-red-500/50 opacity-50",
                                        )}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
