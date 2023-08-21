import React from 'react';
import {Button, Text, View} from 'react-native';
import Login from './Screens/Login';

const App = (): JSX.Element => {
  return (
    <View>
      <Text>App</Text>
      <Button title="login" />
      <Login />
    </View>
  );
};

export default App;
