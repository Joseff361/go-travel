import { Fragment, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { AdvisorDetails } from '../../models/AdvisorDetails';
import { Coordinates } from '../../models/Coordinates';
import { Restaurant } from '../../models/Restaurant';
import { TravelAdvisorService } from '../../services/TravelAdvisorService';
import Loader from '../atoms/Loader';
import Placeholder from '../atoms/Placeholder';
import AdvisorCard from '../molecules/AdvisorCard';

interface Props {
  coordinates: Coordinates;
  onPressCard: (details: AdvisorDetails) => void;
}

function Restaurants({ coordinates, onPressCard }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [restaurants, setReastaurants] = useState<Restaurant[]>([]);

  const fetchRestaurantsByLatLng = async () => {
    try {
      setLoading(true);
      const response = await TravelAdvisorService.fetchRestaurantsByLatLng(
        coordinates.latitude,
        coordinates.longitude,
      );
      setReastaurants(response.data);
    } catch (error) {
      setReastaurants([]);
    } finally {
      setLoading(false);
    }
  };

  const onCardPressedHandler = (rst: Restaurant) => {
    onPressCard({
      name: rst.name || '',
      imageUrl: rst.photo?.images.large.url || '',
      location: rst.location_string,
    });
  };

  useEffect(() => {
    fetchRestaurantsByLatLng();
  }, [coordinates]);

  if (loading) {
    return <Loader />;
  }

  const content =
    restaurants.length === 0 ? (
      <Placeholder message="Not results found" />
    ) : (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {restaurants.map((restaurant, index) => {
          if (!restaurant.name || !restaurant.photo) {
            return <Fragment key={index}></Fragment>;
          }

          return (
            <AdvisorCard
              key={`${restaurant.name}-${index}`}
              name={restaurant.name}
              imageUrl={restaurant.photo.images.large.url}
              location={restaurant.location_string}
              onPress={() => onCardPressedHandler(restaurant)}
            />
          );
        })}
      </ScrollView>
    );

  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default Restaurants;
