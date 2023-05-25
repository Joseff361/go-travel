import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Placeholder from '../components/atoms/Placeholder';
import AdvisorSelector from '../components/molecules/AdvisorSelector';
import Atractions from '../components/organisms/Atractions';
import DiscoverInput from '../components/organisms/DiscoverInput';
import Hotels from '../components/organisms/Hotels';
import Restaurants from '../components/organisms/Restaurants';
import { Colors } from '../constants/colors';
import { Fonts } from '../constants/fonts';
import MainLayout from '../layouts/MainLayout';
import { AdvisorType } from '../models/AdvisorType';
import { Coordinates } from '../models/Coordinates';

function DiscoverScreen() {
  const [advisorType, setAdvisorType] = useState<AdvisorType>(
    AdvisorType.RESTAURANTS,
  );
  const [coordinates, setCoordinates] = useState<Coordinates | null>({
    latitude: '15.9116789',
    longitude: '-85.9534465',
  });

  const content: React.ReactNode = useMemo(() => {
    if (!!coordinates) {
      switch (advisorType) {
        case AdvisorType.RESTAURANTS:
          return <Restaurants coordinates={coordinates} />;
        case AdvisorType.ATRACTIONS:
          return <Atractions coordinates={coordinates} />;
        case AdvisorType.HOTELS:
          return <Hotels coordinates={coordinates} />;
      }
    } else {
      return <Placeholder message="Select a place to start searching" />;
    }
  }, [coordinates, advisorType]);

  const onAdvisorSelectedHandler = (type: AdvisorType) => {
    setAdvisorType(type);
  };

  return (
    <MainLayout style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Discover</Text>
          <Text style={styles.subtitle}>the Beauty today</Text>
        </View>
        <DiscoverInput />
        <AdvisorSelector onAdvisorSelected={onAdvisorSelectedHandler} />
        {content}
      </ScrollView>
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
