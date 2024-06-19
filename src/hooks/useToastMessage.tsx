import React from 'react';
import Toast from 'react-native-toast-message';

interface ToastProps {
  title: string;
  message: string;
  type: ToastType;
}

export enum ToastType {
  success = 'success',
  error = 'error',
  warning = 'warning',
}

export const useToastMessage = () => {
  const showToast = ({title, message, type}: ToastProps) => {
    Toast.hide();
    Toast.show({
      type,
      text1: title,
      text2: message,
    });
  };

  return {showToast};
};
