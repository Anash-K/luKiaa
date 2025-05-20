import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
      />
      <Button title="Sign Up" onPress={() => alert('Sign Up pressed')} />
      <View style={styles.loginContainer}>
        <Text>Already have an account? </Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
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
  loginContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
});

export default SignupScreen;