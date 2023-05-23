import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

interface Props {}

function DiscoverInput({}: Props) {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search..."
        GooglePlacesDetailsQuery={{
          fields: 'geometry',
        }}
        fetchDetails={true}
        textInputProps={{
          placeholderTextColor: Colors.WHITE,
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(details);
        }}
        query={{
          key: 'YOUR API KEY',
          language: 'en',
        }}
        styles={{
          textInput: {
            backgroundColor: Colors.BLACK,
            fontFamily: Fonts.RajdhaniMedium,
            color: Colors.WHITE,
            marginBottom: 0,
            fontSize: 16,
            borderWidth: 1,
            borderColor: Colors.WHITE,
            paddingHorizontal: 15,
            paddingVertical: 0,
            borderRadius: 8,
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    fontFamily: Fonts.RajdhaniMedium,
    fontSize: 16,
    color: Colors.WHITE,
  },
  image: {
    width: 16,
    height: 16,
  },
});

export default DiscoverInput;
