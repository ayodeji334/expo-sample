import 'react-native-gesture-handler';
import * as React from 'react';
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContextProvider from './config/Context';
import { Context } from './config/Context';
import SearchSymptom from './pages/SearchSymptom';
import Dashboard from './pages/Dashboard';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

//Prevent splashscreen from auto hiding until the app finish loading auth state
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const MyStack = () => {
  let { state } = React.useContext(Context);

  return (
    state.auth ? (
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerTitleStyle: {
              display: "none"
            },
            headerShown: true
          }}
        />
        <Stack.Screen
          name="SearchPage"
          component={SearchSymptom}
          options={{
            headerTitleStyle: {
              display: "none"
            },
            headerShown: true
          }}
        />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerStyle: {
              display: "none"
            },
            headerTitleStyle: {
              display: 'none',
            },
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitleStyle: {
              display: "none"
            },
            headerShown: true
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTitleStyle: {
              display: "none"
            },
            headerShown: true
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgotPassword}
          options={{
            headerTitleStyle: {
              display: "none"
            },
            headerShown: true
          }}
        />
      </Stack.Navigator>
    )
  );
};

export default function App() {
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Black.ttf')
  });

  useEffect(() => {
    setTimeout(async () => {
      // Hide the splash after 4s
      await SplashScreen.hideAsync()
    }, 4000);
  }, []);
  
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ContextProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </ContextProvider>
    </SafeAreaProvider>
  )
};
