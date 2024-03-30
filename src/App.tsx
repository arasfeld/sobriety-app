import 'react-native-gesture-handler';
import React from 'react';
import ApplicationNavigator from './navigators/Application';
import { ThemeProvider } from './theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <ApplicationNavigator />
    </ThemeProvider>
  );
}

export default App;
