import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import styles from './Button.styles';
import themeConfig from 'src/constants/themes';

interface Props extends TouchableOpacityProps {
  title: JSX.Element | string;
  isLoading?: boolean;
}

const Button = ({title, isLoading, ...props}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: props.disabled
            ? themeConfig.colors.gray
            : themeConfig.colors.primary,
        },
      ]}
      {...props}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
