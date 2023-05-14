import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts } from '../constants/fonts';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: Fonts.RajdhaniRegular }}>HomeScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
