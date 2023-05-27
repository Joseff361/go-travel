import { Fragment } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { AdvisorGenericItem } from '../../models/AdvisorGenericItem';
import Placeholder from '../atoms/Placeholder';
import AdvisorCard from '../molecules/AdvisorCard';

interface Props {
  items: AdvisorGenericItem[];
  onPressCard: (item: AdvisorGenericItem) => void;
}

function AdvisordCards({ items, onPressCard }: Props) {
  const content =
    items.length === 0 ? (
      <Placeholder message="Not results found" />
    ) : (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => {
          if (item.name.length === 0) {
            return <Fragment key={index}></Fragment>;
          }

          return (
            <AdvisorCard
              key={`${item.name}-${index}`}
              name={item.name}
              imageUrl={item.imageUrl}
              location={item.location}
              onPress={() => onPressCard(item)}
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

export default AdvisordCards;
