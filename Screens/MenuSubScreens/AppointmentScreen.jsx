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
import Icon from 'react-native-vector-icons/Feather';

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

  const fetchCallDetails = async () => {
    // CallLogs.getAll(callLogs => {
    //   // Filter call logs for SIM 1 (assuming subscriptionId is 0 for SIM 1)
    //   const callLogsForSim1 = callLogs.filter(
    //     callLog => callLog.subscriptionId === '0',
    //   );
    //   // Process callLogsForSim1
    //   console.log(callLogsForSim1);
    // });
    // CallLogs.load(10) // Load the last 10 call logs (adjust as needed)
    //   .then(calls => {
    //     // console.log(calls);
    //     const specificNumber = '+919777891210'; // Replace with the number you want to filter
    //     const filteredCalls = calls.filter(call => call.subscriptionId === '1');
    //     setCallDetails(calls);
    //     console.log(filteredCalls);
    //   })
    //   .catch(error => console.error('Error loading call logs:', error));
    try {
      const callLog = await CallLogs.load(10,{
        limit: 10, // Specify the number of records you want to retrieve
        offset: 0, // Specify the offset (if you want to load more)
        sort: 'date', // Sort by date (you can change this)
        includeSim: 1, // 1 for SIM 1, 2 for SIM 2
      });
      console.log(callLog);
      setCallDetails(callLog)
    } catch (error) {
      console.log(error);
    }
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
              elevation: 5,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
            }}>
            <Icon
              color={
                call.type == 'OUTGOING'
                  ? 'grey'
                  : call.type == 'MISSED'
                  ? 'red'
                  : 'green'
              }
              name={
                call.type == 'OUTGOING'
                  ? 'phone-outgoing'
                  : call.type == 'MISSED'
                  ? 'phone-missed'
                  : 'phone-incoming'
              }
              size={30}
            />
            <View>
              <Text
                style={{
                  color: '#001a47',
                  fontSize: 14,
                  fontWeight: '700',
                  fontFamily: 'Arial',
                }}>
                Number: {call.phoneNumber}
              </Text>
              <Text
                style={{
                  color: '#001a47',
                  fontSize: 14,
                  fontWeight: '700',
                  fontFamily: 'Arial',
                }}>
                Type: {call.type}
              </Text>
              <Text
                style={{
                  color: '#001a47',
                  fontSize: 14,
                  fontWeight: '700',
                  fontFamily: 'Arial',
                }}>
                Date: {call.dateTime}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({});
