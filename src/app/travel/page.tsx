import Gallery from '@/components/Gallery';
import PageLayout from '@/components/ui/PageLayout';

export default function TravelPage() {
    return (
        <div className="animate-fade-in">
            <PageLayout titleKey="travel" />
            <Gallery category="Travel" />
        </div>
    );
}
