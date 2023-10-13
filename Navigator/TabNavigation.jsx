import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../Screens/Home';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Image from 'react-native';
import ReportScreen from '../Screens/Reports';
import Customers from '../Screens/Customers';
import Branches from '../Screens/Branches';
import Menu from '../Screens/Menu';
import CustomerScreen from '../Screens/Customers';
import BranchScreen from '../Screens/Branches';
import MenuScreen from '../Screens/Menu';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon1 name="home" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Reports"
          component={ReportScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="bar-chart" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Customer"
          component={CustomerScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon2 name="people-outline" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Branches"
          component={BranchScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon2 name="git-branch-outline" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="menu" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
