import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../constants/colors';

interface CustomButtonType{
  title: string;
  onPress: () => void;
}

const CustomButton:React.FC<CustomButtonType> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <LinearGradient
        colors={[colors.gradientstartColor,colors.gradientendColor ]} // Gradient from purple to pink
        start={{x: 0, y: 0}} // Gradient starts from the left
        end={{x: 1, y: 0}} // Gradient ends on the right
        style={styles.gradient}>
        <Text style={styles.buttonText}>{title} →</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 15, // Rounded corners
    overflow: 'hidden', // Ensure the gradient respects the rounded corners
    width: '100%',
  },
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // White text
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CustomButton;
