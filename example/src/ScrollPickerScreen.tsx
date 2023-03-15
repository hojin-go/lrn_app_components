import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ScrollPicker } from 'lrn-app-components';

const ScrollPickerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: 200, width: '100%' }}>
        <ScrollPicker
          dataSource={[
            '上海',
            '北京',
            '广州',
            '深圳',
            '杭州',
            '南京',
            '成都',
            '武汉',
            '西安',
            '长沙',
            '苏州',
            '天津',
          ]}
          selectedIndex={4}
          onValueChange={(_data, _selectedIndex) => {
            console.log('>>', _data, _selectedIndex);
          }}
          // wrapperHeight={200}
          // // wrapperWidth={150}
          // wrapperColor="#FFFFFF"
          // itemHeight={44}
          // highlightColor="#d8d8d8"
          // highlightBorderWidth={0.5}
        />
      </View>
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
