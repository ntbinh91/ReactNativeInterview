import {StyleSheet} from 'react-native';
import themeConfig from 'src/constants/themes';

const styles = StyleSheet.create({
  userListContainer: {
    paddingVertical: themeConfig.spaces['3'],
    backgroundColor: themeConfig.colors.bg,
  },
  itemSeparator: {
    height: themeConfig.spaces['3'],
  },
});

export default styles;
