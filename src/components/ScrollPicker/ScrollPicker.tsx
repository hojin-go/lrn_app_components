import { View, Platform } from 'react-native';
import React, { useEffect } from 'react';
import ScrollPickerAndroid from './ScrollPickerAndroid';
import type ScrollPickerItemData from './ScrollPickerItemData';
import ScrollPickerIOS from './ScrollPickerIOS';

type ScrollPickerProps = {
  selection?: ScrollPickerItemData;
  dataSource: Array<ScrollPickerItemData>;
  onValueChange?: (value: ScrollPickerItemData) => void;
};

const ScrollPicker = (props: ScrollPickerProps) => {
  useEffect(() => {
    console.log(
      'selection changed in pickerWrapper: ' + props.selection?.label
    );
  }, [props.selection]);

  return (
    <View style={{ height: 200, width: '100%' }}>
      {Platform.select({
        ios: (
          <ScrollPickerIOS
            dataSource={props.dataSource}
            selection={props.selection}
            onValueChange={props.onValueChange}
          />
        ),
        android: (
          <ScrollPickerAndroid
            dataSource={props.dataSource}
            selection={props.selection}
            onValueChange={props.onValueChange}
          />
        ),
      })}
    </View>
  );
};

export default ScrollPicker;
