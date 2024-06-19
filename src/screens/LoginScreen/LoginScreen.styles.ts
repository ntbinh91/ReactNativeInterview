import {StyleSheet} from 'react-native';
import themeConfig from 'src/constants/themes';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: themeConfig.colors.bg,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: themeConfig.spaces['5'],
    paddingVertical: 100,
    marginHorizontal: themeConfig.spaces['5'],
    marginTop: 50,
    marginBottom: 30,
    borderRadius: themeConfig.borderRadius.xl,
    position: 'relative',
    ...themeConfig.shadows.soft,
  },
  logoWrapper: {
    position: 'absolute',
    left: '50%',
    backgroundColor: 'white',
    width: 80,
    height: 80,
    borderRadius: themeConfig.borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateY: -40}, {translateX: -15}],
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: themeConfig.fontSizes['2xl'],
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 80,
  },
  formWrapper: {
    marginBottom: 70,
  },
  formItemWrapper: {
    gap: themeConfig.spaces['1'],
    marginBottom: themeConfig.spaces['5'],
  },
  formItemInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: themeConfig.spaces['3'],
    borderBottomWidth: 1,
  },
  formItemInput: {
    paddingVertical: themeConfig.spaces['3'],
    flex: 1,
  },
});

export default styles;
