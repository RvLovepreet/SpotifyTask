import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';

import ApplicationNavigator from './navigators/Application';
import SpotifyNavigation from './navigators/SpotifyNavigation';
import './translations';
import DemoScreen from './screens/DemoScreen/DemoScreen';
/* import store from './store'; */
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SpotifyNavigation />
      </PersistGate>
    </Provider>
  );
};
/**
 * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
 * and saved to redux.
 * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
 * for example `loading={<SplashScreen />}`.
 * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
 */
/*  <PersistGate loading={null} persistor={persistor}> */
/*   <ApplicationNavigator /> */
/*   <DemoScreen />
 */

/*     </PersistGate> */
export default App;
