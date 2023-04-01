
# React-Native E-Wallet App

- an E-Wallet app by react native for me to learn and expand my knowledge in the technology.

- used my own simple e-wallet api service as a backend to this project (used node.js with mongoDB) [check the code out](https://github.com/medomy/e-wallet-backend-public)

## installation

clone the repo first
```bash
  npm clone git@github.com:medomy/wallet_app_mobile.git
  cd wallet_app_mobile
```
then start the app 
```bash
  npm i
  npm start
```
## Walk through
- first we have a login screen that apperas if you are not registered by this mobile before.
- if you have logged in before the home screen will appear.
- Home screen has the user's balance data and previus transactions.
- if you choose one of your previus transaction users to send money to you will go to the transaction screen with user's data.
## Tech Stack

**Client:** React-Native, redux, Typescript , Axios , RTK

**Server:** [my own api implementation with render help to deploy it](https://github.com/medomy/e-wallet-backend-public)

**libraries:** 
- @react-navigation
- react-native-splash-screen
- axios
- @reduxjs/toolkit
- react-native-gesture-handler
- react-native-reanimated
## Appendix
design inspired from : [dribble design](https://dribbble.com/shots/19790984-Money-Transfer-Mobile-IOS-App)

**note that** app is tested **Android only**

