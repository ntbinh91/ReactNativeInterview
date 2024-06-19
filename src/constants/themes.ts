const themeConfig = {
  colors: {
    primary: '#e11d48',
    secondary: '#B0B0B0',
    bg: '#f4f5fa',
    gray: '#a3a3a3',
    lightGray: '#d1d5db',
    text: '#525252',
  },
  spaces: {
    '0': 0,
    '0.5': 2,
    '1': 4,
    '1.5': 6,
    '2': 8,
    '2.5': 10,
    '3': 12,
    '3.5': 14,
    '4': 16,
    '4.5': 18,
    '5': 20,
  },
  fontSizes: {
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
  },
  borderRadius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 24,
    full: 9999,
  },
  shadows: {
    soft: {
      shadowColor: '#262626',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 40,
      shadowOpacity: 0.1,
      elevation: 10,
      _android: {
        shadowColor: '#8C8C8C',
        elevation: 20,
        shadowOpacity: 0.2,
      },
    },
  },
};

export default themeConfig;
