import Gallery from '@/components/Gallery';
import PageLayout from '@/components/ui/PageLayout';

export default function NwaaranPage() {
    return (
        <div className="animate-fade-in">
            <PageLayout titleKey="nwaaran" />
            <Gallery category="Paasni" />
        </div>
    );
}
// Note: Category "Paasni" used here as a placeholder for data until Nwaaran data is added to imageData.
