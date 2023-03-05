import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import LhLogoGrey from './Svg/LhLogoGrey';

type Props = {
  icon?: JSX.Element;
  text?: string;
  onTap?: () => void;
  asScreen?: boolean;
};

const Empty = (props: Props) => {
  let view = (
    <View style={styles.container}>
      {props.icon ?? <LhLogoGrey />}
      <Text style={styles.text}>{props.text ?? '暂无内容'}</Text>
    </View>
  );

  if (props.onTap) {
    view = <Pressable onPress={props.onTap}>{view}</Pressable>;
  }

  if (props.asScreen) {
    view = <View style={styles.screen}>{view}</View>;
  }

  return view;
};

export default Empty;

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    alignItems: 'center',
    paddingTop: '60%',
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 10,
    textAlign: 'center',
  },
});
