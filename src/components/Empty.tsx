import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import LhLogoGrey from './Svg/LhLogoGrey';

type Props = {
  icon?: JSX.Element;
  text?: string;
  onTap?: () => void;
};

const Empty = (props: Props) => {
  const view = (
    <View style={styles.container}>
      {props.icon ?? <LhLogoGrey />}
      <Text>{props.text ?? '暂无内容'}</Text>
    </View>
  );

  if (props.onTap === undefined) {
    return view;
  }

  return <TouchableHighlight onPress={props.onTap}>{view}</TouchableHighlight>;
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});
