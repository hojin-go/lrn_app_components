/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg from './Svg';

type Props = {
  rating: number;
};

const RatingBar = ({ rating }: Props) => {
  const total = 5;

  const ratingWidth = (itemSize + itemMargin) * rating;

  return (
    <View style={styles.ratingBar}>
      <View style={styles.background}>
        {Array.from({ length: total }, (_, i) => i + 1).map((idx) => (
          <View style={styles.ratingBarItem} key={idx}>
            <Svg.SmallStarHollow />
          </View>
        ))}
      </View>
      <View style={[styles.front, { width: ratingWidth }]}>
        {Array.from({ length: total }, (_, i) => i + 1).map((idx) => (
          <View style={styles.ratingBarItem} key={idx}>
            <Svg.SmallStarFilled />
          </View>
        ))}
      </View>
    </View>
  );
};

export default RatingBar;

const itemSize = 12;
const itemMargin = 4;

const styles = StyleSheet.create({
  ratingBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  background: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  front: {
    position: 'absolute',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  ratingBarItem: {
    width: itemSize,
    height: itemSize,
    marginRight: itemMargin,
  },
});
