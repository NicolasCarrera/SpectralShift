import { useEffect, useRef } from "react";

const cloudName = import.meta.env.VITE_CLOUD_NAME
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET

export default function UploadWidget(): JSX.Element {
  const cloudinaryRef = useRef<any>(null); // Definimos cloudinaryRef
  const widgetRef = useRef<any>(null); // Definimos widgetRef

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        sources: ["local", "url", "camera"], // Solo permite equipo, web y cámara
        multiple: false, // Permite solo una carga a la vez
        cropping: false, // Desactiva el recorte
        folder: "images", // Opcional: carpeta donde se guardan las imágenes
        clientAllowedFormats: ["image"], // Solo permite cargar imágenes
        showCompletedButton: false, // No mostrar botón "Done" por defecto
        // Añade el add-on de detección facial avanzada
        context: { detection: "adv_face" }, // Aplica la detección avanzada de atributos faciales
        transformations: [
          {
            width: 500,
            height: 500,
            crop: "limit",
          }
        ],
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          console.log("Upload successful!", result.info);
        }
      }
    );
  }, []);

  return (
    <button
      className='bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full text-2lg px-10 py-4 me-2 mb-2 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
      onClick={() => widgetRef.current.open()}
    >
      Subir Imagen
    </button>
  );
}
