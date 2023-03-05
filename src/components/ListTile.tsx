import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

type Props = {
  leading?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  trailing?: React.ReactNode;
  onPress?: () => void;
  hasBorder?: boolean;
  // idx?: number;
};

const ListTile = (props: Props) => {
  return (
    <TouchableOpacity
      // key={props.idx}
      onPress={props.onPress}
      style={[
        styles.container,
        props.hasBorder
          ? {
              borderBottomColor: 'lightgray',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }
          : undefined,
      ]}
      activeOpacity={0.92}
    >
      {props.leading}
      <View style={styles.content}>
        {props.title && <Text style={styles.title}>{props.title}</Text>}
        {props.subtitle && (
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        )}
      </View>
      {props.trailing}
    </TouchableOpacity>
  );
};

export default ListTile;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 44,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  leading: {
    marginRight: 8,
  },

  content: {
    flex: 1,
    marginHorizontal: 8,
  },

  title: {
    fontSize: 17,
    color: 'black',
  },

  subtitle: {
    fontSize: 14,
    color: 'black',
  },
});
