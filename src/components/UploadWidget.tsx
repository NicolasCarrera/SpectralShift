import { useEffect, useRef } from "react";
import { useImage } from "../hooks/useImage";

const cloudName = import.meta.env.VITE_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

export default function UploadWidget(): JSX.Element {
  const { setPublicId } = useImage();

  const cloudinaryRef = useRef<any>(null);
  const widgetRef = useRef<any>(null);

  useEffect(() => {
    const onWindowLoad = () => {
      if (window.cloudinary) {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
          {
            cloudName,
            uploadPreset,
            sources: ["local", "url", "camera"], // Solo permite equipo, web y cámara
            multiple: false, // Permite solo una carga a la vez
            cropping: false, // Desactiva el recorte
            folder: "images", // Opcional: carpeta donde se guardan las imágenes
            clientAllowedFormats: ["image"], // Solo permite cargar imágenes
            showCompletedButton: false, // No mostrar botón "Done" por defecto
          },
          (error: any, result: any) => {
            if (!error && result && result.event === "success") {
              setPublicId(result.info.public_id);
            }
          }
        );
      }
    };

    window.addEventListener('load', onWindowLoad);

    return () => {
      window.removeEventListener('load', onWindowLoad);
    };
  }, []);

  return (
    <button
      className='bg-orange-500 border border-orange-800 focus:outline-none hover:bg-orange-600 focus:ring-4 focus:ring-orange-900 rounded-full text-2lg px-10 py-4 me-2 mb-2 w-max dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
      onClick={() => widgetRef.current?.open()}
    >
      UPLOAD IMAGE
    </button>
  );
}
