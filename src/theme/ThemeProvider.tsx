import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
import { Theme, Variant } from '@/types/theme';
import { createTheme } from './create-theme';

type Context = Theme & {
  changeTheme: (variant: Variant) => void;
  variant: Variant;
};

export const ThemeContext = createContext<Context | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();
  const defaultVariant = useMemo<Variant>(() => colorScheme === 'dark' ? 'dark' : 'light', [colorScheme]);
  const [variant, setVariant] = useState<Variant>('auto');

  const changeTheme = useCallback((nextVariant: Variant) =>
    setVariant(nextVariant), [defaultVariant]
  );

  const theme = useMemo(() => {
    if (variant === 'auto') {
      return createTheme(defaultVariant);
    }
    return createTheme(variant);
  }, [variant]);

  const value = useMemo(
    () => ({
      ...theme,
      changeTheme,
      variant,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
