import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import HeaderNavigator from '../Components/Universal/HeaderNavigator';
import Icon from 'react-native-vector-icons/Feather';
import {SelectList} from 'react-native-dropdown-select-list';
import DatePicker from 'react-native-date-picker';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../Components/Universal/GradientButton';

const ReportScreen = () => {
  const [selected, setSelected] = React.useState('');

  const data = [
    {key: '1', value: 'Mobiles'},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers'},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <ScrollView style={{flex: 1}}>
      <HeaderNavigator title={'Reports'} />
      <View style={{paddingHorizontal: 20, paddingTop: 30}}>
        <SelectList
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          boxStyles={{
            borderColor: '#A8A8A8',
            borderRadius: 5,
            borderWidth: 2,
            backgroundColor: '#fff',
          }}
          dropdownTextStyles={{
            color: '#434343',
            fontSize: 18,
            fontFamily: 'Arial',
          }}
          dropdownStyles={{
            backgroundColor: '#fff',
          }}
          inputStyles={{
            fontSize: 19,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 20,
          gap: 15,
        }}>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <View
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            paddingVertical: 7,
            shadowColor: '#000',
            shadowOffset: {
              width: 1,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 4,
            backgroundColor: '#fff',
            borderRadius: 2,
          }}>
          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
            }}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              minWidth: '35%',
              justifyContent: 'space-between',
              borderBottomColor: '#797979',
              borderBottomWidth: 2,
              paddingBottom: 8,
            }}>
            <Text
              style={{
                color: '#797979',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 20,
              }}>
              Start Date
            </Text>
            <Icon name="calendar" color="red" size={20} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            paddingVertical: 7,
            shadowColor: '#000',
            shadowOffset: {
              width: 1,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 4,
            backgroundColor: '#fff',
            borderRadius: 2,
          }}>
          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
            }}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              minWidth: '35%',
              justifyContent: 'space-between',
              borderBottomColor: '#797979',
              borderBottomWidth: 2,
              paddingBottom: 8,
            }}>
            <Text
              style={{
                color: '#797979',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 20,
              }}>
              End Date
            </Text>
            <Icon name="calendar" color="red" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        <GradientButton text={"Submit"}/>
      </View>
    </ScrollView>
  );
};

export default ReportScreen;
