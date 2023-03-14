import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ActivityIndicator, Colors } from '@lrn/lrn-app-components';

const IndicatorScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={32} color={Colors.blue} />
    </View>
  );
};

export default IndicatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
