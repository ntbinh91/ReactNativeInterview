export type User = {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
};

type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};
type Id = {
  name: string;
  value: string;
};
type Dob = {
  date: string;
  age: number;
};
type Login = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};
type Location = {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
};
type Timezone = {
  offset: string;
  description: string;
};
type Coordinates = {
  latitude: string;
  longitude: string;
};
type Street = {
  number: number;
  name: string;
};
type Name = {
  title: string;
  first: string;
  last: string;
};

export type GetUsersParams = {
  results?: number;
  page: number;
};

export type GetUsersResponse = {
  data: {
    results: User[];
    info: {
      seed: string;
      results: number;
      page: number;
      version: string;
    };
  };
};
