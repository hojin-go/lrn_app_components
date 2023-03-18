import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollPicker, PickerItemData } from 'lrn-app-components';

const ScrollPickerScreen = () => {
  const [selection, setSelection] = React.useState<PickerItemData>();
  const dataSource = [
    { label: '上海', value: 'shanghai' },
    { label: '北京', value: 'beijing' },
    { label: '广州', value: 'guangzhou' },
    { label: '深圳', value: 'shenzhen' },
    { label: '杭州', value: 'hangzhou' },
    { label: '南京', value: 'nanjing' },
    { label: '成都', value: 'chengdu' },
    { label: '武汉', value: 'wuhan' },
    { label: '西安', value: 'xian' },
    { label: '苏州', value: 'suzhou' },
    { label: '天津', value: 'tianjin' },
    { label: '重庆', value: 'chongqing' },
    { label: '长沙', value: 'changsha' },
  ];
  return (
    <View style={styles.container}>
      <Text>{selection ? JSON.stringify(selection) : '未选择'}</Text>
      <ScrollPicker
        dataSource={dataSource}
        selection={selection?.value}
        onValueChange={(value) => {
          setSelection(value);
        }}
      />
      {/* <Text>iOS 👇🏻</Text>
      <ScrollPickerIOS
        dataSource={dataSource}
        selection={selection}
        onValueChange={(value) => {
          setSelection(value);
        }}
      />
      <Text>Android 👇🏻</Text>
      <ScrollPickerAndroid
        dataSource={dataSource}
        selection={selection}
        onValueChange={(value) => {
          setSelection(value);
        }}
      /> */}
    </View>
  );
};

export default ScrollPickerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
