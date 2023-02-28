import React, { type FC, type ReactNode, type MutableRefObject } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  View,
  type StyleProp,
  type ViewStyle,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-notifications';

type Props = {
  toastRef?: MutableRefObject<Toast>;
  visible: boolean;
  avoidKeyboard?: boolean;
  useNativeDriver?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
  onClose: () => void;
};

const Dialog: FC<Props> = (props: Props) => {
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
      style={styles.backdrop}
      isVisible={visible}
      backdropColor="#000"
      backdropOpacity={0.37}
      onBackdropPress={onClose}
      animationIn="fadeIn"
      animationOut={Platform.OS === 'ios' ? 'fadeOut' : 'fadeOutDown'}
    >
      {avoidKeyboard ? (
        <KeyboardAvoidingView
          style={[styles.content, contentStyle]}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          pointerEvents="box-none"
        >
          {toastRef && <Toast ref={toastRef} />}
          {children}
        </KeyboardAvoidingView>
      ) : (
        <View style={[styles.content, contentStyle]}>
          {toastRef && <Toast ref={toastRef} />}
          {children}
        </View>
      )}
    </Modal>
  );
};

export default Dialog;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    width: 300,
    borderRadius: 20,
    backgroundColor: 'white',
  },
});
