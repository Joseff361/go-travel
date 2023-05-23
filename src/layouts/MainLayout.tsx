import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { Colors } from '../constants/colors';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function MainLayout({ children = <></>, style = {} }: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
});

export default MainLayout;
