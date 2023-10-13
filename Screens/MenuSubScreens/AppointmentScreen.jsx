import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderNavigator from '../../Components/Universal/HeaderNavigator';
import CallLogs from 'react-native-call-log';

const AppointmentScreen = () => {
  const [callDetails, setCallDetails] = React.useState([]);

  React.useEffect(() => {
    // Request permission to access call logs
    async function requestCallLogPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
          {
            title: 'Call Log Permission',
            message:
              'This app needs access to your call logs to fetch call details.',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Permission granted, fetch call details
          fetchCallDetails();
        } else {
          console.log('Call log permission denied');
        }
      } catch (err) {
        console.error(err);
      }
    }

    requestCallLogPermission();
  }, []);

  const fetchCallDetails = () => {
    CallLogs.load(10) // Load the last 10 call logs (adjust as needed)
      .then(calls => {
        // console.log(calls);
        const specificNumber = '7894977757'; // Replace with the number you want to filter
        const filteredCalls = calls.filter(
          call => call.number === specificNumber,
        );
        setCallDetails(calls);
      })
      .catch(error => console.error('Error loading call logs:', error));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.15}}>
        <HeaderNavigator title={'Appointments'} />
      </View>

      <ScrollView style={{flex: 0.8}}>
        <Text style={{marginHorizontal: 20}}>
          Call Details for Specific Number
        </Text>
        {callDetails.map((call, index) => (
          <View
            key={index}
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              marginHorizontal: 20,
              marginVertical: 10,
              paddingHorizontal: 20,
              paddingVertical: 15,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              elevation:5
            }}>
            <Text
              style={{
                color: '#F93559',
                fontSize: 14,
                fontWeight: '700',
                fontFamily: 'Arial',
              }}>
              Number: {call.phoneNumber}
            </Text>
            <Text
              style={{
                color: '#F93559',
                fontSize: 14,
                fontWeight: '700',
                fontFamily: 'Arial',
              }}>
              Type: {call.type}
            </Text>
            <Text
              style={{
                color: '#F93559',
                fontSize: 14,
                fontWeight: '700',
                fontFamily: 'Arial',
              }}>
              Date: {call.dateTime}
            </Text>
            {/* Add more call details as needed */}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({});
