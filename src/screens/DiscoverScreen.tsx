import { StyleSheet, Text, View } from 'react-native';

import DiscoverInput from '../components/molecules/DiscoverInput';
import { Colors } from '../constants/colors';
import { Fonts } from '../constants/fonts';
import MainLayout from '../layouts/MainLayout';

function DiscoverScreen() {
  return (
    <MainLayout style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.subtitle}>the Beauty today</Text>
      </View>
      <DiscoverInput />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontFamily: Fonts.RajdhaniSemiBold,
    color: Colors.PRIMARY,
    fontSize: 30,
  },
  subtitle: {
    fontFamily: Fonts.RajdhaniRegular,
    color: Colors.WHITE,
    fontSize: 22,
  },
});

export default DiscoverScreen;
