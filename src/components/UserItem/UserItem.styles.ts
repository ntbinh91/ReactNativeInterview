import {StyleSheet} from 'react-native';
import themeConfig from 'src/constants/themes';

const styles = StyleSheet.create({
  wrapper: {
    paddingRight: themeConfig.spaces['5'],
    paddingLeft: 50,
  },
  content: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: themeConfig.borderRadius['xl'],
    padding: themeConfig.spaces['5'],
    paddingLeft: 42,
    position: 'relative',
    minHeight: 80,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: themeConfig.borderRadius.full,
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    left: -30,
    top: 13,
  },
  infoWrapper: {
    flex: 1,
    gap: themeConfig.spaces['1'],
  },
  username: {
    fontSize: themeConfig.fontSizes['lg'],
    fontWeight: 'bold',
    color: themeConfig.colors.text,
  },
  addressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: themeConfig.spaces['1'],
  },
  address: {
    fontSize: themeConfig.fontSizes['sm'],
    color: themeConfig.colors.gray,
  },
});

export default styles;
