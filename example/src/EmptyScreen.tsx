import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useToast } from 'react-native-toast-notifications';
import { Empty } from 'lrn-app-components';

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
  customIcon: {
    width: 88,
    height: 88,
    backgroundColor: 'red',
    borderRadius: 44,
  },
});
