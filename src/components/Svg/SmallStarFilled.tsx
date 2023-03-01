import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SmallStarFilled = () => (
  <Svg width={14} height={13} fill="none">
    <Path
      d="m7 1 1.87 3.427 3.836.719-2.682 2.837.503 3.871L7 10.18l-3.527 1.674.503-3.871-2.682-2.837 3.837-.719L7 1Z"
      fill="#F46D4F"
      stroke="#F46D4F"
      strokeWidth={1.333}
      strokeLinejoin="round"
    />
  </Svg>
);

export default SmallStarFilled;
