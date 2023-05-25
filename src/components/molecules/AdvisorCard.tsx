import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { View } from 'react-native-animatable';
import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

const screenWidth = Dimensions.get('screen').width;

interface Props {
  name: string;
  imageUrl: string;
  location: string;
  onPress: () => void;
}

function AdvisorCard({ name, imageUrl, location, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iamgeContainer}>
        <Image
          source={{ uri: imageUrl }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {location}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.6,
    height: 300,
    marginRight: 30,
    backgroundColor: Colors.GRAY_DARK,
    borderRadius: 12,
    padding: 10,
  },
  iamgeContainer: {
    width: '100%',
    height: '80%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  footer: {
    marginTop: 10,
  },
  title: {
    fontFamily: Fonts.RajdhaniMedium,
    color: Colors.PRIMARY,
    fontSize: 18,
  },
  subtitle: {
    fontFamily: Fonts.RajdhaniMedium,
    color: Colors.WHITE,
    fontSize: 14,
  },
});

export default AdvisorCard;
