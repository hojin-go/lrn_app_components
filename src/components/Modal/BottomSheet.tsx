import { Modal } from 'react-native';
import React, { useEffect } from 'react';
import FadeInView from '../AnimationView/FadeInView';
import SlideInView from '../AnimationView/SlideInView';

type Props = {
  children: React.ReactNode;
  visible: boolean;
  onClose?: () => void;
};

const BottomSheet = (props: Props) => {
  const [visible, setVisible] = React.useState(false);
  const fadeInRef = React.useRef<FadeInView>(null);
  const slideInRef = React.useRef<SlideInView>(null);

  useEffect(() => {
    if (props.visible !== true) {
      onCloseModal();
    } else {
      setVisible(props.visible);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.visible]);

  const onCloseModal = async () => {
    // () => setVisible(false);
    // await fadeInRef.current?.close();
    // setVisible(false);
    await Promise.all([
      fadeInRef.current?.close(),
      slideInRef.current?.close(),
    ]);

    setVisible(false);
    props.onClose?.();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={props.onClose && onCloseModal}
    >
      <FadeInView ref={fadeInRef} onPress={props.onClose && onCloseModal} />
      <SlideInView ref={slideInRef}>{props.children}</SlideInView>
    </Modal>
  );
};

export default BottomSheet;
