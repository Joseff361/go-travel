import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

interface Props {
  value: string;
  label: string;
  iconName: string;
}

function Addon({ value, label, iconName }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {/* @ts-ignore */}
        <Ionicons name={iconName} size={18} color={Colors.WHITE} />
      </View>
      <View>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.text}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 8,
  },
  icon: {
    backgroundColor: Colors.GRAY_DARK,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 5,
    borderRadius: 8,
    marginRight: 8,
  },
  text: {
    fontFamily: Fonts.RajdhaniMedium,
    color: Colors.WHITE,
  },
  value: {
    fontFamily: Fonts.RajdhaniBold,
    color: Colors.WHITE,
  },
});

export default Addon;
