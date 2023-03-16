import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import ScrollPickerPure from './ScrollPickerPure';
import type ScrollPickerItemData from './ScrollPickerItemData';

type ScrollPickerAndroidProps = {
  selection?: ScrollPickerItemData;
  dataSource: Array<ScrollPickerItemData>;
  onValueChange?: (value: ScrollPickerItemData) => void;
};

const ScrollPickerAndroid = (props: ScrollPickerAndroidProps) => {
  const [selectionIndex, setSelectionIndex] = React.useState(0);

  useEffect(() => {
    const selection = props.selection ?? props.dataSource[0];
    // find index of selection
    const idx = props.dataSource.findIndex(
      (obj) => obj.value === selection?.value
    );

    setSelectionIndex(idx);
  }, [props.selection, props.dataSource]);

  return (
    <View style={styles.container}>
      <ScrollPickerPure
        dataSource={props.dataSource.map((item) => item.label)}
        selectedIndex={selectionIndex}
        renderItem={(data, _index, _isSelected) => {
          return (
            <Text
              style={
                _isSelected
                  ? styles.itemStyleSelected
                  : styles.itemStyleUnselected
              }
            >
              {data}
            </Text>
          );
        }}
        onValueChange={(value) => {
          const item = props.dataSource.find((obj) => obj.label === value);
          props.onValueChange?.(item!);
        }}
        wrapperHeight={200}
        // wrapperWidth={150}
        wrapperColor="#FFFFFF"
        itemHeight={44}
        highlightColor="#f4f4f4"
        highlightBorderWidth={0.5}
      />
    </View>
  );
};

export default ScrollPickerAndroid;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    backgroundColor: 'white',
  },
  itemStyleSelected: {
    fontSize: 17,
    color: 'black',
  },
  itemStyleUnselected: {
    fontSize: 16,
    color: 'grey',
  },
});
