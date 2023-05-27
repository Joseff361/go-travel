import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

interface Props {
  phone: string;
  email: string;
  address: string;
}

function Information({ phone, email, address }: Props) {
  return (
    <View style={styles.container}>
      {phone.length > 0 && (
        <View style={styles.row}>
          <Ionicons name="call-sharp" size={16} color={Colors.WHITE} />
          <Text style={styles.text}>{phone}</Text>
        </View>
      )}
      {email.length > 0 && (
        <View style={styles.row}>
          <Ionicons name="person-add" size={16} color={Colors.WHITE} />
          <Text style={styles.text}>{email}</Text>
        </View>
      )}
      {address.length > 0 && (
        <View style={styles.row}>
          <Ionicons name="md-location-sharp" size={16} color={Colors.WHITE} />
          <Text style={styles.text}>{address}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 20,
  },
  text: {
    fontFamily: Fonts.RajdhaniSemiBold,
    color: Colors.WHITE,
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
});

export default Information;
