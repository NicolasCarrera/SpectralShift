import { ImageDisplay } from "../components/ImageDisplay";
import UploadWidget from "../components/UploadWidget";
import { useImage } from "../hooks/useImage";
import { useTranslations } from "../hooks/useTranslations";

export default function Playground() {
  const { publicId } = useImage();
  const { t } = useTranslations();
  const playground = t('playground');

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-16 p-8'>
      <div className="flex flex-col items-center gap-10">
        <div
          className='aspect-square w-full bg-orange-800 bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 border-dashed border-2 border-orange-600 dark:border-gray-600'
        >
          {
            publicId &&
            <ImageDisplay publicId={publicId} />
          }
        </div>
        <UploadWidget />
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <ul className="list-decimal text-xl md:ml-16 flex flex-col gap-5">
          {
            playground.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}