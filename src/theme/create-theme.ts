import { Theme, Variant } from '@/types/theme';
import { colors } from './colors';
import { layout } from './layout';
import { typography } from './typography';

export function createTheme(variant: Variant): Theme {
  const themeColors = colors[variant];

  return {
    colors: themeColors,
    layout,
    navigationTheme: {
      dark: variant === 'dark',
      colors: {
        primary: themeColors.primary.main,
        background: themeColors.background.default,
        card: themeColors.background.default,
        text: themeColors.text.primary,
        border: themeColors.text.secondary,
        notification: themeColors.error.main,
      },
    },
    typography,
    variant,
  };
}
