import React, {useState} from 'react';
import useAppStore from 'src/stores/useAppStore';
import IMAGES from 'src/constants/images';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import {ToastType, useToastMessage} from 'src/hooks/useToastMessage';
import {LoginRequest} from 'src/types/auth.types';
import {EnvelopeIcon, LockClosedIcon} from 'react-native-heroicons/outline';
import styles from './LoginScreen.styles';
import themeConfig from 'src/constants/themes';
import Button from 'src/components/Button/Button';
import FormItemError from 'src/components/FormItemError';

const DEFAULT_CREDENTIALS = {
  email: 'reactnative@jetdevs.com',
  password: 'jetdevs@123',
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginScreen = () => {
  const {setCurrentUser} = useAppStore();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {showToast} = useToastMessage();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: DEFAULT_CREDENTIALS,
    mode: 'onChange',
  });

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onSubmit = async (data: LoginRequest) => {
    setIsLoading(true);
    if (
      data.email === DEFAULT_CREDENTIALS.email &&
      data.password === DEFAULT_CREDENTIALS.password
    ) {
      setTimeout(() => {
        setCurrentUser({
          accessToken: 'xx',
          userProfile: {
            id: 1,
            name: 'test',
            email: 'aaa@a.com',
          },
        });
        setIsLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        showToast({
          title: 'Error',
          message: 'Email or password is not correct.',
          type: ToastType.error,
        });
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleFocus = (name: string) => () => {
    if (name === 'email') {
      setIsEmailFocused(true);
    } else if (name === 'password') {
      setIsPasswordFocused(true);
    }
  };

  const handleBlur = (name: string) => () => {
    if (name === 'email') {
      setIsEmailFocused(false);
    } else if (name === 'password') {
      setIsPasswordFocused(false);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.logoWrapper}>
          <Image source={IMAGES.LOGO} style={styles.logo} alt="logo" />
        </View>

        <Text style={styles.title}>LOGIN</Text>
        <View style={styles.formWrapper}>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <View style={styles.formItemWrapper}>
                <View
                  style={[
                    styles.formItemInputWrapper,
                    {
                      borderColor: isEmailFocused
                        ? themeConfig.colors.primary
                        : themeConfig.colors.lightGray,
                    },
                  ]}>
                  <EnvelopeIcon
                    color={
                      isEmailFocused
                        ? themeConfig.colors.primary
                        : themeConfig.colors.secondary
                    }
                  />
                  <TextInput
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="Email"
                    value={value}
                    onChangeText={text => {
                      onChange(text);
                    }}
                    blurOnSubmit={false}
                    clearButtonMode="while-editing"
                    style={styles.formItemInput}
                    onFocus={handleFocus('email')}
                    onBlur={handleBlur('email')}
                  />
                </View>
                {errors.email && (
                  <FormItemError errorMessage={errors.email.message} />
                )}
              </View>
            )}
            name="email"
          />

          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <View style={styles.formItemWrapper}>
                <View
                  style={[
                    styles.formItemInputWrapper,
                    {
                      borderColor: isPasswordFocused
                        ? themeConfig.colors.primary
                        : themeConfig.colors.lightGray,
                    },
                  ]}>
                  <LockClosedIcon
                    color={
                      isPasswordFocused
                        ? themeConfig.colors.primary
                        : themeConfig.colors.secondary
                    }
                  />
                  <TextInput
                    textContentType="password"
                    secureTextEntry={!isShowPassword}
                    placeholder="Password"
                    value={value}
                    onChangeText={text => {
                      onChange(text);
                    }}
                    clearButtonMode="while-editing"
                    textAlignVertical="center"
                    style={styles.formItemInput}
                    onFocus={handleFocus('password')}
                    onBlur={handleBlur('password')}
                  />
                  {value === '' ? (
                    <></>
                  ) : (
                    <TouchableOpacity onPress={toggleShowPassword}>
                      {isShowPassword ? (
                        <EyeIcon
                          color={themeConfig.colors.gray}
                          size={themeConfig.fontSizes.lg}
                        />
                      ) : (
                        <EyeSlashIcon
                          color={themeConfig.colors.gray}
                          size={themeConfig.fontSizes.lg}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                </View>
                {errors.password && (
                  <FormItemError errorMessage={errors.password.message} />
                )}
              </View>
            )}
            name="password"
          />
        </View>
        <Button
          title="LOGIN"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
