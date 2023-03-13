import React, { type FC } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './index.module.less';

type Props = {
  disabled?: boolean;
  blocked?: boolean;
  children: string;
  onClick?: () => void;
  type?: 'ghost' | 'alert';
  bold?: boolean;
  iconSvg?;
};

const Button: FC<Props> = ({
  disabled,
  blocked,
  children,
  onClick,
  type,
  bold,
  iconSvg,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.73}
      style={[
        styles.btn,
        blocked ? styles.blocked : undefined,
        disabled ? styles.disabled : undefined,
        type === 'ghost' ? styles.ghost : undefined,
        type === 'alert'
          ? disabled
            ? styles.alertDisabled
            : styles.alert
          : undefined,
      ]}
      disabled={disabled}
      onPress={onClick}
    >
      {iconSvg && <View style={styles.iconwrap}>{iconSvg}</View>}
      <Text
        style={[
          styles.btnText,
          type === 'ghost' ? styles.ghostText : undefined,
          type === 'alert'
            ? disabled
              ? styles.alertTextDisabled
              : styles.alertText
            : undefined,
          bold ? { fontWeight: 'bold' } : undefined,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
