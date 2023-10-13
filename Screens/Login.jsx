import React from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/login/Logo.svg';

const Login = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center'}}>
        <LinearGradient
          colors={['#F93559', '#F57F64']}
          start={{x: 1.5, y: 0}}
          end={{x: 0, y: 0}}
          style={{
            height: '45%',
            width: '100%',
            borderBottomLeftRadius: 70,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 70,
            }}>
            <Logo />
          </View>
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
        <View style={{flex: 1, gap: 25, alignItems: 'center'}}>
          <View style={{...styles.inputBox, marginTop: 80}}>
            <Image
              source={require('../assets/login/user.png')}
              height={35}
              width={35}
            />
            <TextInput
              placeholder="USERNAME"
              keyboardType="name-phone-pad"
              style={styles.input}
            />
          </View>

          <View style={{...styles.inputBox}}>
            <Image
              source={require('../assets/login/password.png')}
              height={35}
              width={35}
            />
            <TextInput
              placeholder="*******"
              // keyboardType="visible-password"
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Tab')}>
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
              flexDirection: 'column',
              justifyContent: 'flex-end',
              paddingBottom: 32,
              paddingTop: 35,
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
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    // gap: 20,
    alignItems: 'center',
    paddingLeft: 30,
    minHeight: 45,
    maxHeight: 45,
    height: 45,
    width: 300,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    // marginBottom: 34,
  },
  input: {
    color: '#313056',
    fontSize: 12,
    letterSpacing: 3.6,
    flex: 1,
    paddingLeft: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#29294F',
    padding: 10,
    borderRadius: 60,
    width: 180,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 20,
  },
});

export default Login;
