import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import { Fonts } from './src/constants/fonts';
import DetailsScreen from './src/screens/DetailsScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    [Fonts.RajdhaniBold]: require('./assets/fonts/Rajdhani-Bold.ttf'),
    [Fonts.RajdhaniLight]: require('./assets/fonts/Rajdhani-Light.ttf'),
    [Fonts.RajdhaniMedium]: require('./assets/fonts/Rajdhani-Medium.ttf'),
    [Fonts.RajdhaniRegular]: require('./assets/fonts/Rajdhani-Regular.ttf'),
    [Fonts.RajdhaniSemiBold]: require('./assets/fonts/Rajdhani-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
