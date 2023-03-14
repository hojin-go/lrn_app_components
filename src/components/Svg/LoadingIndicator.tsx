import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type LoadingIndicatorSvgProps = {
  color?: string;
  size?: number;
};

const LoadingIndicatorSvg = (props: LoadingIndicatorSvgProps) => (
  <Svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5a7 7 0 0 0 0 14 1 1 0 1 1 0 2 9 9 0 1 1 9-9 1 1 0 1 1-2 0 7 7 0 0 0-7-7Z"
      fill={props.color ?? '#000'}
    />
  </Svg>
);

export default LoadingIndicatorSvg;
