import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import GradientButton from '../Universal/GradientButton';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = () => {
    // Handle Registerform submission here, e.g., send the data to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address);
    console.log('City:', city);
    console.log('State:', state);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Phone:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={text => setPhone(text)}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={text => setAddress(text)}
      />

      <Text style={styles.label}>City:</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={text => setCity(text)}
      />

      <Text style={styles.label}>State:</Text>
      <TextInput
        style={styles.input}
        value={state}
        onChangeText={text => setState(text)}
      />
      <View
          style={{
            alignItems: 'center',
            marginVertical: 100,
            height: 50,
          }}>
          <GradientButton
            text={'+ Add Branches'}
            paddingInline={45}
            screenToMove={'Add-Branches'}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 12,
    color: '#000',
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom: 12,
    paddingLeft: 8,
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

export default RegisterForm;
