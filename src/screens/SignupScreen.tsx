import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustumButton';
import {Fonts} from '../assets/fonts/Customfont';
import CardWrapper from '../common/CardWrapper';
import {useCommonStyles} from '../common/CommonStyle';
import {colors} from '../constants/colors';
import {CustomImages} from '../assets/images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SignupScreen = ({navigation}) => {
  const [form, setForm] = useState({name: '', email: '', password: ''});
  const {title} = useCommonStyles();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isActiveInput, setIsActiveInput] = useState('');

  const handleChange = useCallback((field, value) => {
    setForm(prev => ({...prev, [field]: value}));
  }, []);

  const handleLogin = useCallback(() => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert('Please fill all fields');
      return;
    }

    console.log('Signup payload:', form);
    // Add API call here
  }, [form]);

  const {top, bottom} = useSafeAreaInsets();

  const handleFocus = useCallback((name = '') => {
    setIsActiveInput(name);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={[styles.scrollView, {marginTop: top, marginBottom: bottom}]}
          contentContainerStyle={[styles.contentStyle]}
          keyboardShouldPersistTaps="handled">
          <View style={styles.innerContent}>
            <View style={styles.header}>
              <Text style={title}>Registered In Lukiaa</Text>
              <View style={styles.logoBox}>
                <Image source={CustomImages.logo} style={styles.logo} />
              </View>
              <Text style={styles.subtitle}>AI Stylish</Text>
              <Text style={styles.subtext}>
                Fast forward fastion, powered by AI
              </Text>
            </View>
            <CardWrapper>
              <View style={[styles.container]}>
                <CustomInput
                  label="Full Name"
                  value={form.name}
                  onChange={val => handleChange('name', val)}
                  ref={nameRef}
                  showIcon
                  iconSource={CustomImages.contact}
                  iconStyle={{tintColor: colors.textSecondary}}
                  isFocus={isActiveInput === 'name'}
                  onFocusChange={() => handleFocus('name')}
                  onBlurChange={() => handleFocus()}
                  isValue={form.name.length > 0}
                />

                <CustomInput
                  label="Email/Phone"
                  value={form.email}
                  onChange={val => handleChange('email', val)}
                  ref={emailRef}
                  showIcon
                  iconSource={CustomImages.mail}
                  isFocus={isActiveInput === 'email'}
                  onFocusChange={() => handleFocus('email')}
                  onBlurChange={() => handleFocus()}
                  isValue={form.email.length > 0}
                />

                <CustomInput
                  label="Password"
                  value={form.password}
                  onChange={val => handleChange('password', val)}
                  isPassword
                  ref={passwordRef}
                  iconStyle={{width: 24, height: 24}}
                  isFocus={isActiveInput === 'password'}
                  onFocusChange={() => handleFocus('password')}
                  onBlurChange={() => handleFocus()}
                  isValue={form.password.length > 0}
                />

                <CustomButton
                  title="Sign Up"
                  btnStyle={styles.button}
                  onPress={handleLogin}
                />

                <View style={styles.signupContainer}>
                  <Text style={styles.note}>
                    Already have an account?{' '}
                    <Text
                      style={styles.textbtn}
                      onPress={() => navigation.navigate('Login')}>
                      Log In
                    </Text>
                  </Text>
                </View>
              </View>
            </CardWrapper>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  subtext: {
    fontFamily: Fonts.inter400,
    color: colors.textSecondary,
  },
  subtitle: {
    fontFamily: Fonts.poppins600,
    fontSize: 18,
    lineHeight: 20,
    color: colors.gradientstartColor,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
  },
  innerContent: {},
  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingTop: 10,
  },
  logo: {
    width: 70,
    height: 70,
  },
  contentStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    marginTop: 16,
  },
  textbtn: {
    fontFamily: Fonts.inter500,
    color: colors.gradientendColor,
  },
  note: {
    fontFamily: Fonts.inter400,
  },
  signupContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default SignupScreen;
