import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Appointments = () => {
  let appointmentData = [
    {
      color: ['#08B827', '#08B82773'],
      number: 3,
      detials: 'Fulfilled',
    },
    {
      color: ['#1D70F0', '#1D70F073'],
      number: 4,
      detials: 'Open',
    },
    {
      color: ['#FF9902', '#FF990273'],
      number: 1,
      detials: 'Positioned',
    },
    {
      color: ['#EA3433', '#EA343373'],
      number: 12,
      detials: 'Fulfilled',
    },
  ];
  return (
    <View style={{paddingHorizontal: 20, paddingTop: 45}}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '400',
          color: '#000',
          fontFamily: 'Roboto',
        }}>
        Appointments
      </Text>
      <ScrollView horizontal={true} style={{paddingTop: 13}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 10,
          }}>
          {appointmentData.map((p, i) => (
            <LinearGradient
              key={i}
              colors={p.color}
              start={{x: 0, y: 0.8}}
              end={{x: 0, y: 0}}
              style={{
                height: 80,
                width: 100,
                borderRadius: 8,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: '700',
                  color: '#fff',
                  fontFamily: 'Arial',
                }}>
                {p.number}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '400',
                  color: '#fff',
                  fontFamily: 'Arial',
                }}>
                {p.detials}
              </Text>
            </LinearGradient>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Appointments;
