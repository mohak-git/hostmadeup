import { Footer, Header } from "@/components/layout";
import {
    DomainSearchBar,
    Features,
    Hero,
    Pricing,
    Services,
} from "@/components/marketing";
import { HeroDecorations } from "@/components/visuals/hero-decorations";

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <section className="relative overflow-hidden bg-background font-sans z-0">
                    <div className="absolute inset-0 -z-10 bg-brand-500/20 [clip-path:polygon(0%_100%,100%_60%,100%_100%,0%_100%)]" />
                    <HeroDecorations />
                    <Hero
                        title="Launch Your Website"
                        titleHighlight={[
                            "Instantly",
                            "Effortlessly",
                            "Securely",
                            "Globally",
                        ]}
                        description="Fast, reliable & secure hosting built for creators. Deploy your site in seconds with our automated cloud infrastructure."
                        keyPoints={[
                            {
                                prefix: "Build your website ",
                                highlight: "instantly",
                                suffix: " with AI",
                            },
                            {
                                prefix: "Up to ",
                                highlight: "20x faster",
                                suffix: " website performance",
                            },
                            {
                                prefix: "Free SSL, email & daily backups included",
                            },
                        ]}
                        heroImage="/HeroImage-NoBG.png"
                        primaryCta={{
                            label: "View Plans & Pricing",
                            href: "/hosting/web",
                        }}
                        secondaryCta={{
                            label: "Chat with Sales",
                            href: "/contact",
                        }}
                    />
                </section>

                <section className="relative z-1 bg-brand-500/20">
                    <div className="absolute inset-0 -z-10 bg-background [clip-path:polygon(0%_45%,100%_45%,100%_100%,0%_100%)]" />
                    <div className="absolute inset-0 -z-10 bg-brand-500/20 [clip-path:polygon(0%_55%,100%_55%,100%_100%,0%_100%)]" />

                    <DomainSearchBar />
                </section>

                <section className="relative bg-brand-500/20">
                    <div className="absolute inset-0 bg-brand-200/90 [clip-path:polygon(0%_77.6%,100%_96%,100%_100%,0%_100%)]" />
                    <div className="absolute inset-0 bg-background [clip-path:polygon(0%_100%,100%_90%,100%_100%,0%_100%)]" />
                    <div className="absolute inset-0 bg-brand-500/30 [clip-path:polygon(0%_75%,80%_100%,65%_100%,0%_78%)]" />

                    <Services
                        title="Everything You Need to"
                        titleHighlight="Ship & Scale"
                        description="Infrastructure that grows with you."
                    />
                </section>

                <section className="relative">
                    <div className="absolute inset-0 bg-brand-500/30 [clip-path:polygon(65%_0%,80%_0%,62%_100%,12%_100%)]" />

                    <Features
                        title="Why Teams Choose"
                        titleHighlight="Hostmadeup"
                        description="Enterprise-grade power without enterprise nonsense."
                    />
                </section>

                <section className="relative">
                    <div className="absolute inset-0 bg-brand-500/30 [clip-path:polygon(0%_1%,100%_11%,100%_72%,0%_72%)]" />
                    <div className="absolute inset-0 bg-brand-500/30 [clip-path:polygon(12%_0%,62%_0%,62%_7%,11.8%_2%)]" />
                    <Pricing />
                </section>

                {/* <section className="relative">
                    <div className="absolute inset-0 bg-brand-500/30 [clip-path:polygon(10%_2%,55%_2%,54%_98%,8%_98%)]" />
                    <div className="absolute inset-0 bg-brand-500/30 [clip-path:polygon(55.5%_2%,90%_2%,89%_98%,54.5%_98%)]" />
                    <Stats />
                    </section> */}
            </main>
            <Footer />
        </>
    );
}
