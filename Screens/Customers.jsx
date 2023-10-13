import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import HeaderNavigator from '../Components/Universal/HeaderNavigator';

const CustomerScreen = () => {
  return (
    <View>
      <HeaderNavigator title={'Customers'} />
      {/* <Text>Report Screen</Text> */}
    </View>
  );
};
export default CustomerScreen;
const styles = StyleSheet.create({});
