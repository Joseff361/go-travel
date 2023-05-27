import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Addon from '../components/atoms/Addon';
import Tag from '../components/atoms/Tag';
import Information from '../components/molecules/Information';
import { Colors } from '../constants/colors';
import { Fonts } from '../constants/fonts';
import MainLayout from '../layouts/MainLayout';
import { AppNavigation, AppRoutes, NativeStackRoutes } from '../navigation';

const screenHeight = Dimensions.get('screen').height;

function DetailsScreen() {
  const route = useRoute<AppRoutes[NativeStackRoutes.DETAILS]>();
  const navigation = useNavigation<AppNavigation>();

  const {
    name,
    imageUrl,
    location,
    rating,
    price,
    bearing,
    description,
    cuisine,
    phone,
    email,
    address,
  } = route.params.item;

  const image =
    imageUrl.length === 0 ? (
      <View
        style={[styles.image, { backgroundColor: Colors.GRAY_LIGHT }]}
      ></View>
    ) : (
      <Image source={{ uri: imageUrl }} style={styles.image} />
    );

  return (
    <MainLayout style={styles.container}>
      {/* MAIN IMAGE */}
      <View style={styles.imageContainer}>
        {image}
        <TouchableOpacity style={styles.back} onPress={navigation.goBack}>
          <Ionicons
            name="arrow-back-circle-sharp"
            size={50}
            color={Colors.WHITE}
          />
        </TouchableOpacity>
      </View>
      {/* TITLES */}
      <View style={styles.column}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.row}>
          <Ionicons
            name="location-sharp"
            size={20}
            color={Colors.WHITE}
            style={styles.icon}
          />
          <Text style={styles.subtitle}>{location}</Text>
        </View>
      </View>
      {/* ADDONS */}
      <View style={styles.addonsRow}>
        <Addon iconName="star" label="Rating" value={rating} />
        <Addon iconName="logo-euro" label="Price level" value={price} />
        <Addon iconName="compass" label="Bearing" value={bearing} />
      </View>
      {/* DESCRIPTION */}
      {description.length > 0 && (
        <View style={styles.addonContainer}>
          <Text style={styles.subtitle}>Description</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
      )}
      {/* CUISINE */}
      {cuisine.length > 0 && (
        <View style={styles.addonContainer}>
          <Text style={styles.subtitle}>Cuisine</Text>
          <View style={styles.cuisine}>
            {cuisine.map((c, index) => (
              <Tag text={c.name} key={index} />
            ))}
          </View>
        </View>
      )}
      <View style={styles.addonContainer}>
        {(phone.length > 0 || email.length > 0 || address.length > 0) && (
          <Text style={styles.subtitle}>Contact Information</Text>
        )}
        <Information phone={phone} email={email} address={address} />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  column: {
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: Fonts.RajdhaniSemiBold,
    color: Colors.PRIMARY,
    fontSize: 22,
  },
  subtitle: {
    fontFamily: Fonts.RajdhaniMedium,
    color: Colors.WHITE,
    fontSize: 18,
  },
  addonsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    fontFamily: Fonts.RajdhaniRegular,
    color: Colors.WHITE,
  },
  addonContainer: {
    marginBottom: 25,
  },
  cuisine: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    marginRight: 3,
  },
  back: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
});

export default DetailsScreen;
