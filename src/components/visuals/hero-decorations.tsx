export function HeroDecorations() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        >
            <div
                className="absolute -right-[15%] -top-[20%] h-[700px] w-[700px] rounded-full opacity-[0.1]"
                style={{
                    background:
                        "radial-gradient(circle, var(--color-brand-400) 0%, var(--color-brand-500) 35%, transparent 70%)",
                }}
            />

            <div
                className="absolute -bottom-[10%] -left-[10%] h-[500px] w-[500px] rounded-full opacity-[0.2]"
                style={{
                    background:
                        "radial-gradient(circle, var(--color-brand-300) 0%, transparent 70%)",
                }}
            />

            <svg
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <pattern
                        id="hero-grid"
                        x="0"
                        y="0"
                        width="80"
                        height="80"
                        patternUnits="userSpaceOnUse"
                    >
                        <line
                            x1="80"
                            y1="0"
                            x2="80"
                            y2="80"
                            stroke="var(--color-brand-500)"
                            strokeWidth="0.4"
                            opacity="0.4"
                        />
                        <line
                            x1="0"
                            y1="80"
                            x2="80"
                            y2="80"
                            stroke="var(--color-brand-500)"
                            strokeWidth="0.4"
                            opacity="0.4"
                        />
                    </pattern>

                    <radialGradient
                        id="hero-grid-fade"
                        cx="65%"
                        cy="35%"
                        r="55%"
                    >
                        <stop offset="0%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <mask id="hero-grid-mask">
                        <rect
                            width="100%"
                            height="100%"
                            fill="url(#hero-grid-fade)"
                        />
                    </mask>
                </defs>

                <rect
                    width="100%"
                    height="100%"
                    fill="url(#hero-grid)"
                    mask="url(#hero-grid-mask)"
                />
            </svg>
        </div>
    );
}
