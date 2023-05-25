import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AdvisorDetails } from '../models/AdvisorDetails';

export enum NativeStackRoutes {
  HOME = 'HomeScreen',
  DISCOVER = 'DiscoverScreen',
  DETAILS = 'DetailsScreen',
}

export type RootNativeStackParamList = {
  [NativeStackRoutes.HOME]: undefined;
  [NativeStackRoutes.DISCOVER]: undefined;
  [NativeStackRoutes.DETAILS]: {
    details: AdvisorDetails;
  };
};

export type AppRoutes = {
  [NativeStackRoutes.HOME]: RouteProp<
    RootNativeStackParamList,
    NativeStackRoutes.HOME
  >;
  [NativeStackRoutes.DISCOVER]: RouteProp<
    RootNativeStackParamList,
    NativeStackRoutes.DISCOVER
  >;
  [NativeStackRoutes.DETAILS]: RouteProp<
    RootNativeStackParamList,
    NativeStackRoutes.DETAILS
  >;
};

export type AppNavigation = NativeStackNavigationProp<RootNativeStackParamList>;
