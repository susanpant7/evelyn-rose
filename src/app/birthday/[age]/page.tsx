import Gallery from '@/components/Gallery';
import PageLayout from '@/components/ui/PageLayout';

export default async function BirthdayAgePage({ params }: { params: Promise<{ age: string }> }) {
    const { age } = await params;

    // Dynamic key like "birthday_1", "birthday_2", etc.
    const titleKey = `birthday_${age}`;

    return (
        <div className="animate-fade-in">
            <PageLayout titleKey={titleKey} />
            <Gallery category={`birthday/${age}/images`} />
        </div>
    );
}
