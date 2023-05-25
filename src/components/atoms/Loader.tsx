import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';

import { Colors } from '../../constants/colors';

interface Props {
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

function Loader({
  color = Colors.WHITE,
  size = 30,
  style = { marginTop: 40 },
}: Props) {
  return <ActivityIndicator color={color} size={size} style={style} />;
}

export default Loader;
