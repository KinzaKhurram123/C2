import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import Drawer from './Drawer/Drawer';
import navigationService from './navigationService';
import ChangePassword from './Screens/ChangePassword';
import ChooseDeclineReasonScreen from './Screens/ChooseDeclineReasonScreen';
import FareScreen from './Screens/FareScreen';
import History from './Screens/History';
import Home from './Screens/Home';
import LoginScreen from './Screens/LoginScreen';
import MapScreen from './Screens/MapScreen';
import MessagesScreen from './Screens/MessagesScreen';
import MyWallet from './Screens/MyWallet';
import ParcelTrackingScreen from './Screens/ParcelTrackingScreen';
import PassengerDetails from './Screens/PassengerDetails';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceholderScreen from './Screens/PlaceholderScreen';
import Profile from './Screens/Profile';
import RateScreen from './Screens/RateScreen';
import ReferFriendScreen from './Screens/ReferFriendScreen';
import RequestScreen from './Screens/RequestScreen';
import ResetPassword from './Screens/ResetPassword';
import RideScreen from './Screens/RideScreen';
import SendTripRecieptScreen from './Screens/SendTripRecieptScreen';
import Signup from './Screens/Signup';
import TrackingScreen from './Screens/TrackingScreen';
import ForgetPassword from './Screens/ForgetPassword';
import VerifyNumber from './Screens/VerifyNumber';
import WalkThroughScreen from './Screens/WalkthroughScreen';
import TermsAndConditions from './Screens/TermsAndConditions';
import PrivacyPolicy from './Screens/PrivacyPolicy';

enableScreens();
const AppNavigator = () => {
  const isGoalCreated = useSelector(state => state.authReducer.isGoalCreated);
  const walkThrough = true
  const role = useSelector(state => state.authReducer.role);
  const isVerified = useSelector(state => state.authReducer.isVerified);
  const token = useSelector(state => state.authReducer.token);
  console.log(token, 'token in app navigator');
  const RootNav = createNativeStackNavigator();

  const AppNavigatorContainer = () => {
    const firstScreen =
      walkThrough == false
        ? 'WalkThroughScreen'
        : token == null
          ? 'LoginScreen'
          : 'MyDrawer';

    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <RootNav.Navigator
          initialRouteName={firstScreen}
          screenOptions={{ headerShown: false }}>
          <RootNav.Screen name="MyDrawer" component={MyDrawer} />
          <RootNav.Screen
            name="WalkThroughScreen"
            component={WalkThroughScreen}
          />
          <RootNav.Screen
            name="PlaceholderScreen"
            component={PlaceholderScreen}
          />
          <RootNav.Screen name="LoginScreen" component={LoginScreen} />
          <RootNav.Screen name="FareScreen" component={FareScreen} />
          <RootNav.Screen name="VerifyEmail" component={ForgetPassword} />
          <RootNav.Screen name="ResetPassword" component={ResetPassword} />
          <RootNav.Screen name="RequestScreen" component={RequestScreen} />
          <RootNav.Screen name="ChangePassword" component={ChangePassword} />
          <RootNav.Screen name="Signup" component={Signup} />
          <RootNav.Screen name="MapScreen" component={MapScreen} />
          <RootNav.Screen name="RideScreen" component={RideScreen} />
          <RootNav.Screen name="PaymentScreen" component={PaymentScreen} />
          <RootNav.Screen name="VerifyNumber" component={VerifyNumber} />
          <RootNav.Screen name="Profile" component={Profile} />
          <RootNav.Screen name="RateScreen" component={RateScreen} />
          <RootNav.Screen name="MessagesScreen" component={MessagesScreen} />
          <RootNav.Screen name="TrackingScreen" component={TrackingScreen} />
          {/* <RootNav.Screen name="Home" component={Home} /> */}

          <RootNav.Screen
            name="ParcelTrackingScreen"
            component={ParcelTrackingScreen}
          />
          {/* <RootNav.Screen name="History" component={History} /> */}
          {/* <RootNav.Screen name="PrivacyPolicy" component={PrivacyPolicy} /> */}
          {/* <RootNav.Screen
            name="TermsAndConditions"
            component={TermsAndConditions}
          /> */}
          {/* <RootNav.Screen name="HelpAndSupport" component={HelpAndSupport} /> */}
          {/* <RootNav.Screen
            name="ReferFriendScreen"
            component={ReferFriendScreen}
          /> */}
          <RootNav.Screen name="MyWallet" component={MyWallet} />
          <RootNav.Screen
            name="PassengerDetails"
            component={PassengerDetails}
          />
          <RootNav.Screen
            name="RecieptScreen"
            component={SendTripRecieptScreen}
          />
          <RootNav.Screen
            name="ChooseDeclineReasonScreen"
            component={ChooseDeclineReasonScreen}
          />
        </RootNav.Navigator>
      </NavigationContainer>
    );
  };

  return <AppNavigatorContainer />;
};

export const MyDrawer = () => {
  const DrawerNavigation = createDrawerNavigator();
  const firstScreen = 'PlaceholderScreen';
  return (
    <DrawerNavigation.Navigator
      drawerContent={props => <Drawer {...props} />}
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '75%',
          borderTopRightRadius: moderateScale(20, 0.6),
          borderBottomRightRadius: moderateScale(20, 0.6),
        },
      }}>
      <DrawerNavigation.Screen
        name="PlaceholderScreen"
        component={PlaceholderScreen}
      />
      <DrawerNavigation.Screen name="Home" component={Home} />
      <DrawerNavigation.Screen name={'RateScreen'} component={RateScreen} />
      <DrawerNavigation.Screen name="RideScreen" component={RideScreen} />
      <DrawerNavigation.Screen name="PaymentScreen" component={PaymentScreen} />
      <DrawerNavigation.Screen name="History" component={History} />
      <DrawerNavigation.Screen
        name="ReferFriendScreen"
        component={ReferFriendScreen}
      />
      <DrawerNavigation.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
      />
      <DrawerNavigation.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
      />

      <DrawerNavigation.Screen name="MapScreen" component={MapScreen} />

      <DrawerNavigation.Screen
        name="RecieptScreen"
        component={SendTripRecieptScreen}
      />
      <DrawerNavigation.Screen
        name="PassengerDetails"
        component={PassengerDetails}
      />

    </DrawerNavigation.Navigator>
  );
};

export default AppNavigator;
