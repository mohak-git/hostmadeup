import {
    PageHero,
    Section,
    SectionHeader,
    StatsBar,
} from "@/components/marketing";
import {
    statusDatacenters,
    statusServices,
    uptimeStats,
} from "@/constants/support";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "System Status",
    description:
        "Real-time status of all Hostmadeup services and infrastructure.",
};

export default function StatusPage() {
    return (
        <>
            <PageHero
                title="System Status"
                description="Real-time status of all services and infrastructure."
            />

            <Section background="card">
                <StatsBar stats={uptimeStats} variant="green" />
            </Section>

            <Section>
                <SectionHeader title="Service Status" centered />
                <div className="grid md:grid-cols-4 gap-0 border border-border">
                    {statusServices.map((service) => (
                        <div
                            key={service.name}
                            className="border-r border-b border-border p-4 flex items-center gap-3"
                        >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{service.name}</span>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeader title="Data Center Status" centered />
                <div className="grid md:grid-cols-3 gap-0 border border-border">
                    {statusDatacenters.map((dc) => (
                        <div
                            key={dc.name}
                            className="border-r border-b border-border p-4 flex items-center gap-3"
                        >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{dc.name}</span>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="card">
                <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                        All systems operational • Last updated:{" "}
                        {new Date().toLocaleTimeString()}
                    </p>
                </div>
            </Section>
        </>
    );
}
