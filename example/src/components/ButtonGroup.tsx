import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';

type Props = {
  children: Array<JSX.Element>;
  styles?: ViewStyle;
};

const ButtonGroup = (props: Props) => {
  return (
    <View style={[styles.container, props.styles]}>
      {
        // join children with space
        React.Children.map(props.children, (child, index) => {
          return (
            <>
              {child}
              {index !== props.children.length - 1 && (
                <View style={{ height: 10, width: 10 }} />
              )}
            </>
          );
        })
      }
    </View>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  container: {
    // wrap children
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
