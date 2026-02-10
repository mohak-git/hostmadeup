"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Cpu, HardDrive, MemoryStick } from "lucide-react";
import * as React from "react";

const cpuOptions = [1, 2, 4, 8, 16];
const ramOptions = [1, 2, 4, 8, 16, 32];
const storageOptions = [25, 50, 100, 200, 400, 800];

interface VpsCalculatorProps {
    className?: string;
}

export function VpsCalculator({ className }: VpsCalculatorProps) {
    const [cpuIndex, setCpuIndex] = React.useState(1);
    const [ramIndex, setRamIndex] = React.useState(2);
    const [storageIndex, setStorageIndex] = React.useState(2);

    const cpu = cpuOptions[cpuIndex];
    const ram = ramOptions[ramIndex];
    const storage = storageOptions[storageIndex];

    // Calculate price based on resources
    const price = React.useMemo(() => {
        const cpuCost = cpu * 2.5;
        const ramCost = ram * 1.5;
        const storageCost = storage * 0.05;
        return (cpuCost + ramCost + storageCost).toFixed(2);
    }, [cpu, ram, storage]);

    return (
        <div className={cn("border border-border", className)}>
            {/* Header */}
            <div className="p-6 border-b border-border bg-card">
                <h3 className="font-bold text-lg mb-1">VPS Configuration</h3>
                <p className="text-sm text-muted-foreground">
                    Customize your virtual server resources
                </p>
            </div>

            {/* Sliders */}
            <div className="p-6 space-y-8">
                {/* CPU */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Cpu className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">
                                CPU Cores
                            </span>
                        </div>
                        <span className="font-mono text-lg font-bold">
                            {cpu} vCPU
                        </span>
                    </div>
                    <Slider
                        value={[cpuIndex]}
                        onValueChange={([v]) => setCpuIndex(v)}
                        max={cpuOptions.length - 1}
                        step={1}
                        className="**:[[role=slider]]:h-4 **:[[role=slider]]:w-4"
                    />
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                        {cpuOptions.map((opt) => (
                            <span key={opt}>{opt}</span>
                        ))}
                    </div>
                </div>

                {/* RAM */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <MemoryStick className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Memory</span>
                        </div>
                        <span className="font-mono text-lg font-bold">
                            {ram} GB
                        </span>
                    </div>
                    <Slider
                        value={[ramIndex]}
                        onValueChange={([v]) => setRamIndex(v)}
                        max={ramOptions.length - 1}
                        step={1}
                        className="**:[[role=slider]]:h-4 **:[[role=slider]]:w-4"
                    />
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                        {ramOptions.map((opt) => (
                            <span key={opt}>{opt}</span>
                        ))}
                    </div>
                </div>

                {/* Storage */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <HardDrive className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">
                                NVMe Storage
                            </span>
                        </div>
                        <span className="font-mono text-lg font-bold">
                            {storage} GB
                        </span>
                    </div>
                    <Slider
                        value={[storageIndex]}
                        onValueChange={([v]) => setStorageIndex(v)}
                        max={storageOptions.length - 1}
                        step={1}
                        className="**:[[role=slider]]:h-4 **:[[role=slider]]:w-4"
                    />
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                        {storageOptions.map((opt) => (
                            <span key={opt}>{opt}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Summary */}
            <div className="p-6 border-t border-border bg-accent/30">
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            CPU
                        </div>
                        <div className="font-mono font-bold">{cpu} vCPU</div>
                    </div>
                    <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            RAM
                        </div>
                        <div className="font-mono font-bold">{ram} GB</div>
                    </div>
                    <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            Storage
                        </div>
                        <div className="font-mono font-bold">{storage} GB</div>
                    </div>
                    <div>
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            Price
                        </div>
                        <div className="font-mono text-2xl font-bold">
                            ${price}/mo
                        </div>
                    </div>
                </div>
                <Button className="w-full" size="lg">
                    Deploy VPS
                </Button>
            </div>
        </div>
    );
}
