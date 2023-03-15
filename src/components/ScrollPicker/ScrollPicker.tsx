import { View, Text, Platform } from 'react-native';
import React from 'react';
import ScrollPickerPure from './ScrollPickerPure';

type ScrollPickerProps = {
  selectedIndex?: number;
  dataSource: Array<string | number>;
  onValueChange?: (value: string | number, index: number) => void;
};

const ScrollPicker = (props: ScrollPickerProps) => {
  return (
    <View style={{ height: 200, width: '100%' }}>
      {Platform.select({
        ios: (
          <ScrollPickerPure
            dataSource={props.dataSource}
            selectedIndex={props.selectedIndex ?? 0}
            renderItem={(data, _index, _isSelected) => {
              return (
                <Text
                  style={{
                    color: _isSelected ? 'black' : 'grey',
                    fontSize: 17,
                  }}
                >
                  {data}
                </Text>
              );
            }}
            onValueChange={props.onValueChange}
            wrapperHeight={200}
            // wrapperWidth={150}
            wrapperColor="#FFFFFF"
            itemHeight={44}
            highlightColor="#d8d8d8"
            highlightBorderWidth={0.5}
          />
        ),
        android: (
          <ScrollPickerPure
            dataSource={props.dataSource}
            selectedIndex={props.selectedIndex ?? 0}
            renderItem={(data, _index, _isSelected) => {
              return (
                <Text
                  style={{
                    color: _isSelected ? 'black' : 'grey',
                    fontSize: 17,
                  }}
                >
                  {data}
                </Text>
              );
            }}
            onValueChange={props.onValueChange}
            wrapperHeight={200}
            // wrapperWidth={150}
            wrapperColor="#FFFFFF"
            itemHeight={44}
            highlightColor="#d8d8d8"
            highlightBorderWidth={0.5}
          />
        ),
      })}
    </View>
  );
};

export default ScrollPicker;
