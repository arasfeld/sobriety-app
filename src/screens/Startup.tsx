import React from 'react';
import { ScrollView } from 'react-native';
import { Heading, SafeScreen, Text } from '@/components';

function Startup(): React.JSX.Element {
  return (
    <SafeScreen>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Heading>Heading</Heading>
        <Text>Content</Text>
      </ScrollView>
    </SafeScreen>
  );
}

export default Startup;
