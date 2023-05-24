import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Atraction, Hotel, Restaurant } from '../../../assets/images';
import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';
import { AdvisorType } from '../../models/AdvisorType';

const screenWidth = Dimensions.get('screen').width;

interface Props {
  onAdvisorSelected: (type: AdvisorType) => void;
}

function AdvisorSelector({ onAdvisorSelected }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onAdvisorSelected(AdvisorType.RESTAURANTS)}
      >
        <Image source={Restaurant} resizeMode="contain" style={styles.image} />
        <Text style={styles.text}>Restaurants</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onAdvisorSelected(AdvisorType.ATRACTIONS)}
      >
        <Image source={Atraction} resizeMode="contain" style={styles.image} />
        <Text style={styles.text}>Atractions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onAdvisorSelected(AdvisorType.HOTELS)}>
        <Image source={Hotel} resizeMode="contain" style={styles.image} />
        <Text style={styles.text}>Hotels</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 40,
  },
  image: {
    width: screenWidth * 0.25,
    height: 80,
    marginBottom: 10,
  },
  text: {
    fontFamily: Fonts.RajdhaniMedium,
    color: Colors.WHITE,
    textAlign: 'center',
  },
});

export default AdvisorSelector;