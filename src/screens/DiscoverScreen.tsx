import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Loader from '../components/atoms/Loader';
import Placeholder from '../components/atoms/Placeholder';
import AdvisorSelector from '../components/molecules/AdvisorSelector';
import AdvisordCards from '../components/organisms/AdvisordCards';
import DiscoverInput from '../components/organisms/DiscoverInput';
import { Colors } from '../constants/colors';
import { Fonts } from '../constants/fonts';
import MainLayout from '../layouts/MainLayout';
import { AdvisorGenericItem } from '../models/AdvisorGenericItem';
import { AdvisorType } from '../models/AdvisorType';
import { Atraction } from '../models/Atraction';
import { Coordinates } from '../models/Coordinates';
import { Hotel } from '../models/Hotel';
import { Restaurant } from '../models/Restaurant';
import { AppNavigation, NativeStackRoutes } from '../navigation';
import { TravelAdvisorService } from '../services/TravelAdvisorService';

const EMPTY_RESULTS: Record<AdvisorType, AdvisorGenericItem[]> = {
  [AdvisorType.RESTAURANTS]: [],
  [AdvisorType.HOTELS]: [],
  [AdvisorType.ATRACTIONS]: [],
};

function DiscoverScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  const [advisorType, setAdvisorType] = useState<AdvisorType>(
    AdvisorType.RESTAURANTS,
  );
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [advisorGenericItems, setAdvisorGenericItems] =
    useState<Record<AdvisorType, AdvisorGenericItem[]>>(EMPTY_RESULTS);

  const navigation = useNavigation<AppNavigation>();

  const onCardPressedHandler = (item: AdvisorGenericItem) => {
    navigation.navigate(NativeStackRoutes.DETAILS, { item });
  };

  const onLocationSelectedHandler = (cc: Coordinates) => {
    setCoordinates(cc);
  };

  const buildAdvisorItem = (
    items: Restaurant[] | Hotel[] | Atraction[],
  ): AdvisorGenericItem[] => {
    return items.map(item => {
      return {
        name: item.name || '',
        imageUrl: item.photo?.images.large.url || '',
        location: item.location_string,
        rating: (item as Restaurant | Hotel).rating || 'No rates',
        openNow: (item as Restaurant).open_now_text || '',
        price: (item as Restaurant | Hotel).price_level || '',
        bearing: item.bearing || '',
        description: (item as Restaurant | Atraction).description || '',
        cuisine: (item as Restaurant).cuisine || [],
        phone: (item as Restaurant).phone || '',
        email: (item as any).email || '',
        address: (item as Restaurant | Atraction).address || '',
      };
    });
  };

  useEffect(() => {
    const fetchAdvisorItems = async () => {
      setLoading(true);
      const results = await Promise.allSettled([
        TravelAdvisorService.fetchRestaurantsByLatLng(
          coordinates!.latitude,
          coordinates!.longitude,
        ),
        TravelAdvisorService.fetchHotelsByLatLng(
          coordinates!.latitude,
          coordinates!.longitude,
        ),
        TravelAdvisorService.fetchAtractionsByLatLng(
          coordinates!.latitude,
          coordinates!.longitude,
        ),
      ]);

      const advisorItems: Record<AdvisorType, AdvisorGenericItem[]> =
        EMPTY_RESULTS;

      results.forEach((result, index) => {
        switch (index) {
          case 0:
            advisorItems[AdvisorType.RESTAURANTS] =
              result.status === 'fulfilled'
                ? buildAdvisorItem(result.value.data)
                : [];
          case 1:
            advisorItems[AdvisorType.HOTELS] =
              result.status === 'fulfilled'
                ? buildAdvisorItem(result.value.data)
                : [];
          case 2:
            advisorItems[AdvisorType.ATRACTIONS] =
              result.status === 'fulfilled'
                ? buildAdvisorItem(result.value.data)
                : [];
          default:
            return;
        }
      });

      setAdvisorGenericItems(advisorItems);
      setLoading(false);
    };

    coordinates?.latitude && coordinates.longitude && fetchAdvisorItems();
  }, [coordinates]);

  const content: React.ReactNode = useMemo(() => {
    if (loading) {
      return <Loader />;
    }

    if (coordinates?.latitude && coordinates.longitude) {
      let advisorData: AdvisorGenericItem[] = [];

      switch (advisorType) {
        case AdvisorType.RESTAURANTS:
          advisorData = advisorGenericItems.RESTAURANTS;
          break;
        case AdvisorType.ATRACTIONS:
          advisorData = advisorGenericItems.ATRACTIONS;
          break;
        case AdvisorType.HOTELS:
          advisorData = advisorGenericItems.HOTELS;
          break;
        default:
          advisorData = [];
      }

      return (
        <AdvisordCards
          key={advisorType}
          items={advisorData}
          onPressCard={onCardPressedHandler}
        />
      );
    } else {
      return <Placeholder message="Select a place to start searching" />;
    }
  }, [coordinates, advisorType, advisorGenericItems, loading]);

  const onAdvisorSelectedHandler = (type: AdvisorType) => {
    setAdvisorType(type);
  };

  return (
    <MainLayout style={styles.container} scrollable={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.subtitle}>the Beauty today</Text>
      </View>
      <DiscoverInput onLocationSelected={onLocationSelectedHandler} />
      <ScrollView>
        <AdvisorSelector
          onAdvisorSelected={onAdvisorSelectedHandler}
          loading={loading}
        />
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

export default React.memo(DiscoverScreen);
