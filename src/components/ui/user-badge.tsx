"use client";

import Image from "next/image";

interface UserBadgeProps {
    images?: string[];
}

const img = [
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
];

export const UserBadge = ({ images = img }: UserBadgeProps) => {
    return (
        <div className="flex">
            {images.map((image, idx) => (
                <div
                    key={idx}
                    className="relative -mr-4 transition-all duration-300 ease-out hover:z-2"
                >
                    <Image
                        height={100}
                        width={100}
                        src={image}
                        alt={`${idx}`}
                        className="h-10 w-10 rounded-full border-2 border-white object-cover object-top transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl"
                    />
                </div>
            ))}
        </div>
    );
};
