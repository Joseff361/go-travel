import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Traveler } from '../../assets/images';
import GetStarted from '../components/atoms/GetStarted';
import HomeHeader from '../components/molecules/HomeHeader';
import MainLayout from '../layouts/MainLayout';
import { AppNavigation, NativeStackRoutes } from '../navigation';

function HomeScreen() {
  const navigation = useNavigation<AppNavigation>();

  const onPressGetStartedHandler = () => {
    navigation.navigate(NativeStackRoutes.DISCOVER);
  };

  return (
    <MainLayout>
      <View style={styles.header}>
        <HomeHeader />
      </View>
      <View style={styles.bottom}>
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          resizeMode="contain"
          style={styles.image}
          source={Traveler}
        />
      </View>
      <GetStarted
        viewStyle={styles.getStarted}
        onPress={onPressGetStartedHandler}
      />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: '40%',
  },
  bottom: {
    height: '60%',
    alignItems: 'center',
  },
  image: {
    height: '100%',
  },
  getStarted: {
    position: 'absolute',
  },
});

export default React.memo(HomeScreen);
