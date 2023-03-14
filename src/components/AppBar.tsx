/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AppBar = () => {
  const [rightWidth, setRightWidth] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={{ width: rightWidth, backgroundColor: 'red', height: 44 }} />
      <View style={styles.titleView}>
        <Text style={styles.title} numberOfLines={1}>
          我是标题封疆大吏开锁了房价多少离开家
        </Text>
      </View>
      <View>
        <Text
          numberOfLines={1}
          onLayout={(p0) => {
            console.log('p0', JSON.stringify(p0.nativeEvent.layout, null, 2));
            setRightWidth(p0.nativeEvent.layout.width);
          }}
        >
          房东结fdjslkfjds
        </Text>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  leading: {
    height: 44,
  },
  titleView: {
    flex: 1,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    textOverflow: 'ellipsis',
  },
  trailing: {
    height: 44,
  },
});
