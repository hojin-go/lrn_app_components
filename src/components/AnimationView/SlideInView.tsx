import { Animated, Dimensions, Easing, View } from 'react-native';
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';

type Props = {
  direction?: 'down';
  children: React.ReactNode;
};

interface SlideInView {
  close: () => Promise<void>;
}

const SlideInView = forwardRef<SlideInView, Props>((props, ref) => {
  const translateYAni = React.useRef(new Animated.Value(0)).current;

  const [bodyHeight, setBodyHeight] = React.useState(0);

  // close with promise
  const close = () => {
    return new Promise<void>((resolve) => {
      Animated.timing(translateYAni, {
        toValue: 0,
        duration: 250,
        easing: Easing.linear,
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
    Animated.timing(translateYAni, {
      toValue: 1,
      duration: 250,
      easing: Easing.linear,
      useNativeDriver: false, // <-- neccessary
    }).start();
  }, [translateYAni]);

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateY: translateYAni.interpolate({
              inputRange: [0, 1],
              outputRange: [
                Dimensions.get('window').height,
                Dimensions.get('window').height - bodyHeight,
              ],
            }),
          },
        ],
      }}
    >
      <View
        onLayout={(p0) => {
          setBodyHeight(p0.nativeEvent.layout.height);
        }}
      >
        {props.children}
      </View>
    </Animated.View>
  );
});

export default SlideInView;
