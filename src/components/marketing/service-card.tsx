"use client";

import { Button } from "@/components/ui/button";
import {
    Highlighter,
    type AnnotationAction,
} from "@/components/ui/text-highlighter";
import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceHighlight {
    prefix?: string;
    highlight?: string;
    action?: AnnotationAction;
    suffix?: string;
}

export interface ServiceItem {
    title: string;
    imageUrl?: string;
    imageAlt?: string;
    highlights?: ServiceHighlight[];
    cta?: { label: string; href: string };
}

interface ServiceCardProps {
    service: ServiceItem;
    isReversed?: boolean;
}

export function ServiceCard({ service, isReversed = false }: ServiceCardProps) {
    const imageUrl = service.imageUrl?.trim() ?? "";
    const hasImage = Boolean(imageUrl);
    const src = hasImage ? imageUrl : "/services-placeholder.svg";
    const alt = hasImage ? service.imageAlt || service.title : service.title;

    return (
        <div
            className={cn(
                "flex flex-col items-center gap-8 lg:gap-12 rounded-2xl border border-border/60 bg-card p-6 md:p-10 shadow-lg shadow-black/20",
                isReversed ? "sm:flex-row-reverse" : "sm:flex-row",
            )}
        >
            {/* Image */}
            <div className="relative w-full sm:w-2/5 aspect-video h-40 sm:h-65 rounded-xl overflow-hidden bg-muted border border-border/40 ">
                <Image src={src} alt={alt} fill className="object-cover" />
            </div>

            <div className="w-full lg:w-3/5 flex flex-col items-start">
                {/* Title */}
                <h3 className="font-serif text-2xl lg:text-3xl tracking-tight leading-snug mb-5">
                    {service.title}
                </h3>

                {/* Highlights */}
                {service.highlights && service.highlights.length > 0 && (
                    <ul className="space-y-2.5 mb-4">
                        {service.highlights.map(
                            ({ prefix, highlight, suffix, action }, hIndex) => (
                                <li
                                    key={hIndex}
                                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                                >
                                    <span className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-brand-500/10 text-brand-600">
                                        <Check
                                            className="w-3 h-3"
                                            strokeWidth={3}
                                        />
                                    </span>
                                    <span>{prefix}</span>
                                    <Highlighter action={action}>
                                        {highlight}
                                    </Highlighter>
                                    <span>{suffix}</span>
                                </li>
                            ),
                        )}
                    </ul>
                )}

                {/* CTA */}
                {service.cta && (
                    <Button
                        asChild
                        variant="link"
                        className="group h-auto text-brand-600 hover:text-brand-500 hover:bg-transparent hover:no-underline transition-colors"
                    >
                        <Link
                            href={service.cta.href}
                            className="inline-flex items-center gap-2 text-lg"
                        >
                            <span className="border-b border-dotted border-current pb-0.5">
                                {service.cta.label}
                            </span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-125" />
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
}
