import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { Colors, ColumnPicker, PickerItemData } from 'lrn-app-components';

const UnrelatedColumnPickerScreen = () => {
  const data = [
    [
      // 1-12h
      { label: '1时', value: 1 },
      { label: '2时', value: 2 },
      { label: '3时', value: 3 },
      { label: '4时', value: 4 },
      { label: '5时', value: 5 },
      { label: '6时', value: 6 },
      { label: '7时', value: 7 },
      { label: '8时', value: 8 },
      { label: '9时', value: 9 },
      { label: '10时', value: 10 },
      { label: '11时', value: 11 },
      { label: '12时', value: 12 },
    ],
    [
      // 0-59m, step by 15min
      { label: '00分', value: 0 },
      { label: '15分', value: 15 },
      { label: '30分', value: 30 },
      { label: '45分', value: 45 },
    ],
    [
      // 0-59s, step by 30s
      { label: '00秒', value: 0 },
      { label: '30秒', value: 30 },
    ],
  ];

  const [selection, setSelection] = React.useState<PickerItemData[]>();

  const labelText = useMemo(() => {
    if (selection) {
      return selection.map((item) => item.label).join(' ');
    }
    return '';
  }, [selection]);

  const selectionValue = useMemo(() => {
    if (selection) {
      return selection.map((item) => item.value);
    }
    return [];
  }, [selection]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`已选择${labelText}`}</Text>
      <ColumnPicker
        dataSource={data}
        columns={3}
        selection={selectionValue}
        onValueChange={(value) => {
          setSelection(value);
        }}
      />
    </View>
  );
};

export default UnrelatedColumnPickerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 17,
    color: Colors.black5,
  },
});
