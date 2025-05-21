import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface CardWrappertype {
  children: React.ReactNode;
}
const CardWrapper: React.FC<CardWrappertype> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default CardWrapper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,

    // iOS Shadow (visible on all sides)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    // Android Shadow
    elevation: 6,
  },
});

