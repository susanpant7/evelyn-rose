import Gallery from '@/components/Gallery';
import PageLayout from '@/components/ui/PageLayout';

export default async function BirthdayAgePage({ params }: { params: Promise<{ age: string }> }) {
    const { age } = await params;

    const titleKey = `birthday_${age}`;

    return (
        <div className="animate-fade-in">
            <PageLayout titleKey={titleKey} />
            <Gallery category={`birthday/${age}`} />
        </div>
    );
}
