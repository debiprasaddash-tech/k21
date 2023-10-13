import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const HeaderNavigator = props => {
  const navigate = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: '#EB2E44',
          height: 24,
          width: '100%',
        }}></View>
      <LinearGradient
        colors={['#F93559', '#F57F64']}
        start={{x: 1.5, y: 0}}
        end={{x: 0, y: 0}}
        style={{
          height: 58,
          width: '100%',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            paddingLeft: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigate.goBack();
            }}>
            <Icon name="chevron-left" size={24} color={'#fff'} />
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: '400',
              fontFamily: 'Arial',
            }}>
            {props.title ?? 'Reports'}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default HeaderNavigator;
