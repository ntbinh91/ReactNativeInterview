import {StyleSheet} from 'react-native';
import themeConfig from 'src/constants/themes';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 48,
    alignItems: 'center',
    gap: themeConfig.spaces['3'],
  },
  text: {
    color: themeConfig.colors.gray,
  },
});

export default styles;
