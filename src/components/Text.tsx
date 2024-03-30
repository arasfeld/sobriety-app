import React, { useMemo } from 'react';
import { Text as RNText } from 'react-native';
import { useTheme } from '@/theme';

import type { PropsWithChildren } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Props = PropsWithChildren<{
  size: Size;
}>;

export function Text({ children, size }: Props) {
  const { colors, typography } = useTheme();

  const fontSize = useMemo(
    () => typography.fontSizes[size],
    [size, typography],
  );

  return (
    <RNText style={[{ color: colors.text.primary, fontSize }]}>
      {children}
    </RNText>
  );
}

Text.defaultProps = {
  size: 'sm',
};
