import { cn } from "@/lib/utils";

interface BackgroundBlobsProps {
    className?: string;
}

export function BackgroundBlobs({ className }: BackgroundBlobsProps) {
    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none",
                className,
            )}
        >
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000" />
        </div>
    );
}

export function GridPattern({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none",
                className,
            )}
        />
    );
}
