import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Heading, SafeScreen, Text, WelcomingSvg } from '@/components';
import { useTheme } from '@/theme';

function Startup(): React.JSX.Element {
  const { colors, layout } = useTheme();

  return (
    <SafeScreen>
      <View style={[layout.flex1, layout.gap12, layout.itemsCenter, layout.justifyCenter, layout.padding8]}>
        <Heading>First of all, congrats!</Heading>
        <Text>You've just taken a big step on the path to sobriety.</Text>
        <WelcomingSvg color={colors.primary.main} height="70%" width="70%" />
        <Button style={styles.button} variant="solid">Get Started</Button>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
});

export default Startup;
