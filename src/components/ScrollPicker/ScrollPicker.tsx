import { View, Platform } from 'react-native';
import React from 'react';
import ScrollPickerAndroid from './ScrollPickerAndroid';
import type { PickerItemData } from './PickerItemData';
import ScrollPickerIOS from './ScrollPickerIOS';

type ScrollPickerProps<T extends string | number> = {
  selection?: T;
  dataSource: Array<PickerItemData<T>>;
  onValueChange?: (value: PickerItemData<T>) => void;
};

const ScrollPicker = <T extends string | number>(
  props: ScrollPickerProps<T>
) => {
  return (
    <View style={{ height: 200, width: '100%' }}>
      {Platform.select({
        ios: (
          <ScrollPickerIOS
            dataSource={props.dataSource}
            selection={props.selection ?? props.dataSource?.[0]?.value}
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
