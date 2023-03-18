import { StyleSheet, View } from 'react-native';
import React, { useMemo } from 'react';
import ScrollPicker from './ScrollPicker';
import type { PickerItemValue, PickerItemData } from './PickerItemData';

type Props<T = PickerItemValue> = {
  columns: number;
  dataSource: PickerItemData<T>[][];
  selection?: PickerItemValue[];
  onValueChange?: (value: PickerItemData<T>[]) => void;
};

const ColumnPicker = (props: Props) => {
  const selection = useMemo(() => props.selection, [props.selection]);

  return (
    <View style={styles.container}>
      {Array(props.columns)
        .fill(0)
        .map((_, index) => {
          return (
            <View style={styles.pickerWrapper} key={index}>
              <ScrollPicker
                key={index}
                dataSource={props.dataSource[index]!}
                selection={selection?.[index]}
                onValueChange={(obj) => {
                  const newSelection = [...selection!];
                  newSelection[index] = obj.value;

                  // get selection data from dataSource
                  const newSelectionData = [] as PickerItemData[];
                  for (let i = 0; i < props.columns; i++) {
                    const children = props.dataSource[i]!;
                    const matchObj =
                      children.find((e) => e.value === newSelection[i]) ??
                      children[0];

                    newSelectionData.push(matchObj!);
                  }

                  props.onValueChange?.(newSelectionData);
                }}
              />
            </View>
          );
        })}
    </View>
  );
};

export default ColumnPicker;

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
