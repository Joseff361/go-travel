import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

interface Props {
  message: string;
}

function Placeholder({ message }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  text: {
    color: Colors.GRAY_LIGHT,
    fontFamily: Fonts.RajdhaniSemiBold,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Placeholder;
