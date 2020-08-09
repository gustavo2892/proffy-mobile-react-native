import React from 'react';
import { StatusBar } from 'react-native';

import Landing from './src/pages/Landing';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8257e5" />
      <Landing />
    </>
  );
};

export default App;
