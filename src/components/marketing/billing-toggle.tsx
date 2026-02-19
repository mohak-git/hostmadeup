import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn } from "@/components/visuals/fade-in";

export type BillingType = "monthly" | "yearly";

interface BillingToggleProps {
    billing: BillingType;
    setBilling: (billing: BillingType) => void;
}

export function BillingToggle({ billing, setBilling }: BillingToggleProps) {
    return (
        <FadeIn delay={60}>
            <div className="flex justify-center mb-10">
                <Tabs
                    value={billing}
                    onValueChange={(v) => setBilling(v as BillingType)}
                >
                    <TabsList className="border border-border bg-muted/40 h-12">
                        <TabsTrigger value="monthly" className="px-5 text-sm">
                            Monthly
                        </TabsTrigger>
                        <TabsTrigger value="yearly" className="px-5 text-sm">
                            Yearly
                            <Badge
                                variant="secondary"
                                className="ml-2 text-xs bg-brand-500 text-white"
                            >
                                -33%
                            </Badge>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </FadeIn>
    );
}
