import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import HomeHeader from '../components/molecules/HomeHeader';
import MainLayout from '../layouts/MainLayout';

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {}, []);

  return (
    <MainLayout>
      <View style={styles.header}>
        <HomeHeader />
      </View>
      <View style={styles.bottom}>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require('../../assets/images/traveler.png')}
        />
      </View>
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
    width: '90%',
  },
});

export default HomeScreen;
