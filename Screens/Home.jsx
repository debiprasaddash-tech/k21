import * as React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../assets/Home/Person.svg';
import Logo1 from '../assets/Home/PersonWalk.svg';
import Appointments from '../Components/Home/Appointments';
import Calls from '../Components/Home/Calls';

function HomeScreen({navigation}) {
  return (
    <ScrollView>
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
            height: 170,
            width: '100%',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingTop: 12,
            }}>
            <Text
              style={{
                fontFamily: 'sans-serif-medium',
                color: '#fff',
                fontSize: 30,
                fontWeight: 500,
                letterSpacing: 1.8,
              }}>
              K<Text style={{fontSize: 26}}>21</Text>
            </Text>
            <LinearGradient
              colors={[
                'rgba(255, 255, 255, 0.70)',
                'rgba(255, 255, 255, 0.30)',
              ]}
              start={{x: 1.5, y: 0}}
              end={{x: 0, y: 0}}
              style={{
                height: 30,
                width: 70,
                borderRadius: 5,
                paddingLeft: 5,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  fontWeight: 400,
                  letterSpacing: 0.85,
                }}
                onPress={() => navigation.navigate('Login')}>
                Logout
              </Text>
            </LinearGradient>
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              flexDirection: 'column',
              alignItems: 'flex-start',
              paddingBottom: 45,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                fontWeight: 400,
                letterSpacing: 0.85,
              }}>
              Hello,
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 17,
                fontWeight: 400,
                letterSpacing: 0.85,
              }}>
              Kiara
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: 0.85,
              }}>
              Aqua Spa Pvt. Ltd.
            </Text>
          </View>
        </LinearGradient>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            gap: 25,
            marginTop: -30,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <View style={styles.box}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                gap: 40,
              }}>
              <Logo1 />
              <Text style={styles.textOne}>5</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: 10,
                paddingLeft: 10,
              }}>
              <Text style={styles.textTwo}>LMTD</Text>
              <Text style={styles.textTwo}>MTD</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingBottom: 10,
                // gap: 40,
              }}>
              <Text style={styles.textThree}>4</Text>
              <Text style={styles.textThree}>3</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                gap: 40,
              }}>
              <Logo />
              <Text style={styles.textOne}>5</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: 10,
                paddingLeft: 10,
              }}>
              <Text style={styles.textTwo}>LMTD</Text>
              <Text style={styles.textTwo}>MTD</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingBottom: 10,
                // gap: 40,
              }}>
              <Text style={styles.textThree}>4</Text>
              <Text style={styles.textThree}>3</Text>
            </View>
          </View>
        </View>
      </View>
      <Appointments />
      <Calls />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  box: {
    width: '46%',
    height: 120,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: '#fff',
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },

  textOne: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '400',
    color: '#000',
  },
  textTwo: {
    fontFamily: 'Roboto',
    fontSize: 7,
    fontWeight: '700',
    color: '#A8A8A8',
  },
  textThree: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '400',
    color: '#000',
  },
});
export default HomeScreen;
