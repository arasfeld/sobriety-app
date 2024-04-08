import React, { useCallback, useMemo } from 'react';
import { Pressable, PressableStateCallbackType, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '@/theme';
import { Text } from './Text';

import type { PropsWithChildren } from 'react';

type Color = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Variant = 'solid' | 'outline' | 'ghost' | 'link';

type Props = PropsWithChildren<{
  color: Color;
  size: Size;
  style?: ViewStyle,
  variant: Variant;
}>;

export function Button({ children, color, size, style, variant }: Props) {
  const { colors } = useTheme();

  const getStyles = useCallback(({ pressed }: PressableStateCallbackType) => [{
    backgroundColor: variant === 'solid' ? colors[color].main : 'transparent',
    borderColor: variant === 'outline' ? colors[color].main : 'transparent',
    borderWith: variant === 'outline' ? 1 : 0,
    opacity: pressed ? 0.8 : 1,
  }, styles.button, style], [color, colors, style, variant]);

  const textColor = useMemo(() => {
    if (variant === 'solid') {
      return colors.common.white;
    }
    return colors.primary.main;
  }, [color, colors, variant]);

  return (
    <Pressable style={getStyles}>
      <Text color={textColor} size={size}>{children}</Text>
    </Pressable>
  );
}

Button.defaultProps = {
  color: 'primary',
  size: 'md',
  variant: 'solid',
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    padding: 12,
  },
});
