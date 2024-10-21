import { useImage } from "../hooks/useImage";
import { useTranslations } from "../hooks/useTranslations";
import 'two-up-element'
import { defaultMode } from "../utils/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { ImageDisplay } from "../components/ImageDisplay";

export default function Home() {
  const { publicId } = useImage();
  const { t } = useTranslations();
  const home = t('home');

  const image = defaultMode(publicId ? publicId : 'samples/people/smiling-man')

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-16 p-8'>
      <div className="flex flex-col justify-center space-y-4 gap-10">
        <h1 className="text-5xl font-bold text-left dark:font-creepster dark:tracking-widest">{home.title}</h1>
        <p className='text-lg text-left'>{home.paragraph}</p>
        <a
          className='bg-orange-500 border border-orange-800 focus:outline-none hover:bg-orange-600 focus:ring-4 focus:ring-orange-900 rounded-full text-2lg px-10 py-4 me-2 mb-2 w-max dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
          href="#playground"
        >
          GET STARTED
        </a>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <two-up>
          <AdvancedImage cldImg={image} />
          <ImageDisplay publicId={publicId ? publicId : 'samples/people/smiling-man'} />
        </two-up>
      </div>
    </div>
  )
}