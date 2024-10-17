import { useTheme } from './useTheme';
import { translations, TranslationKey } from '../utils/translations';

export const useTranslations = () => {
  const { currentMode } = useTheme();

  const t = (key: TranslationKey): string => {
    return translations[currentMode][key] || key;
  };

  return { t };
};