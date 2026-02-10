import {
    PageHero,
    Section,
    SectionHeader,
    SimpleCardGrid,
    TimelineGrid,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { transferBenefits, transferTimeline } from "@/constants/domains";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Domain Transfer",
    description:
        "Transfer your domains to Hostmadeup. Free year extension and no downtime.",
};

export default function DomainTransferPage() {
    return (
        <>
            <PageHero
                badge="Domain Transfer"
                title="Transfer Your Domains"
                description="Move your domains to Hostmadeup with zero downtime. Get a free year extension on all transfers."
            />

            <Section>
                <div className="max-w-md mx-auto">
                    <div className="border border-border p-8">
                        <h3 className="font-bold text-lg mb-4 text-center">
                            Start Your Transfer
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium mb-2 block">
                                    Domain Name
                                </label>
                                <Input
                                    placeholder="yourdomain.com"
                                    className="h-12"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-2 block">
                                    Authorization Code (EPP)
                                </label>
                                <Input
                                    type="password"
                                    placeholder="Enter your auth code"
                                    className="h-12"
                                />
                            </div>
                            <Button className="w-full h-12">
                                Verify & Transfer
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionHeader
                    badge="Process"
                    title="Transfer Timeline"
                    centered
                />
                <TimelineGrid items={transferTimeline} />
            </Section>

            <Section background="card">
                <SectionHeader
                    badge="Benefits"
                    title="Transfer Benefits"
                    centered
                />
                <SimpleCardGrid
                    items={transferBenefits}
                    columns={4}
                    centered
                    background="background"
                />
            </Section>
        </>
    );
}
