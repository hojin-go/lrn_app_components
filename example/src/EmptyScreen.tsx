import { StyleSheet, View } from 'react-native';
import React from 'react';
import Empty from '../../src/components/Empty';
import { useToast } from 'react-native-toast-notifications';

const EmptyScreen = () => {
  const toast = useToast();
  return (
    <Empty
      onTap={() => {
        console.log('onTap');
        toast.show('已点击');
      }}
      icon={<View style={styles.customIcon} />}
      text="点击刷新"
      asScreen={true}
    />
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: '60%',
  },
  customIcon: {
    width: 88,
    height: 88,
    backgroundColor: 'red',
    borderRadius: 44,
  },
});
