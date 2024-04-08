import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';
import { createTheme } from './create-theme';

import type { MMKV } from 'react-native-mmkv';
import type { Theme, Variant } from '@/types/theme';

type Context = Theme & {
  changeTheme: (variant: Variant) => void;
  variant: Variant;
};

export const ThemeContext = createContext<Context | undefined>(undefined);

type Props = PropsWithChildren<{
	storage: MMKV;
}>;

export function ThemeProvider({ children, storage }: Props) {
  const colorScheme = useColorScheme();
  const defaultVariant = useMemo<Variant>(() => colorScheme === 'dark' ? 'dark' : 'light', [colorScheme]);
  const [variant, setVariant] = useState<Variant>((storage.getString('theme') as Variant) || 'auto');

  // initialize theme at default if not defined
	useEffect(() => {
		const appHasThemeDefined = storage.contains('theme');
		if (!appHasThemeDefined) {
			storage.set('theme', 'auto');
			setVariant('auto');
		}
	}, []);

  const changeTheme = useCallback((nextVariant: Variant) => {
    setVariant(nextVariant);
    storage.set('theme', nextVariant);
  }, [defaultVariant, storage]);

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
