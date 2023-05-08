import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabRouter from './src/routers/TabRouter';

const App = () => {
  return (
    <NavigationContainer>
      <TabRouter />
    </NavigationContainer>
  );
};
export default App;
