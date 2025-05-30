import Navbar from '../Components/Navbar';
import WelcomeBanner from '../Components/WelcomeBanner';
import InquiryPromoSection from '../Components/InquiryPromoSection';
import FeatureHighlights from '../Components/FeatureHighlights';
import PopularPackagesSection from '../Components/PopularPackagesSection';
import PilgrimJourneySection from '../Components/PilgrimJourneySection';
import UmrahBlogCarousel from '../Components/UmrahBlogCarousel';
import CustomerTestimonialsSlider from '../Components/CustomerTestimonialsSlider';
import InquiryForm from '../Components/InquiryForm';
import ReachUsCards from '../Components/ReachUsCards';
import MainFooter from '../Components/MainFooter';
import BookingDisclaimer from '../Components/BookingDisclaimer';



function Home() {
    return (
        <>
            <Navbar />
            <WelcomeBanner />
            <InquiryPromoSection />
            <FeatureHighlights />
            <PopularPackagesSection />
            <PilgrimJourneySection />
            <UmrahBlogCarousel />
            <CustomerTestimonialsSlider />
            <InquiryForm />
            <ReachUsCards />
            <MainFooter />
            <BookingDisclaimer />
        </>
    );
}

export default Home