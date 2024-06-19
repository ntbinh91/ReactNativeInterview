import {StyleSheet} from 'react-native';
import themeConfig from 'src/constants/themes';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: themeConfig.spaces['1'],
    marginTop: themeConfig.spaces['1'],
  },
  errorMessage: {
    color: themeConfig.colors.primary,
    fontSize: themeConfig.fontSizes.sm,
  },
});

export default styles;
