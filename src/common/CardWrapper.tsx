import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';


interface CardWrappertype {
  children: React.ReactNode;
}

const CardWrapper: React.FC<CardWrappertype> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContent}>
        {/* Header for the secure message */}
        {children}
      </View>
    </View>
  );
};

export default CardWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Light grey background to match the image
    padding: 16,
  },
  innerContent: {
    backgroundColor: '#fff',
    borderRadius: 16, // Slightly larger radius to match the image
    padding: 24, // Increased padding for a more spacious look
    width: '90%', // Responsive width
    maxWidth: 400, // Max width to prevent it from being too wide on larger screens

    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,

    // Android Shadow
    elevation: 8,
    borderWidth:1,
    borderColor:colors.trustBase
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16, // Space between header and content
  },
  icon: {
    marginRight: 8, // Space between icon and text
  },
  headerText: {
    fontSize: 14,
    color: '#00C853', // Green color to match the image
    fontWeight: '500',
  },
});