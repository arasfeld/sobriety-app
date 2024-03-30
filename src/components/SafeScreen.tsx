import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from '@/theme';

import type { PropsWithChildren } from 'react';

export function SafeScreen({ children }: PropsWithChildren) {
  const { layout, navigationTheme, variant } = useTheme();

  return (
    <SafeAreaView
      style={[
        layout.flex1,
        { backgroundColor: navigationTheme.colors.background },
      ]}>
      <StatusBar
        barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={navigationTheme.colors.background}
      />
      {children}
    </SafeAreaView>
  );
}
