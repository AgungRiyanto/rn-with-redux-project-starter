/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from './src/redux/reducers/store';
import Routing from './src/navigations';

const App = () => {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView style={{flex: 1}}>
                  <Routing />
              </SafeAreaView>
          </PersistGate>
      </Provider>
  );
};

export default App;

console.disableYellowBox = true;
