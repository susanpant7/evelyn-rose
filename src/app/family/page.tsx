import Gallery from '@/components/Gallery';
import PageLayout from '@/components/ui/PageLayout';

export default function FamilyPage() {
    return (
        <div className="animate-fade-in">
            <PageLayout titleKey="family" />
            <Gallery category="family" />
        </div>
    );
}
