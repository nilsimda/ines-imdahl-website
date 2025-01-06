import BackgroundImage from '../ui/BackgroundImage';
import Header from '../ui/Header';
import Sidebar from '../ui/Sidebar';
import Footer from '../ui/Footer';
import imageUrl from '../../assets/pink.webp';
import logoImage from '../../assets/name.webp';

function LandingPage({ }) {
    return (
        <div className="relative min-h-screen flex">
            <BackgroundImage imageUrl={imageUrl} />

            <div className="w-128 flex flex-col">
                <Header logoImage={logoImage} />

                <div className="flex-1">
                    <Sidebar logoUrl={logoImage} />
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <Footer />
            </div>
        </div>
    );
}

export default LandingPage;