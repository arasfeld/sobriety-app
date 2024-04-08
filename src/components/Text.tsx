import React, { useMemo } from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import { useTheme } from '@/theme';

import type { PropsWithChildren } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Props = PropsWithChildren<{
  color?: string;
  size: Size;
  style?: TextStyle;
}>;

export function Text({ children, color, size, style }: Props) {
  const { colors, typography } = useTheme();

  const styles = useMemo(() => [{
    color: color || colors.text.primary,
    fontSize: typography.fontSizes[size],
  }, style], [color, colors, size, style, typography]);

  return (
    <RNText style={styles}>
      {children}
    </RNText>
  );
}

Text.defaultProps = {
  size: 'sm',
};
