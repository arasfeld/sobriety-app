import React, {
  PropsWithChildren,
  createContext,
  useMemo,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
import { Theme, Variant } from '@/types/theme';
import { createTheme } from './create-theme';

type Context = Theme & {
  changeTheme: (variant: Variant) => void;
};

export const ThemeContext = createContext<Context | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const isDarkMode = useColorScheme() === 'dark';
  const [variant, setVariant] = useState<Variant>(
    isDarkMode ? 'dark' : 'light',
  );

  const changeTheme = (nextVariant: Variant) => {
    setVariant(nextVariant);
  };

  const theme = useMemo(() => createTheme(variant), [variant]);

  const value = useMemo(
    () => ({
      ...theme,
      changeTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
