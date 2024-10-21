import { useTheme } from './useTheme';
import { translations, TranslationKey } from '../utils/translations';

export const useTranslations = () => {
  const { currentMode } = useTheme();

  const t = <K extends TranslationKey>(key: K): typeof translations['light'][K] => {
    return translations[currentMode][key] || translations['light'][key];
  };

  return { t };
};