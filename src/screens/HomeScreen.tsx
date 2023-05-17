import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../constants/colors';
import { Fonts } from '../constants/fonts';
import MainLayout from '../layouts/MainLayout';

function HomeScreen() {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text
          style={{ fontFamily: Fonts.RajdhaniRegular, color: Colors.WHITE }}
        >
          HomeScreen
        </Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
