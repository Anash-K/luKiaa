import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustumButton';
import {Fonts} from '../assets/fonts/Customfont';
import CardWrapper from '../common/CardWrapper';
import {useCommonStyles} from '../common/CommonStyle';

const LoginScreen = ({navigation}) => {
  const [form, setForm] = useState({name: '', email: '', password: ''});
  const {title} = useCommonStyles();
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const handleChange = useCallback((field, value) => {
    setForm(prev => ({...prev, [field]: value}));
  }, []);

  const handleLogin = useCallback(() => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert('Please fill all fields');
      return;
    }

    // Proceed with login logic
    console.log('Login payload:', form);
  }, [form]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <CardWrapper>
        <View style={styles.container}>
          <Text style={title}>Registered In Lukiaa</Text>

          <CustomInput
            label="Full Name"
            value={form.name}
            onChange={val => handleChange('name', val)}
            ref={nameRef}
          />

          <CustomInput
            label="Email/Phone"
            value={form.email}
            onChange={val => handleChange('email', val)}
            ref={emailRef}
          />

          <CustomInput
            label="Password"
            value={form.password}
            onChange={val => handleChange('password', val)}
            isPassword
            ref={passwordRef}
          />

          <CustomButton
            title="Sign Up"
            btnStyle={styles.button}
            onPress={handleLogin}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.note}>
              Don’t have an account?{' '}
              <Text
                style={styles.textbtn}
                onPress={() => navigation.navigate('Signup')}>
                Log In
              </Text>
            </Text>
          </View>
        </View>
      </CardWrapper>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
  },
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
