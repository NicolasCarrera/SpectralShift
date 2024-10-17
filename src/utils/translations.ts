type TranslationSet = {
  greeting: string;
  welcome: string;
  description: string;
  // Añade aquí más claves según sea necesario
};

export const translations: Record<'light' | 'dark', TranslationSet> = {
  light: {
    greeting: "Buenos días",
    welcome: "Bienvenido al modo claro",
    description: "Este es un ejemplo de cómo el texto cambia en el modo claro.",
    // Añade aquí más traducciones para el modo claro
  },
  dark: {
    greeting: "Buenas noches",
    welcome: "Bienvenido al modo oscuro",
    description: "Este es un ejemplo de cómo el texto cambia en el modo oscuro.",
    // Añade aquí más traducciones para el modo oscuro
  }
};

export type TranslationKey = keyof TranslationSet;