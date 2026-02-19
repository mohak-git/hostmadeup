const offers = ["Limited Time Offer: Get 50% Off on All Premium Plans"];

export const TopOfferSection = () => {
    return (
        <div className="w-full bg-secondary text-primary-foreground text-center py-2 text-sm font-medium tracking-wide overflow-x-hidden">
            <p className="m-0 animate-marquee">
                {offers.map((text, index) => (
                    <span key={index} className="flex items-center">
                        {text}
                    </span>
                ))}
            </p>
        </div>
    );
};
