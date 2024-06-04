import {
  Button,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Image,
  Input,
  InputIcon,
  InputSlot,
  SafeAreaView,
  Text,
  View,
  useToken,
} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import useAppStore from 'src/stores/useAppStore';
import IMAGES from 'src/constants/images';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {TextInput} from 'react-native';
import {AlertCircleIcon} from '@gluestack-ui/themed';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';
import {ToastType, useToastMessage} from 'src/hooks/useToastMessage';
import {LoginRequest} from 'src/types/auth.types';
import {EnvelopeIcon, LockClosedIcon} from 'react-native-heroicons/outline';

const DEFAULT_CREDENTIALS = {
  email: 'reactnative@jetdevs.com',
  password: 'jetdevs@123',
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const LoginScreen = () => {
  const {setCurrentUser} = useAppStore();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {showToast} = useToastMessage();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const activeColor = useToken('colors', 'rose600');
  const inactiveColor = useToken('colors', 'secondary300');

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: DEFAULT_CREDENTIALS,
  });

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onSubmit = async (data: LoginRequest) => {
    if (
      data.email === DEFAULT_CREDENTIALS.email &&
      data.password === DEFAULT_CREDENTIALS.password
    ) {
      setCurrentUser({
        accessToken: 'xx',
        userProfile: {
          id: 1,
          name: 'test',
          email: 'aaa@a.com',
        },
      });
    } else {
      showToast({
        title: 'Error',
        message: 'Email or password incorrect.',
        type: ToastType.error,
      });
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
    <SafeAreaView backgroundColor="#f4f5fa" flex={1}>
      <View
        flex={1}
        bg="$white"
        px="$6"
        py={100}
        mx="$6"
        mt={50}
        mb={30}
        rounded="$lg"
        position="relative"
        softShadow="4">
        <View
          position="absolute"
          left="50%"
          backgroundColor="white"
          width={80}
          height={80}
          borderRadius={40}
          justifyContent="center"
          alignItems="center"
          transform={[{translateY: -40}, {translateX: -15}]}>
          <Image source={IMAGES.LOGO} width={50} height={50} alt="logo" />
        </View>

        <Text fontSize="$2xl" bold textAlign="center" mb={80}>
          LOGIN
        </Text>
        <View mb={70}>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <FormControl isInvalid={!!errors.email} mb="$8">
                <Input
                  variant="underlined"
                  borderColor={isEmailFocused ? '$rose600' : '$secondary200'}>
                  <InputSlot mr="$3">
                    <EnvelopeIcon
                      color={isEmailFocused ? activeColor : inactiveColor}
                    />
                  </InputSlot>
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
                    flex={1}
                    onFocus={handleFocus('email')}
                    onBlur={handleBlur('email')}
                  />
                </Input>
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    {errors.email?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            )}
            name="email"
          />

          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <FormControl isInvalid={!!errors.password} mb="$4">
                <Input
                  variant="underlined"
                  borderColor={
                    isPasswordFocused ? '$rose600' : '$secondary200'
                  }>
                  <InputSlot mr="$3">
                    <LockClosedIcon
                      color={isPasswordFocused ? activeColor : inactiveColor}
                    />
                  </InputSlot>
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
                    flex={1}
                    onFocus={handleFocus('password')}
                    onBlur={handleBlur('password')}
                  />
                  {value === '' ? (
                    <></>
                  ) : (
                    <InputSlot pr="$3" onPress={toggleShowPassword}>
                      <InputIcon as={isShowPassword ? EyeIcon : EyeSlashIcon} />
                    </InputSlot>
                  )}
                </Input>
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    {errors.password?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            )}
            name="password"
          />
        </View>
        <Button
          onPress={handleSubmit(onSubmit)}
          size="lg"
          disabled={!isValid}
          bg={isValid ? '$rose600' : '$secondary300'}>
          <ButtonText>LOGIN</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
