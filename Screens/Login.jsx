import React from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <LinearGradient
        colors={['#F93559', '#F57F64']}
        style={{
          height: '35%',
          width: '100%',
          borderBottomLeftRadius: 70,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            paddingHorizontal: 25,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              color: '#FDFDFD',
              fontSize: 25,
              fontWeight: '400',
              fontFamily: 'Arial Rounded MT Bold',
            }}>
            LOGIN
          </Text>
        </View>
      </LinearGradient>
      <TextInput
        style={{...styles.input, marginTop: 80}}
        placeholder="USERNAME"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="*******"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text
          style={{
            color: '#fff',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 3.9,
          }}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom:32
        }}>
        <Text
          style={{
            color: '#797979',
            fontSize: 15,
            fontWeight: 400,
          }}>
          Get help or support :
        </Text>
        <LinearTextGradient
          style={{fontWeight: 'bold', fontSize: 15}}
          locations={[0, 1]}
          colors={['#F93559', '#F57F64']}>
          <Text>CONTACT ADMIN</Text>
        </LinearTextGradient>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    height: 43,
    width: 300,
    margin: 12,
    padding: 10,
    color: '#313056',
    fontSize: 12,
    letterSpacing: 3.6,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginBottom: 34,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#29294F',
    padding: 10,
    borderRadius: 60,
    width: 180,
    height: 40,
    marginTop: 5,
  },
});

export default Login;
