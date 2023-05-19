import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';
import MainLogo from '../atoms/MainLogo';

function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <MainLogo />
        <Text style={styles.title}>Travel</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subtitle}>Enjoy the trip with</Text>
        <Text style={styles.subtitleBold}>Good moments</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Get info about establishments, geographic locations, or prominent
          points of interest.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  row: {
    marginBottom: 20,
  },
  title: {
    fontFamily: Fonts.RajdhaniSemiBold,
    color: Colors.WHITE,
    fontSize: 30,
    marginLeft: 10,
  },
  subtitle: {
    fontFamily: Fonts.RajdhaniRegular,
    color: Colors.WHITE,
    fontSize: 38,
  },
  subtitleBold: {
    fontFamily: Fonts.RajdhaniBold,
    color: Colors.PRIMARY,
    fontSize: 38,
  },
  text: {
    fontFamily: Fonts.RajdhaniRegular,
    color: Colors.WHITE,
    fontSize: 16,
  },
});

export default HomeHeader;
