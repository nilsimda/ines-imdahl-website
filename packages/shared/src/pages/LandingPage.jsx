import { BackgroundImage, Header, DynamicNavigation, Footer } from '@monorepo/shared/components';

function LandingPage({ backgroundImage, backgroundImageSmall, logoImage, logoImageSmall }) {
    return (
        <div className="relative min-h-screen flex">
            <BackgroundImage imageUrl={backgroundImage} imageUrlSmall={backgroundImageSmall} />

            <div className="w-128 flex flex-col">
                <Header logoImage={logoImage} logoImageSmall={logoImageSmall} />

                <div className="flex-1">
                    <DynamicNavigation logoUrl={logoImageSmall} />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <Footer />
            </div>
        </div>
    );
}

export default LandingPage;