import {StyleSheet} from 'react-native';
import themeConfig from 'src/constants/themes';

const styles = StyleSheet.create({
  button: {
    backgroundColor: themeConfig.colors.primary,
    padding: themeConfig.spaces['3'],
    borderRadius: themeConfig.borderRadius.md,
    flexDirection: 'row',
    gap: themeConfig.spaces['1'],
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: themeConfig.fontSizes.sm,
    textAlign: 'center',
  },
});

export default styles;
