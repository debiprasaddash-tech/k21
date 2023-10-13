import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllMenu from '../Components/Menu/AllMenu';
import AppointmentScreen from './MenuSubScreens/AppointmentScreen';
import ServicesScreen from './MenuSubScreens/ServicesScreen';
import RecordingsScreen from './MenuSubScreens/RecordingsScreen';
import WalkinScreen from './MenuSubScreens/WalkinScreens';
import EmployeesScreen from './MenuSubScreens/EmployeesScreen';
import SMSTemplatesScreen from './MenuSubScreens/SMSTemplates';
import InventoryScreen from './MenuSubScreens/InventoryScreen';
import ModesScreen from './MenuSubScreens/ModesScreen';
import MembershipScreen from './MenuSubScreens/MembershipScreen';
import ExpenditureScreen from './MenuSubScreens/ExpenditureScreen';
import SourcesScreen from './MenuSubScreens/Sources';

const MenuScreen = () => {
  const BranchStack = createNativeStackNavigator();
  return (
    <BranchStack.Navigator screenOptions={{headerShown: false}}>
      <BranchStack.Screen name="All-Menu" component={AllMenu} />
      <BranchStack.Screen name="Appointments" component={AppointmentScreen} />
      <BranchStack.Screen name="Services" component={ServicesScreen} />
      <BranchStack.Screen name="Recordings" component={RecordingsScreen} />
      <BranchStack.Screen name="Walkins" component={WalkinScreen} />
      <BranchStack.Screen name="Employees" component={EmployeesScreen} />
      <BranchStack.Screen name="SMS Templates" component={SMSTemplatesScreen} />
      <BranchStack.Screen name="Inventory" component={InventoryScreen} />
      <BranchStack.Screen name="Modes" component={ModesScreen} />
      <BranchStack.Screen
        name="Membership Plans"
        component={MembershipScreen}
      />
      <BranchStack.Screen name="Expenditure" component={ExpenditureScreen} />
      <BranchStack.Screen name="Sources" component={SourcesScreen} />
    </BranchStack.Navigator>
  );
};
export default MenuScreen;

const styles = StyleSheet.create({});
