import store from './app/store'
import { Provider } from 'react-redux'
import AppBase from './AppBase';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';


export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'purple',
      secondary: 'yellow',
    },
  };


  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <AppBase />
      </Provider>
    </PaperProvider>
  );
}
