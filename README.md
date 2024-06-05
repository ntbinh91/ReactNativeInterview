# React Native Technical Interview

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Demo

| iOS                                              | Android                                                  |
| ------------------------------------------------ | -------------------------------------------------------- |
| ![iOS screen](./readme_resources/ios_screen.gif) | ![Android screen](./readme_resources/android_screen.gif) |

## Table of Contents

- [1. General Information](#1-general-information)
- [2. Main Features](#2-main-features)
- [3. Installation and Setup Instructions](#3-installation-and-setup-instructions)
- [4. Libraries](#4-libraries)
- [5. License](#5-license)

## 1. General Information

This repository contains source code for **A React Native Technical Interview** test.

Check out requirements [here](https://drive.google.com/file/d/1V3eay2KK5-4_no1wxOqMgLnTxBsdmc7B/view).

## 2. Main Features

- Screens

  - Login screen.
  - Dashboard screen with bottom navigation:
    - There will be 2 tabs inside it:
      - Home
      - Favorite

- Login Screen

  - There will be three views.
    1. Enter Email (Input Field)
    2. Enter Password (Input Field)
    3. Login (Button)
  - Login button click → check the user input and allow login with the fixed email & password
    below.
  - If email & password matched, open the dashboard screen with two tabs. (Email: reactnative@jetdevs.com , Password: jetdevs@123 )

- Home Tab
  - Random user API, load more (pagination), and pull to refresh.
  - The following items should be in each item.
    - Profile picture
    - Name
    - Other details (optional, you can add them to make better UI)
    - Your favorite icon on the top right side.
  - Provide a function to mark users as a favorite/unfavorite.
- Favorite Tab
  - Show your favorite users list.
  - Provide an option to mark users as an unfavorite.

## 3. Installation and Setup Instructions

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## 4. Libraries

- [React Native@0.74](https://reactnative.dev/):
- Routing:
  - [React Navigation](https://reactnavigation.org/)
- State management:
  - [Zustand](https://github.com/pmndrs/zustand):
    - A small, fast and scalable state-management solution using simplified flux principles.
    - [Why zustand over redux?](https://github.com/pmndrs/zustand#why-zustand-over-redux):
      - Simple and un-opinionated.
      - Makes hooks the primary means of consuming state.
      - Doesn't wrap your app in context providers.
      - Can inform components transiently (without causing render).
- Styling:
  - [Gluestack IO](https://gluestack.io/): React & React Native Components & Patterns
- Forms:
  - [React Hook Form](https://react-hook-form.com/): Performant, flexible and extensible forms with easy-to-use validation.
  - [@hookform/resolvers](https://github.com/react-hook-form/resolvers); [Yup](https://github.com/jquense/yup): Form validation.
- API request
  - [Axios](https://axios-http.com/): HTTP client.
  - [React-query](https://react-query.tanstack.com/):
    - Fetch, cache and update data.
    - Server state management.
- Other libraries
  - [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)
  - [@shopify/flash-list](https://github.com/Shopify/flash-list)
  - [react-native-heroicons](https://github.com/ecklf/react-native-heroicons)

## 5. License

MIT license
