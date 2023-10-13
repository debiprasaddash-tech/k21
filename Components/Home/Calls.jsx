import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';

const Calls = () => {
  const callDetails = [
    {
      icon: <Icon name="calendar" size={20} color={'#847979'} />,
      name: 'Appointments',
      value: 2,
    },
    {
      icon: <Icon1 name="question" size={20} color={'#847979'} />,
      name: 'Enquiries',
      value: 2,
    },
    {
      icon: <Icon name="phone-missed" size={20} color={'#847979'} />,
      name: 'Unattended',
      value: 2,
    },
    {
      icon: <Icon name="user-check" size={20} color={'#847979'} />,
      name: 'Personal',
      value: 2,
    },
    {
      icon: <Icon1 name="reply" size={20} color={'#847979'} />,
      name: 'Unreported',
      value: 2,
    },
  ];
  return (
    <View style={{paddingHorizontal: 20, paddingTop: 25}}>
      <Text style={{color: '#000', fontSize: 18, fontFamily: 'Roboto'}}>
        Calls
      </Text>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 5,
        }}>
        {callDetails.map((val, i) => (
          <View
            key={i}
            style={{
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 8,
              backgroundColor: '#fff',
              borderTopLeftRadius: i == 0 ? 5 : 0,
              borderTopRightRadius: i == 0 ? 5 : 0,
              paddingVertical: 15,
              paddingHorizontal: 20,
              marginVertical: 0.7,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
              }}>
              {val.icon}
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  fontWeight: '500',
                  fontFamily: 'Roboto',
                }}>
                {val.name}
              </Text>
            </View>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                fontWeight: '500',
                fontFamily: 'Roboto',
              }}>
              {val.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Calls;
