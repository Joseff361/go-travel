import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AdvisorSelector from '../components/molecules/AdvisorSelector';
import DiscoverInput from '../components/organisms/DiscoverInput';
import { Colors } from '../constants/colors';
import { Fonts } from '../constants/fonts';
import MainLayout from '../layouts/MainLayout';
import { AdvisorType } from '../models/AdvisorType';
import { TravelAdvisorService } from '../services/TravelAdvisorService';

function DiscoverScreen() {
  const [advisorType, setAdvisorType] = useState<AdvisorType>(
    AdvisorType.RESTAURANTS,
  );

  const fetchRestaurantsByLatLng = async () => {
    try {
      const response = await TravelAdvisorService.fetchRestaurantsByLatLng(
        '15.9116789',
        '-85.9534465',
      );
      console.log(response.data.map(d => d.name));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRestaurantsByLatLng();
  }, []);

  const onAdvisorSelectedHandler = (type: AdvisorType) => {
    setAdvisorType(type);
  };

  return (
    <MainLayout style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.subtitle}>the Beauty today</Text>
      </View>
      <DiscoverInput />
      <AdvisorSelector onAdvisorSelected={onAdvisorSelectedHandler} />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  title: {
    fontFamily: Fonts.RajdhaniSemiBold,
    color: Colors.PRIMARY,
    fontSize: 30,
  },
  subtitle: {
    fontFamily: Fonts.RajdhaniRegular,
    color: Colors.WHITE,
    fontSize: 22,
  },
});

export default DiscoverScreen;
