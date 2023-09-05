import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppStack from './src/navigation/AppStack';
// import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import COLORS from './src/values/colors';
import { requestCameraPermission } from './src/HF/HF';
import CodePush from 'react-native-code-push';


const App = () => {
  const queryClient = new QueryClient();
  useEffect(() => {
    requestCameraPermission()

  }, [])
  useEffect(() => {
    // CodePush.sync({
    //   updateDialog: { title: "A new update is Available" },
    //   installMode: CodePush.InstallMode.IMMEDIATE,
    // })
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppStack />
          </PersistGate>
        </Provider>
        {/* <Toast topOffset={50} /> */}
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
};
export default CodePush(CodePushOptions)(() => {
  const queryClient = new QueryClient();
  return (
    <>
      <App />
    </>

  );
});
// export default App;
