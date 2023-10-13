import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MenuCards = () => {
  const navigation=useNavigation()
  const menuCardDetails = [
    {
      row1: {
        image: require('../../assets/Menu/serviceIcon.png'),
        title: 'Services',
        path: 'Services',
      },
      row2: {
        image: require('../../assets/Menu/calendarIcon.png'),
        title: 'Appointments',
        path: 'Appointments',
      },
    },
    {
      row1: {
        image: require('../../assets/Menu/recordingIcon.png'),
        title: 'Recordings',
        path: 'Recordings',
      },
      row2: {
        image: require('../../assets/Menu/walkingIcon.png'),
        title: 'Walkins',
        path: 'Walkins',
      },
    },
    {
      row1: {
        image: require('../../assets/Menu/employeesIcon.png'),
        title: 'Employees',
        path: 'Employees',
      },
      row2: {
        image: require('../../assets/Menu/smsIcon.png'),
        title: 'SMS Templates',
        path: 'SMS Templates',
      },
    },
    {
      row1: {
        image: require('../../assets/Menu/inventoryIcon.png'),
        title: 'Inventory',
        path: 'Inventory',
      },
      row2: {
        image: require('../../assets/Menu/walletIcon.png'),
        title: 'Modes',
        path: 'Modes',
      },
    },
    {
      row1: {
        image: require('../../assets/Menu/membershipIcon.png'),
        title: 'Membership Plans',
        path: 'Membership Plans',
      },
      row2: {
        image: require('../../assets/Menu/expenditureIcon.png'),
        title: 'Expenditure',
        path: 'Expenditure',
      },
    },
    {
      row2: {
        image: require('../../assets/Menu/smsIcon.png'),
        title: 'Source/Referal',
        path: 'Sources',
      },
    },
  ];
  return (
    <>
      {menuCardDetails.map((val, i) => {
        return (
          <View
            key={i}
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              paddingHorizontal: 20,
              gap: 15,
            }}>
            <TouchableOpacity
              style={{
                ...styles.box,
                shadowColor: !val?.row1?.image && '#fff',
                backgroundColor: !val?.row1?.image ? 'inherit' : '#fff',
              }} onPress={()=>{navigation.navigate(val?.row1?.path)}}>
              {val?.row1?.image ? (
                <Image source={val?.row1?.image} height={35} width={35} />
              ) : null}
              <Text
                style={{
                  color: '#A8A8A8',
                  fontFamily: 'Arial',
                  fontSize: 15,
                  fontWeight: '400',
                }}>
                {val?.row1?.title}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.box} onPress={()=>{navigation.navigate(val?.row2?.path)}}>
              <Image
                source={
                  val?.row2.image
                    ? val?.row2.image
                    : require('../../assets/Menu/membershipIcon.png')
                }
                height={35}
                width={35}
              />
              <Text
                style={{
                  color: '#A8A8A8',
                  fontFamily: 'Arial',
                  fontSize: 15,
                  fontWeight: '400',
                }}>
                {val.row2.title}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </>
  );
};
const styles = StyleSheet.create({
  box: {
    width: '55%',
    height: 120,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
export default MenuCards;
