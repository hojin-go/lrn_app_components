import { StyleSheet, View } from 'react-native';
import React from 'react';
import Empty from '../../src/components/Empty';

const EmptyScreen = () => {
  return (
    <View style={styles.container}>
      <Empty />
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
