# Tuto React Native TS Navigation V6

<img src="./react-icon.svg" width="25%" alt="svg react native picture"> A web app to exercise on react native, typescript, eslint, prettier, Navigation v6, ...

## Table of contents

- [Tuto React Native TS Navigation V6](#tuto-react-native-ts-navigation-v6)
  - [Table of contents](#table-of-contents)
  - [Sources](#sources)
  - [Prior](#prior)
  - [Launch the application](#launch-the-application)

## Sources

- [reactnative.dev](https://reactnative.dev/docs/environment-setup)

- [React Native TS + Navigation v6](https://youtu.be/UzMbu3XKEoM)

## Prior

### Software

Here is the softwares I will use during this tutorial:

- VSCode: [https://code.visualstudio.com/]
- chocolatey: [https://chocolatey.org/]

### React Native Setup with Android on Windows

- setup: [https://reactnative.dev/docs/environment-setup]
- don't forget in Android Studio to launch a virtual Cellular before the command `nvm start android`

### React Native Setup for Expo with IOS on Mac

- setup: [https://reactnative.dev/docs/environment-setup]

  - install XCode withApp Store
  - `brew install watchman`
  - `npm install -g expo react-native`
  - `npm install expo`
  - lancement: `npx expo start`

- debugger:
  - `npm install -g react-devtools`
  - how-to: https://www.npmjs.com/package/react-devtools

## Launch the application

- `cd ~ && mkdir Workspace && cd ~/Workspace`
- `git clone [[the repo]](https://github.com/nicolastrote/tuto-react-native-ts-navigation-v6) && cd TutoReactNativeTSNavigationV6`
- `npm install`
- `npm run android` or `npm run ios`
