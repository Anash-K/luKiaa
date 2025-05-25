import React from 'react';
import {StyleSheet} from 'react-native';
import RootScreen from './src/navigation/RootScreen';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootScreen />
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
