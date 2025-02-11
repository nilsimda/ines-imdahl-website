import { OfferingsCard } from "@monorepo/shared/components"

const Offerings = ({ offerings, name }) => {
    return (
        <section id="offerings">
            <h3 className="text-2xl font-bold text-center mb-16">Angebote</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {offerings.map((offering, index) => (
                    <OfferingsCard
                        key={index}
                        offering={offering}
                        name={name}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Offerings;
