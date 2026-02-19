import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Server } from "lucide-react";
import Link from "next/link";

function FooterColumn({
    title,
    links,
}: {
    title: string;
    links: { title: string; href: string }[];
}) {
    return (
        <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/30">
                {title}
            </p>
            <ul className="flex flex-col gap-3">
                {links.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className="text-sm text-white/50 transition-colors hover:text-white/90"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FooterBrand() {
    return (
        <div className="lg:col-span-1 xl:col-span-2 lg:w-80 shrink-0">
            <Link href="/" className="flex items-center gap-2 text-accent mb-5">
                <Server className="h-7 w-7" />
                <span className="font-mono text-xl font-extrabold">
                    {siteConfig.name.toUpperCase()}
                </span>
            </Link>

            <p className="max-w-3xs text-sm leading-6.5 text-white/40">
                Enterprise-grade infrastructure. Built for teams that demand
                reliability.
            </p>
        </div>
    );
}

function FooterBottom() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-center md:text-left border-t border-white/50">
            <span className="text-xs text-white/30">
                &copy; {currentYear} {siteConfig.name}, Inc. All rights
                reserved.
            </span>

            <div className="flex items-center gap-6 text-xs text-white/30">
                {["Privacy", "Terms", "Cookies"].map((item) => (
                    <Link
                        href={`/${item.toLowerCase()}`}
                        className="transition hover:text-white/60"
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#0a0a0a] pt-20 pb-6 font-sans">
            <div className="mx-auto max-w-8xl px-6 lg:px-12">
                <div className="flex flex-col gap-16 pb-16 md:flex-row lg:gap-12">
                    <FooterBrand />

                    <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
                        <FooterColumn
                            title="Hosting"
                            links={footerNav.hosting}
                        />
                        <FooterColumn title="VPS" links={footerNav.vps} />
                        <FooterColumn
                            title="Domains"
                            links={footerNav.domains}
                        />
                        <FooterColumn title="Email" links={footerNav.email} />
                        <FooterColumn
                            title="Company"
                            links={footerNav.company}
                        />
                        <FooterColumn title="Legal" links={footerNav.legal} />
                    </div>
                </div>

                <FooterBottom />
            </div>
        </footer>
    );
}
