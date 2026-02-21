import Gallery from '@/components/Gallery';
import PageLayout from '@/components/ui/PageLayout';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <PageLayout titleKey="home" />
      <Gallery />
    </div>
  );
}
