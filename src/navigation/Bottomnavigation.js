// Bottomnavigation.js
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, Image} from 'react-native';
import HomeScreen from '../home/HomeScreen';
import Search from '../home/Search';
import Browe from '../home/Browe';
import Menu from '../home/Menu';
import {COLORS} from '../images/authimage/theme';
import MYorder from '../home/MYorder';
import Categories from '../home/Categories';
const {width, height} = Dimensions.get('screen');
const Tab = createBottomTabNavigator();

const Bottomnavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: COLORS.headingcolor,
        tabBarStyle: {
          height: height * 0.1,
          //   borderTopLeftRadius: 30,
          //   borderTopRightRadius: 30,
          backgroundColor: '#FFF',
          paddingBottom: 10,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('../images/Bottomnavigation/Vector2.png')
              : require('../images/Bottomnavigation/unactivehome.png');
          } else if (route.name === 'Categories') {
            iconName = focused
              ? require('../images/Bottomnavigation/iwwa_dashboardactive.png')
              : require('../images/Bottomnavigation/iwwa_dashboard.png');
          } else if (route.name === 'My Orders') {
            iconName = focused
              ? require('../images/Bottomnavigation/solar_bag-linearactive.png')
              : require('../images/Bottomnavigation/solar_bag-linear.png');
          } else if (route.name === 'Account') {
            iconName = focused
              ? require('../images/Bottomnavigation/iconamoon_profile-circle-thinactive.png')
              : require('../images/Bottomnavigation/iconamoon_profile-circle-thin.png');
          }
          return (
            <Image
              source={iconName}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="My Orders"
        component={MYorder}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Account" component={Menu} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

export default Bottomnavigation;
