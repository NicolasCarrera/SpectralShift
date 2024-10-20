import { useContext } from "react";
import { ImageContext } from "../contexts/ImageContext";

export const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImage debe estar dentro de un CloudinaryProvider');
  }
  return context;
}