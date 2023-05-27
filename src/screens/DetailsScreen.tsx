import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts } from '../constants/fonts';
import { AppRoutes, NativeStackRoutes } from '../navigation';

function DetailsScreen() {
  const route = useRoute<AppRoutes[NativeStackRoutes.DETAILS]>();

  console.log(route.params.item);

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: Fonts.RajdhaniRegular }}>DetailsScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default React.memo(DetailsScreen);
