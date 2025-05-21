import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustumButton';

const LoginScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        {/* <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      /> */}
        <CustomInput
          label="Full Name"
          value={name}
          onChange={val => setName(val)}
        />
        <CustomInput
          label="Password"
          value={password}
          onChange={val => setPassword(val)}
        />
        {/* <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
      /> */}
        <Button title="Login" onPress={() => alert('Login pressed')} />
        <View style={styles.signupContainer}>
          <Text>Don't have an account? </Text>
           <CustomButton title={"Login"} onPress={() => {}} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 5,
  },
  signupContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
});

export default LoginScreen;
