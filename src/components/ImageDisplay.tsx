import { AdvancedImage } from "@cloudinary/react";
import { darkMode, lightMode } from "../utils/cloudinary";
import { useTheme } from "../hooks/useTheme";

export const ImageDisplay: React.FC = () => {
  const { currentMode } = useTheme();
  const publicId = 'cld-sample'
  const image = currentMode === 'light' ? lightMode(publicId) : darkMode(publicId)

  return (
    <AdvancedImage cldImg={image} />
  )
}