import React, { type FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './index.module.less';

type Props = {
  disabled?: boolean;
  blocked?: boolean;
  children: string;
  onClick?: () => void;
  type?: 'ghost' | 'alert';
  bold?: boolean;
};

const Button: FC<Props> = ({
  disabled,
  blocked,
  children,
  onClick,
  type,
  bold,
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
