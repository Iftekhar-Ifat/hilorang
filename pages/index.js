import BestSellerSection from "../components/HomePage/BestSellerSection";
import IntroSection from "../components/HomePage/IntroSection";
import ServiceSection from "../components/HomePage/ServiceSection";
import TrendingOutfitSection from "../components/HomePage/TrendingOutfitSection";

export default function Home() {
    return (
        <div className="md:px-24 flex flex-col space-y-20">
            <IntroSection />
            <BestSellerSection />
            <TrendingOutfitSection />
            <ServiceSection />
        </div>
    );
}
