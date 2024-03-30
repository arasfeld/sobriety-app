import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { useTheme } from '@/theme';

import type { PropsWithChildren } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Props = PropsWithChildren<{
  size: Size;
}>;

export function Heading({ children, size }: Props) {
  const { colors, typography } = useTheme();

  const fontSize = useMemo(
    () => typography.fontSizes[size],
    [size, typography],
  );

  return (
    <Text
      style={[
        {
          color: colors.text.primary,
          fontSize,
          fontWeight: typography.fontWeights.bold,
        },
      ]}>
      {children}
    </Text>
  );
}

Heading.defaultProps = {
  size: 'lg',
};
