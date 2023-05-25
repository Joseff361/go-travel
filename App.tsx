import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from './src/constants/colors';
import { FontsMap } from './src/constants/fonts';
import { NativeStackRoutes, RootNativeStackParamList } from './src/navigation';
import DetailsScreen from './src/screens/DetailsScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator<RootNativeStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts(FontsMap);

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.BLACK} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={NativeStackRoutes.HOME}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name={NativeStackRoutes.HOME} component={HomeScreen} />
          <Stack.Screen
            name={NativeStackRoutes.DISCOVER}
            component={DiscoverScreen}
          />
          <Stack.Screen
            name={NativeStackRoutes.DETAILS}
            component={DetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
