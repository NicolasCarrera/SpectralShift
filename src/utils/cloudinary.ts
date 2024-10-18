import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen/index";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUD_NAME
  },
})

export const lightMode = (publicId: string): CloudinaryImage => {
  const lightImage = cld.image(publicId);

  lightImage
    .addTransformation('f_auto,w_480,h_480,c_fill,g_auto')
    .addTransformation('e_art:hokusai')

  return lightImage
}

export const darkMode = (publicId: string): CloudinaryImage => {
  const lightImage = cld.image(publicId);

  lightImage
    .addTransformation('f_auto,w_480,h_480,c_fill,g_auto')
    .addTransformation('e_art:zorro');

  return lightImage
}