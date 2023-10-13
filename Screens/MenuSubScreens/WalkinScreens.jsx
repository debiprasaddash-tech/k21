import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderNavigator from '../../Components/Universal/HeaderNavigator';

const WalkinScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.15}}>
        <HeaderNavigator title={'Walkins'} />
      </View>

      <ScrollView style={{flex: 0.8}}></ScrollView>
    </SafeAreaView>
  );
};

export default WalkinScreen;

const styles = StyleSheet.create({});
