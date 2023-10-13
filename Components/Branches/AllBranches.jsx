import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import HeaderNavigator from '../Universal/HeaderNavigator';
import GradientButton from '../Universal/GradientButton';

const AllBranches = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 0.1}}>
          <HeaderNavigator title={'Branches'} />
        </View>
        <ScrollView style={{flex: 0.7, paddingTop: 45}}>
          <View style={styles.box}>
            <Text
              style={{
                paddingLeft: 20,
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 20,
                fontFamily: 'Roboto',
                
              }}>
              Kaira Aqua Spa Pvt Ltd
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            flex: 0.1,
            alignItems: 'center',
            marginBottom: 10,
            height: 50,
          }}>
          <GradientButton
            text={'+ Add Branches'}
            paddingInline={45}
            screenToMove={'Add-Branches'}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
export default AllBranches;
const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    flex: 0.65,
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    minHeight: 58,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginBottom:10
  },
});
