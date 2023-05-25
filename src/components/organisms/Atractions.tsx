import { Fragment, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { AdvisorDetails } from '../../models/AdvisorDetails';
import { Atraction } from '../../models/Atraction';
import { Coordinates } from '../../models/Coordinates';
import { TravelAdvisorService } from '../../services/TravelAdvisorService';
import Loader from '../atoms/Loader';
import Placeholder from '../atoms/Placeholder';
import AdvisorCard from '../molecules/AdvisorCard';

interface Props {
  coordinates: Coordinates;
  onPressCard: (details: AdvisorDetails) => void;
}

function Atractions({ coordinates, onPressCard }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [atractions, setAtractions] = useState<Atraction[]>([]);

  const fetchAtractionsByLatLng = async () => {
    try {
      setLoading(true);
      const response = await TravelAdvisorService.fetchAtractionsByLatLng(
        coordinates.latitude,
        coordinates.longitude,
      );
      setAtractions(response.data);
    } catch (error) {
      setAtractions([]);
    } finally {
      setLoading(false);
    }
  };

  const onCardPressedHandler = (atr: Atraction) => {
    onPressCard({
      name: atr.name || '',
      imageUrl: atr.photo?.images.large.url || '',
      location: atr.location_string,
    });
  };

  useEffect(() => {
    fetchAtractionsByLatLng();
  }, [coordinates]);

  if (loading) {
    return <Loader />;
  }

  const content =
    atractions.length === 0 ? (
      <Placeholder message="Not results found" />
    ) : (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {atractions.map((atraction, index) => {
          if (!atraction.name || !atraction.photo) {
            return <Fragment key={index}></Fragment>;
          }

          return (
            <AdvisorCard
              key={`${atraction.name}-${index}`}
              name={atraction.name}
              imageUrl={atraction.photo.images.large.url}
              location={atraction.location_string}
              onPress={() => onCardPressedHandler(atraction)}
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

export default Atractions;
