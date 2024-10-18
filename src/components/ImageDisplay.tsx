import { AdvancedImage } from "@cloudinary/react";
import { darkMode, lightMode } from "../utils/cloudinary";

export const ImageDisplay: React.FC = () => {

  const publicId = 'cld-sample' //'a3vaswxyjw8nr2x5aej4'
  const image = darkMode(publicId)

  return (
    <AdvancedImage cldImg={image} />
  )
}