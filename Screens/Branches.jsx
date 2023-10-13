import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import HeaderNavigator from '../Components/Universal/HeaderNavigator';
import GradientButton from '../Components/Universal/GradientButton';
import AllBranches from '../Components/Branches/AllBranches';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddBranches from '../Components/Branches/AddBranches';

const BranchScreen = () => {
  const BranchStack = createNativeStackNavigator();
  return (
    <>
      <BranchStack.Navigator screenOptions={{headerShown: false}}>
        <BranchStack.Screen
          name="All-Branches"
          component={AllBranches}
          options={{tabBarLabel: 'Bracnh!'}}
        />
        <BranchStack.Screen
          name="Add-Branches"
          component={AddBranches}
          options={{tabBarLabel: 'branch!'}}
        />
      </BranchStack.Navigator>
    </>
  );
};
export default BranchScreen;
