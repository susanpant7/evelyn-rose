import 'server-only';
import Image from 'next/image';
import cloudinary from '@/lib/cloudinary';
import { CloudinaryImage } from '@/types/cloudinary.types';
import EmptyState from './ui/EmptyState';
import { unstable_noStore as noStore } from 'next/cache';

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

function getCloudinaryUrl(publicId: string) {
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/c_fill,g_auto,w_800,h_600,q_auto,f_auto/${publicId}`;
}

function formatTitle(publicId: string) {
    const filename = publicId.split('/').pop() ?? publicId;
    return filename
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

async function getImages(folder: string): Promise<CloudinaryImage[]> {
    try {
        noStore();
        const result = await cloudinary.search
            .expression(`folder:${folder}/*`)   // ← key fix: use search not api.resources
            .sort_by('public_id', 'desc')
            .max_results(50)
            .execute();

        console.log(`Found ${result.resources.length} images in folder: ${folder}`);
        return result.resources;
    } catch (error) {
        console.error('Cloudinary fetch error:', error);
        return [];
    }
}

interface GalleryProps {
    category?: string;
}

export default async function Gallery({ category = 'home' }: GalleryProps) {
    const folder = `evelyn-rose/${category}/images`;
    console.log(folder);
    const images = await getImages(folder);

    if (images.length === 0) {
        return <EmptyState />;
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((img) => {
                    const title = formatTitle(img.public_id);
                    return (
                        <div
                            key={img.public_id}
                            className="glass animate-fade-in group rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className="relative aspect-4/3 overflow-hidden">
                                <Image
                                    src={getCloudinaryUrl(img.public_id)}
                                    alt={title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}