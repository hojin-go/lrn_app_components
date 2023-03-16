import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Picker } from '@react-native-picker/picker';
import type ScrollPickerItemData from './ScrollPickerItemData';

type ScrollPickerIOSProps = {
  selection?: ScrollPickerItemData;
  dataSource: Array<ScrollPickerItemData>;
  onValueChange?: (value: ScrollPickerItemData) => void;
};

const ScrollPickerIOS = (props: ScrollPickerIOSProps) => {
  const selection = props.selection ?? props.dataSource[0];
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selection?.value}
        itemStyle={styles.itemStyle}
        onValueChange={(value) => {
          const item = props.dataSource.find((obj) => obj.value === value);
          props.onValueChange?.(item!);
        }}
      >
        {props.dataSource.map((item, _index) => {
          return (
            <Picker.Item
              label={item.label}
              value={item.value}
              key={'ios_picker_' + item.value}
            />
          );
        })}
      </Picker>
    </View>
  );
};

export default ScrollPickerIOS;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 200,
    width: '100%',
  },
  itemStyle: {
    fontSize: 17,
  },
});
