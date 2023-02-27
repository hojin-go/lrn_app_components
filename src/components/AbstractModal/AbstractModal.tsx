import React, {
  useState,
  useEffect,
  type FC,
  type ReactNode,
  type MutableRefObject,
} from 'react';
import {
  Platform,
  Modal,
  KeyboardAvoidingView,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import Toast from 'react-native-toast-notifications';
import * as animatable from 'react-native-animatable';
// @ts-ignore
import s from './index.module.less';

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
    // useNativeDriver = false,
    contentStyle,
    onClose,
    children,
  } = props;
  const [localVisible, setLocalVisible] = useState<boolean>(false);

  useEffect((): void => {
    if (!visible) {
      setTimeout((): void => {
        setLocalVisible(false);
      }, 300);
    } else {
      setLocalVisible(true);
    }
  }, [visible]);

  return (
    <Modal
      visible={localVisible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      {avoidKeyboard ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          pointerEvents="box-none"
        >
          <InnerModalContainer visible={visible} style={contentStyle}>
            {toastRef && <Toast ref={toastRef} />}
            {children}
          </InnerModalContainer>
        </KeyboardAvoidingView>
      ) : (
        <InnerModalContainer visible={visible} style={contentStyle}>
          {toastRef && <Toast ref={toastRef} />}
          {children}
        </InnerModalContainer>
      )}
    </Modal>
  );
};

const InnerModalContainer = (props: {
  visible: boolean;
  style: StyleProp<ViewStyle>;
  children: ReactNode;
}) => {
  const { visible, style, children } = props;

  return (
    <View style={[{}, s.abstractModalBackdrop]} pointerEvents="box-none">
      <animatable.View
        style={[s.abstractModalContent].concat(style || {})}
        pointerEvents="box-none"
        animation={visible ? 'slideInUp' : 'slideOutDown'}
        duration={250}
        // useNativeDriver={true}
      >
        {children}
      </animatable.View>
    </View>
  );
};

export default AbstractModal;
