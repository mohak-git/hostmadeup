"use client";

import { FadeIn } from "@/components/visuals/fade-in";
import { SectionHeading } from "@/components/visuals/section-heading";
import { useCallback, useEffect, useRef, useState } from "react";
import { FeatureCard, type FeatureItem } from "./feature-card";

interface FeaturesProps {
    title: string;
    titleHighlight: string;
    description: string;
    features?: FeatureItem[];
}

const FeaturesData: FeatureItem[] = [
    {
        title: "Blazing Fast Load Times",
        imageUrl:
            "https://images.unsplash.com/photo-1519052537078-e6302a4968d4",
        description:
            "Our LiteSpeed-powered infrastructure delivers sub-second page loads with built-in caching, HTTP/3, and edge optimization that keeps your visitors engaged.",
        highlights: [
            {
                highlight: "99.9%",
                suffix: "uptime guarantee with automated failover",
            },
            { prefix: "Global CDN with 200+ edge locations" },
            { prefix: "NVMe SSD storage for instant I/O" },
        ],
    },
    {
        title: "Fortified From Day One",
        description:
            "Every layer of your stack is protected with enterprise-grade security. Free SSL, WAF, DDoS mitigation, and real-time threat monitoring come standard.",
        highlights: [
            { prefix: "Free SSL certificates with auto-renewal" },
            { prefix: "AI-powered Web Application Firewall" },
            { prefix: "Real-time malware scanning & removal" },
        ],
        imageUrl: "",
    },
    {
        title: "Scale Without Thinking",
        description:
            "Automatically handle traffic spikes without manual intervention. Our elastic infrastructure scales your resources in real-time so you only pay for what you use.",
        highlights: [
            { prefix: "Instant resource scaling during traffic surges" },
            { prefix: "Pay-per-use billing with no overage charges" },
            { prefix: "Load balancing across multiple zones" },
        ],
        imageUrl: "",
    },
    {
        title: "Humans, Not Bots",
        description:
            "Our certified engineers are available around the clock. Average response time under 5 minutes with a 98% satisfaction rating from real customers.",
        highlights: [
            { prefix: "Live chat, phone & ticket support 24/7/365" },
            { prefix: "Average response time under 5 minutes" },
            { prefix: "Free managed migrations by our team" },
        ],
        imageUrl: "",
    },
];

export function Features({
    title,
    titleHighlight,
    description,
    features = FeaturesData,
}: FeaturesProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [cardProgress, setCardProgress] = useState<number[]>(() =>
        features.map((_, i) => (i === 0 ? 1 : 0)),
    );

    const handleScroll = useCallback(() => {
        const scrollCont = scrollContainerRef.current;
        if (!scrollCont) return;

        const rect = scrollCont.getBoundingClientRect();
        const scrollableHeight = scrollCont.scrollHeight - window.innerHeight;
        if (scrollableHeight <= 0) return;

        const scrolled = -rect.top;
        const totalProgress = Math.max(
            0,
            Math.min(1, scrolled / scrollableHeight),
        );

        const count = features.length;
        const segmentSize = 1 / count;

        const newProgress = features.map((_, i) => {
            const segStart = i * segmentSize;
            const segEnd = segStart + segmentSize;

            if (i === count - 1) {
                if (totalProgress < segStart) {
                    const fadeStart = segStart - segmentSize * 0.3;
                    if (totalProgress >= fadeStart)
                        return (
                            (totalProgress - fadeStart) / (segStart - fadeStart)
                        );
                    return 0;
                }
                return 1;
            }

            if (totalProgress < segStart) {
                if (i > 0) {
                    const fadeStart = segStart - segmentSize * 0.3;
                    if (totalProgress >= fadeStart)
                        return (
                            (totalProgress - fadeStart) / (segStart - fadeStart)
                        );
                }
                return i === 0 ? 1 : 0;
            }

            if (totalProgress >= segEnd) {
                const fadeEnd = segEnd + segmentSize * 0.3;
                if (totalProgress <= fadeEnd)
                    return 1 - (totalProgress - segEnd) / (fadeEnd - segEnd);
                return 0;
            }

            return 1;
        });

        setCardProgress(newProgress);
    }, [features]);

    useEffect(() => {
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div
            ref={scrollContainerRef}
            className="container max-w-7xl mx-auto px-6 lg:px-12 py-20"
            style={{ height: `${(features.length + 1) * 65}vh` }}
        >
            <FadeIn className="sticky top-0 sm:top-[15vh] pb-0.5">
                <SectionHeading
                    title={title}
                    highlight={titleHighlight}
                    description={description}
                />
            </FadeIn>

            {features.map((feature, index) => (
                <div
                    key={feature.title}
                    className="sticky top-[20vh] md:top-[35vh] lg:top-[38vh] flex items-center pb-8"
                >
                    <FadeIn className="w-full">
                        <FeatureCard
                            feature={feature}
                            progress={cardProgress[index]}
                            index={index}
                            total={features.length}
                        />
                    </FadeIn>
                </div>
            ))}
        </div>
    );
}
