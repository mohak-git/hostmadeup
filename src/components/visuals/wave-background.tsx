export function WaveBackground() {
    return (
        <svg
            className="absolute z-1 inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 2000 900"
        >
            <defs>
                <linearGradient
                    id="wave-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        stopColor="var(--ill-grad-start)"
                        stopOpacity="0.6"
                    />
                    <stop
                        offset="50%"
                        stopColor="var(--ill-grad-mid)"
                        stopOpacity="0.5"
                    />
                    <stop
                        offset="100%"
                        stopColor="var(--ill-grad-end)"
                        stopOpacity="0.8"
                    />
                </linearGradient>
            </defs>
            <path
                d="M 2000,0 L 500,0 C 900,100 700,450 1200,600 C 1600,700 1750,600 2000,850 Z"
                fill="url(#wave-grad)"
                opacity={0.8}
            />
            {/* <path
                d="M 0,0 L 300,0 C 270,80 200,180 0,135 Z"
                fill="url(#wave-grad)"
                opacity={0.5}
            />
            <path
                d="M 0,900 L 0,600 C 250,700 500,850 700,900 Z"
                fill="url(#wave-grad)"
                opacity={0.6}
            /> */}
        </svg>
    );
}

export function WavyWave() {
    return (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform translate-y-px z-20 pointer-events-none">
            <svg
                className="relative block w-[200%] h-[60px] md:h-[100px] lg:h-[150px] animate-wave"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2400 120"
                preserveAspectRatio="none"
            >
                <path
                    d="M 0 0 V 46.29 c 47.79 22.2 103.59 32.17 158 28 c 70.36 -5.37 136.33 -33.31 206.8 -37.5 C 438.64 32.43 512.34 53.67 583 72.05 c 69.27 18 138.3 24.88 209.4 13.08 c 36.15 -6 69.85 -17.84 104.45 -29.34 C 989.49 25 1104 -10 1200 50 V 120 H 0 M 1200 0 V 50 c 47.79 22.2 103.59 32.17 158 28 c 70.36 -5.37 136.33 -33.31 206.8 -37.5 C 1638.64 32.43 1712.34 53.67 1783 72.05 c 69.27 18 138.3 24.88 209.4 13.08 c 36.15 -6 69.85 -17.84 104.45 -29.34 C 2189.49 25 2313 -14.29 2400 52.47 V 120 H 1200 Z"
                    className="fill-(--accent-fill-heavy)"
                />
            </svg>
        </div>
    );
}
