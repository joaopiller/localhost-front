import BannerSection from "./BannerSection";
import InfoSection from "./InfoSection";

interface AccommodationProps {
    image: string;
    title: string;
    location: string;
    price: string;
}

export default function Accommodation({image, title, location, price}: AccommodationProps) {
    return (
        <div 
            style={{
                width: '19.063rem',
                height: '25.5rem',
            }}
        >
            <BannerSection image={image} />
            <InfoSection title={title} location={location} price={price} />
        </div>
    )
}