import Image from 'next/image';

export const ImageDisplay = ({ resources }: { resources: any[] }) => {
    return (
        <div>
            {resources.map((resource) => (
                <div key={resource.public_id}>
                    <Image
                        src={resource.secure_url} // or build the URL with transformations
                        width={resource.width}
                        height={resource.height}
                        alt={`Image from Cloudinary folder ${resource.public_id}`}
                        priority
                    />
                </div>
            ))}
        </div>
    );
};