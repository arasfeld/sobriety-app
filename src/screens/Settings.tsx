import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Heading, SafeScreen, Text } from '@/components';
import { useTheme } from '@/theme';
import { colors as allColors } from '@/theme/colors';

function Settings(): React.JSX.Element {
  const { changeTheme, colors, layout, variant } = useTheme();

  return (
    <SafeScreen>
      <View style={[layout.flexColumn, layout.gap12, layout.padding8]}>
        <Heading size="xl">Settings</Heading>
        <Heading size="md">Theme</Heading>
        <View style={[layout.flexRow, layout.gap12, layout.justifyAround]}>
          <View style={[layout.flexColumn, layout.gap4, layout.itemsCenter]}>
            <Pressable
              onPress={() => changeTheme('auto')}
              style={[styles.square, { borderColor: variant === 'auto' ? colors.primary.main : colors.border }]}
            >
              <View style={[styles.triangleCorner, { borderRightColor: allColors.light.background.default, borderTopColor: allColors.dark.background.default }]} />
            </Pressable>
            <Text>Auto</Text>
          </View>
          <View style={[layout.flexColumn, layout.gap4, layout.itemsCenter]}>
            <Pressable
              onPress={() => changeTheme('light')}
              style={[styles.square, { backgroundColor: allColors.light.background.default, borderColor: variant === 'light' ? colors.primary.main : colors.border }]}
            />
            <Text>Light</Text>
          </View>
          <View style={[layout.flexColumn, layout.gap4, layout.itemsCenter]}>
            <Pressable
              onPress={() => changeTheme('dark')}
              style={[styles.square, { backgroundColor: allColors.dark.background.default, borderColor: variant === 'dark' ? colors.primary.main : colors.border }]}
            />
            <Text>Dark</Text>
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  square: {
    borderRadius: 8,
    borderWidth: 1,
    height: 50,
    overflow: 'hidden',
    width: 50,
  },
  triangleCorner: {
    borderRadius: 8,
    borderRightWidth: 50,
    borderStyle: 'solid',
    borderTopWidth: 50,
    height: 0,
    width: 0,
  }
});

export default Settings;
