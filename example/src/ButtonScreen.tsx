import { StyleSheet, View } from 'react-native';
import React from 'react';
import Button from '../../src/components/Button';

const ButtonScreen = () => {
  return (
    <View style={styles.container}>
      <Button type="alert">警告</Button>
      <View style={styles.space} />
      <Button type="ghost">Ghost Button</Button>
      <View style={styles.space} />
      <Button>默认样式</Button>
    </View>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    height: 10,
  },
});
