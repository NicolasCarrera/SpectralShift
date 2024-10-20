import { ImageDisplay } from "../components/ImageDisplay";
import UploadWidget from "../components/UploadWidget";
import { useImage } from "../hooks/useImage";
import { useTranslations } from "../hooks/useTranslations";

export default function Playground() {
  const { publicId } = useImage();
  const { t } = useTranslations();
  return (
    <div className='grid grid-cols-2 gap-10'>
      <div>
        <div
          className='bg-white dark:bg-gray-800 border-dashed border-2 border-gray- dark:border-gray-600 aspect-square max-w-[500px] max-h-[500px] mb-10'
        >
          {
            publicId &&
            <ImageDisplay publicId={publicId} />
          }
        </div>
        <UploadWidget />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iure praesentium ad id rem enim laboriosam, a ipsam atque suscipit possimus accusantium, eaque laudantium consequatur illo, voluptatum vel. Ratione, iste.</p>
    </div>
  )
}