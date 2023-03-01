import { StyleSheet, View } from 'react-native';
import React from 'react';
import RatingBar from '../../src/components/RatingBar';

const RatingBarScreen = () => {
  return (
    <View style={styles.container}>
      <RatingBar rating={3.5} />
    </View>
  );
};

export default RatingBarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
