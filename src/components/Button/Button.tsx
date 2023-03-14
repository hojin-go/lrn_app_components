import React, { ReactComponentElement, useState, type FC } from 'react';
import { Text, View, Pressable, ViewStyle } from 'react-native';
import ActivityIndicator from '../ActivityIndicator';
import Colors from '../Colors';
import styles from './index.module.less';

type Props = {
  disabled?: boolean;
  loading?: boolean;
  children: string;
  onClick?: () => void;
  type?: 'ghost' | 'alert' | 'secondary';
  size?: 'small' | 'medium' | 'large' | 'max';
  bold?: boolean;
  iconSvg?: ReactComponentElement<any>;
};

const Button: FC<Props> = ({
  disabled,
  loading,
  children,
  onClick,
  type,
  size = 'max',
  bold,
  iconSvg,
}: Props) => {
  const [pressed, setPressed] = useState(false);

  const getStyles = () => {
    let s = [];
    switch (type) {
      case 'ghost':
        s = [
          styles.ghost,
          pressed ? styles.ghostPressed : undefined,
          disabled ? styles.ghostDisabled : undefined,
        ];
        break;
      case 'secondary':
        s = [
          styles.secondary,
          pressed ? styles.secondaryPressed : undefined,
          disabled ? styles.secondaryDisabled : undefined,
        ];
        break;
      case 'alert':
        s = [
          styles.alert,
          pressed ? styles.alertPressed : undefined,
          disabled ? styles.alertDisabled : undefined,
        ];
        break;
      default:
        s = [
          pressed ? styles.pressed : undefined,
          disabled ? styles.disabled : undefined,
        ];
        break;
    }

    // switch size
    switch (size) {
      case 'small':
        s.push(styles.small);
        break;
      case 'large':
        s.push(styles.large);
        break;
      case 'max':
        s.push(styles.max);
        break;
      default:
        s.push(styles.medium);
        break;
    }

    return s;
  };

  const getTextStyle = (): Array<ViewStyle> => {
    let s = [];
    switch (type) {
      case 'ghost':
        s = [styles.ghostText, disabled ? styles.ghostTextDisabled : undefined];
        break;
      case 'alert':
        s = [styles.alertText, disabled ? styles.alertTextDisabled : undefined];
        break;
      case 'secondary':
        s = [
          styles.secondaryText,
          disabled ? styles.secondaryTextDisabled : undefined,
        ];
        break;
      default:
        s = [styles.primaryText, disabled ? styles.textDisabled : undefined];
        break;
    }

    // switch size
    switch (size) {
      case 'small':
        s.push(styles.smallText);
        break;
      case 'large':
        s.push(styles.largeText);
        break;
      case 'max':
        s.push(styles.maxText);
        break;
      default:
        s.push(styles.mediumText);
        break;
    }

    if (bold) {
      s.push(styles.boldText);
    }

    return s;
  };

  const loadingIndicator = () => {
    let color = '#fff';
    switch (type) {
      case 'ghost':
        color = Colors.black4;
        break;
      case 'alert':
        color = Colors.alertRed;
        break;
      case 'secondary':
        color = Colors.branding1;
        break;
      default:
        break;
    }
    return (
      <View style={{ marginRight: 4 }}>
        <ActivityIndicator size={18} color={color} />
      </View>
    );
  };

  return (
    <Pressable
      style={[styles.btn, ...getStyles()]}
      disabled={disabled}
      onPressIn={() => !loading && setPressed(true)}
      onPressOut={() => !loading && setPressed(false)}
      onPress={() => !loading && onClick && onClick()}
    >
      {loading && loadingIndicator()}
      {iconSvg && <View style={styles.iconwrap}>{iconSvg}</View>}
      <Text style={[styles.btnText, ...getTextStyle()]}>{children}</Text>
    </Pressable>
  );
};

export default Button;
