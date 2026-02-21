import Gallery from '@/components/Gallery';
import PageLayout from '@/components/ui/PageLayout';
import BirthdayNavigation from '@/components/BirthdayNavigation';

export default function BirthdayPage() {
    return (
        <div className="animate-fade-in">
            <PageLayout titleKey="birthday" />

            <BirthdayNavigation />

            <Gallery category="birthday/images" />
        </div>
    );
}
