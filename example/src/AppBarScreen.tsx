import { StyleSheet, View } from 'react-native';
import React from 'react';
import { AppBar } from 'lrn-app-components';

const AppBarScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar />
    </View>
  );
};

export default AppBarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
