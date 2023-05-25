import { Fragment, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Coordinates } from '../../models/Coordinates';
import { Hotel } from '../../models/Hotel';
import { TravelAdvisorService } from '../../services/TravelAdvisorService';
import Loader from '../atoms/Loader';
import Placeholder from '../atoms/Placeholder';
import AdvisorCard from '../molecules/AdvisorCard';

interface Props {
  coordinates: Coordinates;
}

function Hotels({ coordinates }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [hotels, setHotels] = useState<Hotel[]>([]);

  const fetchHotelsByLatLng = async () => {
    try {
      setLoading(true);
      const response = await TravelAdvisorService.fetchHotelsByLatLng(
        coordinates.latitude,
        coordinates.longitude,
      );
      setHotels(response.data);
    } catch (error) {
      setHotels([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotelsByLatLng();
  }, [coordinates]);

  if (loading) {
    return <Loader />;
  }

  const content =
    hotels.length === 0 ? (
      <Placeholder message="Not results found" />
    ) : (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hotels.map((hotel, index) => {
          if (!hotel.name || !hotel.photo) {
            return <Fragment key={index}></Fragment>;
          }

          return (
            <AdvisorCard
              key={`${hotel.name}-${index}`}
              name={hotel.name}
              imageUrl={hotel.photo.images.large.url}
              location={hotel.location_string}
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

export default Hotels;
