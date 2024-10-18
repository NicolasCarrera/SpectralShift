import { useTranslations } from "../hooks/useTranslations";
import 'two-up-element'

export default function Home() {
  const { t } = useTranslations();
  return (
    <div className='grid grid-cols-2 gap-10'>
      <div>
        <h1 className="text-5xl font-bold mb-10 dark:font-creepster dark:tracking-widest">Cloudinary image transformer</h1>
        <p className='text-lg mb-20'>AI-powered Image Transformations: From Cute to Creepy in One Click!</p>
        <a
          className='bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-2lg px-10 py-4 me-2 mb-2 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
          href="#seccion1"
        >
          GET STARTED
        </a>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <two-up>
          <img src="https://res.cloudinary.com/demo/image/upload/v1690194782/docs/diy-house.jpg" alt="img 1" className="w-auto h-auto max-w-full max-h-full" />
          <img src="https://res.cloudinary.com/demo/image/upload/e_art:zorro/v1690194782/docs/diy-house.jpg" alt="img 2" className="w-auto h-auto max-w-full max-h-full" />
        </two-up>
      </div>
    </div>
  )
}