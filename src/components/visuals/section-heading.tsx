interface SectionHeadingProps {
    title: string;
    highlight: string;
    description: string;
}

export function SectionHeading({
    title,
    highlight,
    description,
}: SectionHeadingProps) {
    return (
        <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                {title} <br />
                <span className="text-brand-600">{highlight}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {description}
            </p>
        </div>
    );
}
