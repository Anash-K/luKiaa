import * as React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './App';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/redux/configureStore';

export default function Main() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <App />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
