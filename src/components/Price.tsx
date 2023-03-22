import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import React, { useMemo } from 'react';
import Colors from './Colors';

// see: https://github.com/moment/luxon/issues/51#issuecomment-886053624
import 'intl';
import 'intl/locale-data/jsonp/en';

type Props = {
  size: 'small' | 'medium' | 'large' | 'xlarge';
  color?: string;
  symbol?: string;
  value: number | string;
  unit?: string;
};

const Price = (props: Props) => {
  const symbolStyle = (): StyleProp<TextStyle> => {
    switch (props.size) {
      case 'small':
        return { fontSize: 12, lineHeight: Platform.OS === 'ios' ? 16 : 20 };
      case 'medium':
        return { fontSize: 14, lineHeight: Platform.OS === 'ios' ? 20 : 24 };
      case 'large':
        return { fontSize: 16, lineHeight: Platform.OS === 'ios' ? 25 : 28 };
      case 'xlarge':
        return { fontSize: 20, lineHeight: Platform.OS === 'ios' ? 31 : 34 };
    }
  };
  const valueStyle = (): StyleProp<TextStyle> => {
    switch (props.size) {
      case 'small':
        return { fontSize: 18, lineHeight: 21 };
      case 'medium':
        return { fontSize: 22, lineHeight: 25 };
      case 'large':
        return { fontSize: 28, lineHeight: 32 };
      case 'xlarge':
        return { fontSize: 36, lineHeight: 40 };
    }
  };

  const decimalStyle = (): StyleProp<TextStyle> => {
    switch (props.size) {
      case 'small':
        return { fontSize: 14 };
      case 'medium':
        return { fontSize: 16 };
      case 'large':
        return { fontSize: 18 };
      case 'xlarge':
        return { fontSize: 20 };
    }
  };

  const unitStyle = (): StyleProp<TextStyle> => {
    switch (props.size) {
      case 'small':
        return { fontSize: 11, lineHeight: Platform.OS === 'ios' ? 18 : 20 };
      case 'medium':
        return { fontSize: 11, lineHeight: Platform.OS === 'ios' ? 20 : 22 };
      case 'large':
        return { fontSize: 12, lineHeight: Platform.OS === 'ios' ? 24 : 25 };
      case 'xlarge':
        return { fontSize: 12, lineHeight: Platform.OS === 'ios' ? 28 : 30 };
    }
  };

  const fontFamily = 'DIN Alternate';
  // const bold = '700';

  const value = useMemo(() => {
    let num = 0;
    // is props.value is string or number
    if (typeof props.value === 'number') {
      num = props.value;
    } else {
      num = Number(props.value);
    }
    const stringFormatted = new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 2,
      useGrouping: false,
    }).format(num);
    // splite the value string by '.', get int value and decimal value
    const valueArray = stringFormatted.split('.');
    // get the int value, parse as number
    const intValue = valueArray[0] ?? '0';
    // get the decimal value
    const decimalValue = valueArray[1] ?? null;

    return [intValue, decimalValue];
  }, [props.value]);

  return (
    <View style={styles.container}>
      {props.symbol && (
        <Text
          style={[
            symbolStyle(),
            {
              // fontWeight: bold,
              color: props.color ?? Colors.amount,
              fontFamily: fontFamily,
            },
          ]}
        >
          {props.symbol}
        </Text>
      )}
      <Text
        style={[
          valueStyle(),
          {
            // fontWeight: bold,
            color: props.color ?? Colors.amount,
            fontFamily: fontFamily,
          },
        ]}
      >
        {value[0]}
        {value[1] && <Text style={decimalStyle()}>.{value[1]}</Text>}
      </Text>
      <Text>
        {props.unit && (
          <Text style={[unitStyle(), { color: props.color ?? Colors.amount }]}>
            {props.unit}
          </Text>
        )}
      </Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
