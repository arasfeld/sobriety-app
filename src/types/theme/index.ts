import type { ViewStyle } from 'react-native';
import type { Theme as NavigationTheme } from '@react-navigation/native';
import type { Colors } from './colors';
import type { Typography } from './typography';

export type Variant = 'auto' | 'light' | 'dark';

export type Theme = {
  colors: Colors;
  layout: Record<string, ViewStyle>;
  navigationTheme: NavigationTheme;
  typography: Typography;
  variant: Variant;
};
