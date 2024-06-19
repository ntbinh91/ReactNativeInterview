import {View, Text} from 'react-native';
import React from 'react';
import {ExclamationCircleIcon} from 'react-native-heroicons/outline';
import themeConfig from 'src/constants/themes';
import styles from './FormItemError.styles';

interface Props {
  errorMessage?: string;
}

const FormItemError = ({errorMessage}: Props) => {
  return (
    <View style={styles.wrapper}>
      <ExclamationCircleIcon
        color={themeConfig.colors.primary}
        size={themeConfig.fontSizes.md}
      />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

export default FormItemError;
