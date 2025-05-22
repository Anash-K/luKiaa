import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustumButton';
import {Fonts} from '../assets/fonts/Customfont';
import CardWrapper from '../common/CardWrapper';
import { useCommonStyles } from '../common/CommonStyle';

const LoginScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {title} = useCommonStyles();
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  console.log('test');

  const handleLogin = useCallback(() => {
    console.log('login');
  }, [name, password]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <CardWrapper>
        <View style={styles.container}>
          <Text style={title}>Registered In Lukiaa</Text>

          <CustomInput
            label="Full Name"
            value={name}
            onChange={val => setName(val)}
          />

          <CustomInput
            label="Password"
            value={password}
            onChange={val => setPassword(val)}
            isPassword={true}
          />

          <View style={styles.signupContainer}>
            <Text style={styles.note}>
              Don’t have an account?{' '}
              <Text
                style={styles.textbtn}
                onPress={() => navigation.navigate('Signup')}>
                Sign Up
              </Text>
            </Text>
            <CustomButton title="Login" onPress={handleLogin} />
          </View>
        </View>
      </CardWrapper>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  textbtn: {
    fontFamily: Fonts.inter400,
  },
  note: {
    fontFamily: Fonts.inter400,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
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
