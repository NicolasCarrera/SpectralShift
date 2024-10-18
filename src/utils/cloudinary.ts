import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen/index";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUD_NAME
  },
})

export const lighFilter = [
  'e_gen_background_replace:prompt_sunny_meadow_clear_sky',
  'e_improve'
]
export const darkFilter = [
  'e_gen_background_replace:prompt_dark_forest_night',
  'e_saturation:-50',
  'e_contrast:40',
  'e_vibrance:30',
  'e_brightness:-20',
  'e_art:zorro'
]

export const lightMode = (publicId: string): CloudinaryImage => {
  const lightImage = cld.image(publicId);

  lightImage.addTransformation('f_auto,w_500,h_500,c_fill,g_auto')

  lighFilter.forEach(filter => {
    lightImage.addTransformation(filter)
  })

  return lightImage
}

export const darkMode = (publicId: string): CloudinaryImage => {
  const lightImage = cld.image(publicId);

  lightImage.addTransformation('f_auto,w_500,h_500,c_fill,g_auto')

  darkFilter.forEach(filter => {
    lightImage.addTransformation(filter)
  })

  return lightImage
}