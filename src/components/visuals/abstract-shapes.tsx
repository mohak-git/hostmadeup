import { cn } from "@/lib/utils";

interface ShapeProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export function DotsPattern({ className, ...props }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("text-brand-500/20", className)}
            {...props}
        >
            <circle cx="2" cy="2" r="2" fill="currentColor" />
            <circle cx="22" cy="2" r="2" fill="currentColor" />
            <circle cx="42" cy="2" r="2" fill="currentColor" />
            <circle cx="62" cy="2" r="2" fill="currentColor" />
            <circle cx="82" cy="2" r="2" fill="currentColor" />

            <circle cx="2" cy="22" r="2" fill="currentColor" />
            <circle cx="22" cy="22" r="2" fill="currentColor" />
            <circle cx="42" cy="22" r="2" fill="currentColor" />
            <circle cx="62" cy="22" r="2" fill="currentColor" />
            <circle cx="82" cy="22" r="2" fill="currentColor" />

            <circle cx="2" cy="42" r="2" fill="currentColor" />
            <circle cx="22" cy="42" r="2" fill="currentColor" />
            <circle cx="42" cy="42" r="2" fill="currentColor" />
            <circle cx="62" cy="42" r="2" fill="currentColor" />
            <circle cx="82" cy="42" r="2" fill="currentColor" />
        </svg>
    );
}

export function WavePattern({ className, ...props }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("text-brand-500/20", className)}
            {...props}
        >
            <path
                d="M0 10C20 10 20 0 40 0C60 0 60 10 80 10C100 10 100 0 120 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M0 20C20 20 20 10 40 10C60 10 60 20 80 20C100 20 100 10 120 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
            />
        </svg>
    );
}

export function CirclePattern({ className, ...props }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("text-brand-500/20", className)}
            {...props}
        >
            <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
            />
            <circle
                cx="50"
                cy="50"
                r="30"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.6"
            />
            <circle
                cx="50"
                cy="50"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.3"
            />
        </svg>
    );
}
