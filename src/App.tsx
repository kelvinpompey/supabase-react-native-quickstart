import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import Navigation from './components/Navigation';
import AuthProvider from './features/auth/AuthContext';
import {theme} from './theme';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NativeBaseProvider>
  );
};
export default App;
