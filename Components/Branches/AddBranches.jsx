import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderNavigator from '../Universal/HeaderNavigator';
import RegisterForm from './RegisterForm';

export default function AddBranches() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.15}}>
        <HeaderNavigator title={'Add New Branch'} />
      </View>
      <ScrollView style={{flex: 0.85}}>
        <RegisterForm />
      </ScrollView>
      
    </SafeAreaView>
  );
}
