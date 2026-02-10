import { comparisonTable } from "@/config/features";
import { cn } from "@/lib/utils";

interface ComparisonTableProps {
    className?: string;
}

export function ComparisonTable({ className }: ComparisonTableProps) {
    return (
        <div className={cn("border border-border overflow-x-auto", className)}>
            <table className="w-full">
                <thead>
                    <tr className="border-b border-border bg-muted/50">
                        {comparisonTable.headers.map((header, i) => (
                            <th
                                key={header}
                                className={cn(
                                    "p-4 text-left text-xs uppercase tracking-wider font-mono",
                                    i === 1 && "bg-accent/50",
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
                            className="border-b border-border last:border-b-0"
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={cn(
                                        "p-4 text-sm",
                                        cellIndex === 0 && "font-medium",
                                        cellIndex === 1 &&
                                            "bg-accent/30 font-mono",
                                        cellIndex > 1 &&
                                            "text-muted-foreground font-mono",
                                        cell === "✓" && "text-foreground",
                                        cell === "✗" && "text-muted-foreground",
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
    );
}
