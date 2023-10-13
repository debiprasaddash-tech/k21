import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderNavigator from '../../Components/Universal/HeaderNavigator';

const SMSTemplatesScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.15}}>
        <HeaderNavigator title={'SMS Templates'} />
      </View>

      <ScrollView style={{flex: 0.8}}></ScrollView>
    </SafeAreaView>
  );
};

export default SMSTemplatesScreen;

const styles = StyleSheet.create({});
