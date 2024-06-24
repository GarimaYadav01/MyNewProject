import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../auth/SplashScreen';
import Singupscreen from '../auth/Singupscreen';
import HomeScreen from '../home/HomeScreen';
import Splashsecond from '../auth/Splashsecond';
import LoginScreen from '../auth/LoginScreen';
import ForgetScreen from '../auth/ForgetScreen';
import Otpverification from '../auth/Otpverification';
import ResetPassword from '../auth/ResetPassword';
import Bottomnavigation from './Bottomnavigation';
import Aaddtocard from '../home/Aaddtocard';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Singupscreen" component={Singupscreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Splashsecond" component={Splashsecond} />
        <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
        <Stack.Screen name="Otpverification" component={Otpverification} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Bottomnavigation" component={Bottomnavigation} />

        <Stack.Screen name="Aaddtocard" component={Aaddtocard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
