import {
    AnnotationAction,
    Highlighter,
} from "@/components/ui/text-highlighter";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

interface FeatureHighlight {
    prefix?: string;
    highlight?: string;
    action?: AnnotationAction;
    suffix?: string;
}

export interface FeatureItem {
    title: string;
    description: string;
    highlights?: FeatureHighlight[];
    imageUrl?: string;
    imageAlt?: string;
}

interface FeatureCardProps {
    feature: FeatureItem;
    progress: number;
    index: number;
    total: number;
}

export function FeatureCard({
    feature,
    progress,
    index,
    total,
}: FeatureCardProps) {
    const imageUrl = feature.imageUrl?.trim() ?? "";
    const hasImage = Boolean(imageUrl);
    const src = hasImage ? imageUrl : "/features-placeholder.svg";
    const alt = hasImage ? feature.imageAlt || feature.title : feature.title;

    const opacity = Math.max(0, Math.min(1, progress));
    const scale = 0.98 + 0.02 * opacity;
    const isVisible = opacity > 0.01;

    return (
        <div
            className={cn(
                "relative rounded-3xl overflow-hidden w-full bg-background grid grid-cols-1 sm:grid-cols-2 gap-0",
                !isVisible && "pointer-events-none",
            )}
            style={{
                opacity,
                transform: `scale(${scale})`,
                transition: "opacity 150ms ease-out, transform 150ms ease-out",
                zIndex: isVisible ? 1 : 0,
                willChange: "opacity, transform",
            }}
        >
            <div className="absolute top-0 left-0 right-0 h-1 z-1 transition-colors duration-500 ease-out bg-secondary" />

            {/* Content */}
            <div className="relative p-8 lg:p-12 xl:p-16 flex flex-col justify-center overflow-hidden">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
                    {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-6 max-w-lg">
                    {feature.description}
                </p>

                {/* Highlights */}
                {feature.highlights && feature.highlights.length > 0 && (
                    <ul className="space-y-2.5 mb-4">
                        {feature.highlights.map(
                            ({ prefix, highlight, action, suffix }, hIndex) => (
                                <li
                                    key={hIndex}
                                    className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                                >
                                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold bg-secondary">
                                        <Check
                                            className="w-3 h-3"
                                            strokeWidth={3}
                                        />
                                    </span>
                                    <p>
                                        <span>{prefix}</span>
                                        <Highlighter action={action}>
                                            {highlight}
                                        </Highlighter>
                                        <span>{suffix}</span>
                                    </p>
                                </li>
                            ),
                        )}
                    </ul>
                )}
            </div>

            <div className="relative h-60 sm:h-90 overflow-hidden bg-linear-to-br from-secondary/20 to-secondary/5">
                <Image src={src} alt={alt} fill className="object-cover" />
            </div>
        </div>
    );
}
