import { StyleSheet, View, Button, SafeAreaView } from 'react-native';
import React from 'react';
import { AbstractModal, Dialog } from '@lrn/lrn-app-components';

const ModalScreen = () => {
  // @ts-ignore
  const [bottomModalVisible, setBottomModalVisible] =
    React.useState<boolean>(false);

  const [centerModalVisible, setCenterModalVisible] =
    React.useState<boolean>(false);

  const onClose = () => {
    setBottomModalVisible(false);
    setCenterModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Button
        onPress={() => setBottomModalVisible(true)}
        title="show BottomModal"
      />
      <Button onPress={() => setCenterModalVisible(true)} title="show Dialog" />
      <AbstractModal
        visible={bottomModalVisible}
        onClose={onClose}
        contentStyle={{
          backgroundColor: 'white',
          overflow: 'hidden',
        }}
      >
        <SafeAreaView>
          <View
            style={{
              width: '100%',
              height: 300,
            }}
          />
        </SafeAreaView>
      </AbstractModal>
      <Dialog
        visible={centerModalVisible}
        onClose={onClose}
        contentStyle={{
          backgroundColor: 'white',
          overflow: 'hidden',
          width: 300,
        }}
      >
        <SafeAreaView>
          <View
            style={{
              width: '100%',
              height: 300,
            }}
          />
        </SafeAreaView>
      </Dialog>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
    color: 'green',
  },
});
