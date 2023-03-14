import { Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Svg from './Svg';

type ActivityIndicatorProps = {
  color?: string;
  size?: number;
};

const ActivityIndicator = (props: ActivityIndicatorProps) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, [rotateAnim]);
  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              rotate: rotateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}
    >
      <Svg.LoadingIndicatorSvg size={props.size} color={props.color} />
    </Animated.View>
  );
};

export default ActivityIndicator;
