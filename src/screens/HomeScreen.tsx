import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import GetStarted from '../components/atoms/GetStarted';
import HomeHeader from '../components/molecules/HomeHeader';
import MainLayout from '../layouts/MainLayout';

function HomeScreen() {
  const navigation = useNavigation<any>();

  const onPressGetStartedHandler = () => {
    navigation.navigate('Discover');
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
          source={require('../../assets/images/traveler.png')}
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

export default HomeScreen;
