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
import { Fonts } from '../assets/fonts/Customfont';
import CardWrapper from '../common/CardWrapper';

const LoginScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <TouchableWithoutFeedback>
      <CardWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        
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

        <View style={styles.signupContainer}>
          <Text style={styles.note}>Already have an account? <Text style={styles.textbtn}>Log In</Text></Text>
           <CustomButton title={"Login"} onPress={() => {}} />
        </View>
      </View>
      </CardWrapper>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  textbtn:{
    fontFamily:Fonts.
  },
  note:{
    fontFamily:Fonts.inter400
  },
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
