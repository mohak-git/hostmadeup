import { PageHero, Section, SectionHeader } from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";
import { contactDepartments } from "@/constants/support";
import { Mail, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: `Get in touch with ${siteConfig.name}. We're here to help 24/7.`,
};

export default function ContactPage() {
    return (
        <>
            <PageHero
                title="Get in Touch"
                description="Have a question? Our team is available 24/7 to help you succeed."
            />

            <Section>
                <SectionHeader title="Reach Out" centered />
                <div className="grid md:grid-cols-3 gap-0 border border-border">
                    <div className="border-r border-border last:border-r-0 p-6 text-center">
                        <MessageCircle className="h-8 w-8 mx-auto mb-4" />
                        <h3 className="font-bold mb-1">Live Chat</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Instant support 24/7
                        </p>
                        <Button variant="outline" size="sm">
                            Start Chat
                        </Button>
                    </div>
                    <div className="border-r border-border last:border-r-0 p-6 text-center">
                        <Mail className="h-8 w-8 mx-auto mb-4" />
                        <h3 className="font-bold mb-1">Email Support</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            &lt;4 hour response
                        </p>
                        <Button variant="outline" size="sm">
                            Send Email
                        </Button>
                    </div>
                    <div className="border-r border-border last:border-r-0 p-6 text-center">
                        <Phone className="h-8 w-8 mx-auto mb-4" />
                        <h3 className="font-bold mb-1">Phone Support</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Business hours
                        </p>
                        <Button variant="outline" size="sm">
                            Call Now
                        </Button>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionHeader title="Direct Contact" centered />
                <div className="grid md:grid-cols-3 gap-0 border border-border">
                    {contactDepartments.map((dept) => (
                        <div
                            key={dept.title}
                            className="border-r border-border last:border-r-0 p-6 text-center"
                        >
                            <h3 className="font-bold mb-1">{dept.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                                {dept.desc}
                            </p>
                            <p className="font-mono text-sm">{dept.email}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="card">
                <SectionHeader title="Send a Message" centered />
                <div className="max-w-md mx-auto">
                    <div className="border border-border p-8 bg-background">
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    placeholder="First Name"
                                    className="h-12"
                                />
                                <Input
                                    placeholder="Last Name"
                                    className="h-12"
                                />
                            </div>
                            <Input
                                placeholder="Email Address"
                                className="h-12"
                                type="email"
                            />
                            <textarea
                                className="w-full h-32 border border-border bg-background px-4 py-3 resize-none"
                                placeholder="Your message..."
                            />
                            <Button className="w-full h-12">
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
