import { useTheme } from "../hooks/useTheme";
import { useTranslations } from "../hooks/useTranslations";
import { darkFilter, lighFilter } from "../utils/cloudinary";

export default function Gallery() {
  const { currentMode } = useTheme();
  const { t } = useTranslations();
  const gallery = t('gallery');

  const cloudinaryUrlProperties = 'f_auto,w_300,h_500,c_fill,g_auto'
  const filters = currentMode === 'light' ? lighFilter.join('/') : darkFilter.join('/')
  const cloudinaryUrlImages = [
    `https://res.cloudinary.com/demo/image/upload/${cloudinaryUrlProperties},${filters}/docs/blue_sweater_model`,
    `https://res.cloudinary.com/demo/image/upload/${cloudinaryUrlProperties},${filters}/samples/look-up`,
    `https://res.cloudinary.com/demo/image/upload/${cloudinaryUrlProperties},${filters}/woman-business-suit`,
    `https://res.cloudinary.com/demo/image/upload/${cloudinaryUrlProperties},${filters}/samples/smile`,
    `https://res.cloudinary.com/demo/image/upload/${cloudinaryUrlProperties},${filters}/woman-blackdress-stairs`,
    `https://res.cloudinary.com/demo/image/upload/${cloudinaryUrlProperties},${filters}/samples/people/kitchen-bar`
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cloudinaryUrlImages.map((urlImage, index) => (
        <div
          key={index}
          className="aspect-[9/16] m-2"
        >
          <img
            className="object-cover w-full h-full rounded-lg shadow-lg"
            src={urlImage}
            alt={`Example image ${index}`}
          />
          <p className="text-xl text-center mt-4">
            {gallery.photoMessages[index]}
          </p>
        </div>
      ))}
    </div>
  )
}