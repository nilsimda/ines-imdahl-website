import { BackgroundImage, Header, DynamicNavigation, Footer, TearEffect } from '@monorepo/shared/components';

function LandingPage({ backgroundImage, backgroundImageSmall, logoImage, logoImageSmall, words, gradientFrom, gradientTo, altName, fotoCredit, socialLinks }) {
    return (
        <div className="relative min-h-screen flex">
            <BackgroundImage
                imageUrl={backgroundImage}
                imageUrlSmall={backgroundImageSmall}
                gradientFrom={gradientFrom}
                gradientTo={gradientTo}
                altName={altName}
                fotoCredit={fotoCredit}
            />

            <div className="w-128 flex flex-col">
                <Header logoImage={logoImage} logoImageSmall={logoImageSmall} words={words} />

                <div className="flex-1">
                    <DynamicNavigation logoUrl={logoImageSmall} />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <Footer socialLinks={socialLinks} />
            </div>
        </div>
    );
}

export default LandingPage;