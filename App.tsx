import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from './src/constants/colors';
export type StackParams = {
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={() => ({
          contentStyle: styles.commonContentStyle,
        })}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{title: 'Signup'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  commonContentStyle: {
    backgroundColor: colors.background,
  },
});

export default App;
