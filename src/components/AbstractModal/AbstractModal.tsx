import React, { type FC, type ReactNode, type MutableRefObject } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-notifications';
// import * as animatable from 'react-native-animatable';
import styles from './index.module.less';

type Props = {
  toastRef?: MutableRefObject<Toast>;
  visible: boolean;
  avoidKeyboard?: boolean;
  useNativeDriver?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
  onClose: () => void;
};

const AbstractModal: FC<Props> = (props: Props) => {
  const {
    toastRef,
    visible,
    avoidKeyboard = false,
    contentStyle,
    onClose,
    children,
  } = props;

  return (
    <Modal
      style={styles.abstractModalBackdrop}
      isVisible={visible}
      backdropColor="#000"
      backdropOpacity={0.37}
      swipeDirection={['down']}
      useNativeDriver
      onBackdropPress={onClose}
    >
      {avoidKeyboard ? (
        <KeyboardAvoidingView
          style={[styles.abstractModalContent, contentStyle]}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          pointerEvents="box-none"
        >
          {toastRef && <Toast ref={toastRef} />}
          {children}
        </KeyboardAvoidingView>
      ) : (
        <View style={[styles.abstractModalContent, contentStyle]}>
          {toastRef && <Toast ref={toastRef} />}
          {children}
        </View>
      )}
    </Modal>
  );
};

export default AbstractModal;
