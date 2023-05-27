import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

interface Props {
  text: string;
}

function Tag({ text }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    alignSelf: 'center',
    marginRight: 10,
    marginTop: 10,
  },
  text: {
    fontFamily: Fonts.RajdhaniSemiBold,
    color: Colors.WHITE,
  },
});

export default Tag;
