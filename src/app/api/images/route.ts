import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const folder = searchParams.get('folder') || 'evelyn-rose';

        const result = await cloudinary.api.resources({
            type: 'upload',
            prefix: folder.endsWith('/') ? folder : `${folder}/`,
            max_results: 100
        });

        return NextResponse.json({ images: result.resources });
    } catch (error) {
        console.error('Cloudinary fetch error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch images' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const { file, folder } = await request.json();

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        const uploadResponse = await cloudinary.uploader.upload(file, {
            folder: folder || 'evelyn-rose',
        });

        return NextResponse.json(uploadResponse);
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        return NextResponse.json(
            { error: 'Failed to upload image' },
            { status: 500 }
        );
    }
}