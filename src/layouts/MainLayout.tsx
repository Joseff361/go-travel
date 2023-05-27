import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { Colors } from '../constants/colors';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  scrollable?: boolean;
}

function MainLayout({
  children = <></>,
  style = {},
  scrollable = true,
}: Props) {
  const content = scrollable ? (
    <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
  ) : (
    children
  );

  return <View style={[styles.container, style]}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
});

export default MainLayout;
