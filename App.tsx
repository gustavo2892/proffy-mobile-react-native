import React from 'react';
import { StatusBar } from 'react-native';

import AppStack from './src/routes/AppStack';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8257e5" />
      <AppStack />
    </>
  );
};

export default App;
