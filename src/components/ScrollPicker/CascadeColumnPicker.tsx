import { StyleSheet, View } from 'react-native';
import React from 'react';

import ScrollPicker from './ScrollPicker';
import type { PickerItemData, PickerItemValue } from './PickerItemData';

type Props<T = PickerItemValue> = {
  columns: number;
  dataSource: PickerItemData<T>[];
  selection?: PickerItemValue[];
  onValueChange?: (value: PickerItemData<T>[]) => void;
};

// 级联选择器
const CascadeColumnPicker = (props: Props) => {
  const getDataForColumn = (column: number) => {
    let data = props.dataSource;
    for (let i = 0; i < column; i++) {
      const selectionValue = props.selection?.[i] ?? data[0]?.value;
      const item = data.find((e) => e.value === selectionValue);
      data = item?.children ?? [];
    }
    return data;
  };

  const getSelectionValueForColumn = (column: number) => {
    return props.selection?.[column] ?? getDataForColumn(column)[0]?.value;
  };

  return (
    <View style={styles.container}>
      {Array(props.columns)
        .fill(0)
        .map((_, index) => {
          return (
            <View style={styles.pickerWrapper} key={index}>
              <ScrollPicker
                key={index}
                dataSource={getDataForColumn(index)}
                selection={getSelectionValueForColumn(index)}
                onValueChange={(obj) => {
                  const newSelection = [...(props.selection ?? [])];
                  newSelection[index] = obj.value;

                  const selectionData = [] as PickerItemData[];
                  let children = props.dataSource;
                  for (let i = 0; i < props.columns; i++) {
                    const matchObj =
                      children.find((e) => e.value === newSelection[i]) ??
                      children[0];

                    children = matchObj?.children ?? [];
                    selectionData.push(matchObj!);
                  }

                  props.onValueChange?.(selectionData);
                }}
              />
            </View>
          );
        })}
    </View>
  );
};

export default CascadeColumnPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    width: '100%',
  },
  pickerWrapper: {
    flex: 1,
  },
});
