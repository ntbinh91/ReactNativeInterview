import {RouteProp} from '@react-navigation/native';

export enum ScreenName {
  // Auth stack
  Login = 'LoginScreen',

  // Main stack
  MainBottomTab = 'MainBottomTabScreen',
  Home = 'HomeScreen',
  Favorite = 'FavoriteScreen',
}

// Stack Params
export type MainStackParams = {
  [ScreenName.Home]: undefined;
  [ScreenName.Favorite]: undefined;
};

export type AuthStackParams = {
  [ScreenName.Login]: undefined;
};

// Route Prop
export type HomeScreenRouteProp = RouteProp<MainStackParams, ScreenName.Home>;

export type LoginScreenRouteProp = RouteProp<AuthStackParams, ScreenName.Login>;
