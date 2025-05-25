import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import CardWrapper from '../common/CardWrapper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomButton from '../common/CustumButton';
import {colors} from '../constants/colors';
import {useCommonStyles} from '../common/CommonStyle';
import {Fonts} from '../assets/fonts/Customfont';
import LinearGradient from 'react-native-linear-gradient';
import {CustomImages} from '../assets/images';

const EngagingScreen: React.FC = ({navigation}) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputsRef = useRef([]);
  const {title} = useCommonStyles();

  const handleFocus = index => {};

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 6) {
      // Add your verification logic here
    } else {
      Alert.alert('Error', 'Please enter the full 6-digit OTP');
    }
  };

  const {top, bottom} = useSafeAreaInsets();

  console.log(bottom, 'bottom');

  return (
    <LinearGradient
      colors={['#d8e7fe', colors.white]}
      start={{x: 1, y: 1}} // Start at bottom-right
      end={{x: 0, y: 0}} // End at top-left
      style={styles.gradient}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView
          style={[styles.scrollView, {marginTop: top, paddingBottom: bottom}]}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator
          keyboardShouldPersistTaps="handled">
          <View style={[styles.innerContent, {paddingBottom: bottom}]}>
            <View style={styles.topPart}>
              <View style={styles.header}>
                <Text style={[title, styles.title]}>Lukiaa</Text>
              </View>
              <View style={[styles.otpcontent]}>
                <Text style={styles.subtitle}>Hey there, I'm Lukiaa</Text>
                <Text style={styles.subtitle}>
                  Your personal AI stylist - I'm here to help you look and feel
                  your best every day{' '}
                </Text>
                <Text style={styles.subtitle}>
                  To style you best, I just need a few quicks details about your
                  look and perfrences.
                </Text>
                <View style={styles.whiteBox}>
                  <Image source={CustomImages.flash} style={styles.icon} />
                  <Text style={styles.subtitle}>
                    To style you best, I just need a few quicks details about
                    your look and perfrences.
                  </Text>
                </View>
                <View style={styles.whiteBox}>
                  <Image source={CustomImages.flash} style={styles.icon} />
                  <Text style={styles.subtitle}>
                    To style you best, I just need a few quicks details about
                    your look and perfrences.
                  </Text>
                </View>

                <Text style={styles.subtitle}>It takes </Text>
              </View>
            </View>
            <CustomButton
              title="Submit"
              btnStyle={styles.button}
              onPress={handleSubmit}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  whiteBox: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 7,
    flexDirection: 'row',
  },
  gradient: {
    flex: 1,
  },
  topPart: {
    flex: 1,
  },
  subtitle: {
    fontFamily: Fonts.inter600,
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 16,
    marginTop: 20,
  },
  otpcontent: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 50,
    // backgroundColor: 'red',
  },
  header: {
    marginTop: 70,
  },
  button: {},
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  innerContent: {
    justifyContent: 'center',
    paddingHorizontal: 24,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: colors.gradientstartColor,
    fontSize: 30,
    lineHeight: 34,
    textAlign: 'left',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    height: 70,
  },
  inputBox: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.gradientstartColor,
    // marginHorizontal: 5,
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
  },
});

export default EngagingScreen;
