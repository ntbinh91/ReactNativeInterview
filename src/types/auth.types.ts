export type LoginRequest = {
  email: string;
  password: string;
};

export type UserProfile = {
  id: number;
  email: string;
  name: string;
};

export type LoginResponse = {
  accessToken: string;
  userProfile: UserProfile;
};
