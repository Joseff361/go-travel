import { StyleSheet, View } from 'react-native';

import { Colors } from '../constants/colors';

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
});

export default MainLayout;
