import Gallery from '@/components/Gallery';
import PageLayout from '@/components/ui/PageLayout';

export default function PaasniPage() {
    return (
        <div className="animate-fade-in">
            <PageLayout titleKey="paasni" />
            <Gallery category="Paasni" />
        </div>
    );
}
