import { OfferingsCard } from "@monorepo/shared/components"

const Offerings = ({ offerings, name }) => {
    // Determine if we should use 3 columns based on offerings length
    const isUneven = offerings.length % 2 !== 0;
    const gridCols = isUneven ? "lg:grid-cols-3" : "lg:grid-cols-2";
    return (
        <section id="offerings">
            <h3 className="text-2xl font-bold text-center mb-16">Angebote</h3>
            <div className={`grid md:grid-cols-2 ${gridCols} gap-8 mx-32`}>
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
