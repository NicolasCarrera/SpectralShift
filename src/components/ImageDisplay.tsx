import { AdvancedImage } from "@cloudinary/react";
import { darkMode, lightMode } from "../utils/cloudinary";
import { useTheme } from "../hooks/useTheme";

export const ImageDisplay: React.FC<{ publicId: string }> = ({ publicId }) => {
  const { currentMode } = useTheme();
  const image = currentMode === 'light' ? lightMode(publicId) : darkMode(publicId)

  return (
    <AdvancedImage cldImg={image} />
  )
}