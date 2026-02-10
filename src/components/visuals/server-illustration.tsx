export function ServerIllustration({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient
                    id="server-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor="var(--color-brand-400)" />
                    <stop offset="100%" stopColor="var(--color-brand-600)" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="15" result="blur" />
                    <feComposite
                        in="SourceGraphic"
                        in2="blur"
                        operator="over"
                    />
                </filter>
            </defs>

            {/* Base Platform */}
            <path
                d="M50 200 L200 250 L350 200 L200 150 Z"
                fill="var(--color-card)"
                stroke="var(--color-border)"
                strokeWidth="2"
                className="animate-float"
                style={{ animationDuration: "6s" }}
            />
            {/* Shadow */}
            <ellipse
                cx="200"
                cy="270"
                rx="100"
                ry="20"
                fill="black"
                opacity="0.2"
                filter="url(#glow)"
                className="animate-pulse-slow"
            />

            {/* Server Stack Layers */}
            {/* Bottom Layer */}
            <g
                className="animate-float"
                style={{ animationDelay: "0.2s", animationDuration: "5.8s" }}
            >
                <path
                    d="M100 160 L200 190 L300 160 L200 130 Z"
                    fill="var(--color-card)"
                    stroke="var(--color-brand-500)"
                    strokeWidth="1"
                    opacity="0.8"
                />
                <path
                    d="M100 160 L100 170 L200 200 L300 170 L300 160"
                    fill="none"
                    stroke="var(--color-brand-500)"
                    strokeWidth="1"
                    opacity="0.6"
                />
            </g>

            {/* Middle Layer */}
            <g
                className="animate-float"
                style={{ animationDelay: "0.4s", animationDuration: "6.2s" }}
            >
                <path
                    d="M100 130 L200 160 L300 130 L200 100 Z"
                    fill="var(--color-card)"
                    stroke="var(--color-brand-400)"
                    strokeWidth="1"
                    opacity="0.9"
                />
                <path
                    d="M100 130 L100 140 L200 170 L300 140 L300 130"
                    fill="none"
                    stroke="var(--color-brand-400)"
                    strokeWidth="1"
                    opacity="0.6"
                />
            </g>

            {/* Top Layer (Active) */}
            <g
                className="animate-float"
                style={{ animationDelay: "0s", animationDuration: "6s" }}
            >
                <path
                    d="M100 100 L200 130 L300 100 L200 70 Z"
                    fill="url(#server-grad)"
                    filter="url(#glow)"
                    opacity="0.9"
                />
                <path
                    d="M100 100 L100 110 L200 140 L300 110 L300 100"
                    fill="none"
                    stroke="var(--color-brand-300)"
                    strokeWidth="1"
                />

                {/* Active Indicator */}
                <circle
                    cx="200"
                    cy="85"
                    r="4"
                    fill="#ffffff"
                    className="animate-ping"
                />
                <circle cx="200" cy="85" r="3" fill="#ffffff" />
            </g>

            {/* Connecting Lines */}
            <line
                x1="200"
                y1="70"
                x2="200"
                y2="40"
                stroke="var(--color-brand-300)"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="animate-pulse"
            />
            <circle cx="200" cy="40" r="2" fill="var(--color-brand-300)" />
        </svg>
    );
}
