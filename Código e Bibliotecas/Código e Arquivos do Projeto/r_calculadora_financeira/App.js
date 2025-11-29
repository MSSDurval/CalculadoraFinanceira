import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigation';
import { HistoryProvider } from './src/services/registrador_metadados';

export default function App() {
  return (
    <HistoryProvider>
      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    </HistoryProvider>
  );
}