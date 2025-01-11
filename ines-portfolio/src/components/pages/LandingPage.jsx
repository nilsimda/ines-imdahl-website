import BackgroundImage from '../ui/BackgroundImage';
import Header from '../ui/Header';
import DynamicNavigation from '../ui/DynamicNavigation';
import Footer from '../ui/Footer';
import imageUrl from '../../assets/pink.webp';
import imageUrlSmall from '../../assets/pink_800.webp';
import logoImage from '../../assets/name.webp';
import logoImageSmall from '../../assets/name_300.webp'

function LandingPage({ }) {
    return (
        <div className="relative min-h-screen flex">
            <BackgroundImage imageUrl={imageUrl} imageUrlSmall={imageUrlSmall} />

            <div className="w-128 flex flex-col">
                <Header logoImage={logoImage} logoImageSmall={logoImageSmall} />

                <div className="flex-1">
                    <DynamicNavigation />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <Footer />
            </div>
        </div>
    );
}

export default LandingPage;