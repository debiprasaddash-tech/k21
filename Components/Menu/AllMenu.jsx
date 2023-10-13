import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HeaderNavigator from '../Universal/HeaderNavigator';
import MenuCards from './MenuCards';

const AllMenu = () => {
  return (
    <ScrollView>
      <HeaderNavigator title={'Menu'} />
      <MenuCards />
    </ScrollView>
  );
};

export default AllMenu;
