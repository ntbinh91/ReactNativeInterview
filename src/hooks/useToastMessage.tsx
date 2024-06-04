import React from 'react';
import {
  AlertCircleIcon,
  Icon,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  useToast,
  CheckCircleIcon,
} from '@gluestack-ui/themed';

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
  const toast = useToast();

  const getIconAndColor = (type: ToastType) => {
    switch (type) {
      case ToastType.success:
        return {
          icon: CheckCircleIcon,
          color: '$green',
        };
      case ToastType.error:
        return {
          icon: AlertCircleIcon,
          color: '$red',
        };
      case ToastType.warning:
        return {
          icon: AlertCircleIcon,
          color: '$yellow',
        };
    }
  };

  const showToast = ({title, message, type}: ToastProps) => {
    const {icon, color} = getIconAndColor(type);
    toast.closeAll();
    toast.show({
      placement: 'bottom',
      duration: 3000,
      render: () => {
        return (
          <Toast action={type}>
            <Icon as={icon} color={color} mt="$1" mr="$3" />
            <VStack space="xs" w="$full">
              <ToastTitle>{title}</ToastTitle>
              <ToastDescription>{message}</ToastDescription>
            </VStack>
          </Toast>
        );
      },
    });
  };

  return {showToast};
};
