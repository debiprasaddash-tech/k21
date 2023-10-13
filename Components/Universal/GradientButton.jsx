import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const GradientButton = ({text, paddingInline, screenToMove}) => {
  const navigation = useNavigation();
  return (
    <View>
      <LinearGradient
        colors={['#F93559', '#F57F64']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        style={{
          height: 45,
          width: '100%',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
          borderRadius: 40,
          paddingHorizontal: paddingInline,
        }}>
        {/* style={{}}> */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(screenToMove);
          }}>
          <Text
            style={{
              fontFamily: 'Arial',
              color: '#fff',
              fontSize: 18,
              fontWeight: '400',
              lineHeight: 20,
            }}>
            {text}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default GradientButton;
