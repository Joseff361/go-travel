import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';
import MainLogo from './MainLogo';

interface Props {
  viewStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

function GetStarted({ viewStyle, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.container, viewStyle]} onPress={onPress}>
      <MainLogo
        containerStyle={styles.containerStyle}
        textStyle={styles.textStyle}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
    padding: 8,
    borderColor: Colors.PRIMARY,
    borderTopWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 50,
  },
  text: {
    fontFamily: Fonts.RajdhaniMedium,
    color: Colors.WHITE,
    fontSize: 18,
  },
  containerStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textStyle: {
    fontSize: 24,
  },
});

export default GetStarted;
