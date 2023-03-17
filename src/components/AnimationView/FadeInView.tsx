import { Animated, Easing, Pressable, StyleSheet } from 'react-native';
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';

type Props = {
  backgroundColor?: string;
  onPress?: () => void;
};

interface FadeInView {
  close: () => Promise<void>;
}

const FadeInView = forwardRef<FadeInView, Props>((props, ref) => {
  const opacityAni = React.useRef(new Animated.Value(0)).current;

  // close with promise
  const close = () => {
    return new Promise<void>((resolve) => {
      Animated.timing(opacityAni, {
        toValue: 0,
        duration: 250,
        easing: Easing.ease,
        useNativeDriver: false, // <-- neccessary
      }).start(() => {
        resolve();
      });
    });
  };

  useImperativeHandle(ref, () => ({
    close,
  }));

  useEffect(() => {
    Animated.timing(opacityAni, {
      toValue: 1,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: false, // <-- neccessary
    }).start();
  }, [opacityAni]);

  return (
    <Animated.View
      style={{
        ...styles.backdrop,
        opacity: opacityAni,
        backgroundColor: props.backgroundColor || 'rgba(0,0,0,0.5)',
      }}
    >
      <Pressable style={styles.pressable} onPress={props.onPress} />
    </Animated.View>
  );
});

export default FadeInView;

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  pressable: {
    flex: 1,
  },
});
