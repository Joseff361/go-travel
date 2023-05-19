import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

interface Props {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

function MainLogo({ containerStyle = {}, textStyle = {} }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>Go</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    alignSelf: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.RajdhaniSemiBold,
    color: Colors.WHITE,
    fontSize: 30,
  },
});

export default MainLogo;
