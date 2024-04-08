import 'react-native-gesture-handler';
import React from 'react';
import { MMKV } from 'react-native-mmkv';
import ApplicationNavigator from './navigators/Application';
import { ThemeProvider } from './theme';

export const storage = new MMKV();

function App(): React.JSX.Element {
  return (
    <ThemeProvider storage={storage}>
      <ApplicationNavigator />
    </ThemeProvider>
  );
}

export default App;
