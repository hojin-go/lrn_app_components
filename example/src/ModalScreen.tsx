import { StyleSheet, View, Button, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { AbstractModal, BottomSheet, Dialog } from 'lrn-app-components';

const ModalScreen = () => {
  // @ts-ignore
  const [bottomModalVisible, setBottomModalVisible] =
    React.useState<boolean>(false);

  const [centerModalVisible, setCenterModalVisible] =
    React.useState<boolean>(false);

  const [bottomSheetVisible, setBottomSheetVisible] = React.useState(false);

  const onClose = () => {
    setBottomModalVisible(false);
    setCenterModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Button
        onPress={() => setBottomSheetVisible(true)}
        title="show BottomSheet"
      />
      <View style={styles.spacing} />
      <Button
        onPress={() => setBottomModalVisible(true)}
        title="show BottomModal"
      />
      <View style={styles.spacing} />
      <Button onPress={() => setCenterModalVisible(true)} title="show Dialog" />
      <AbstractModal
        visible={bottomModalVisible}
        onClose={onClose}
        contentStyle={styles.bottomModal}
      >
        <SafeAreaView>
          <View style={styles.card} />
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
          <View style={styles.card} />
        </SafeAreaView>
      </Dialog>
      <BottomSheet
        visible={bottomSheetVisible}
        onClose={() => setBottomSheetVisible(false)}
      >
        <View style={styles.actionSheetContainer}>
          <Text style={styles.actionSheetText}>
            {
              '- Bottom Sheet 基于 Modal 自定义动画效果实现，展示高度取决于child的高度。\n- 不支持层叠展示。\n- 在安卓上面展示友好，不会出现闪屏的问题。'
            }
          </Text>
        </View>
      </BottomSheet>
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
  card: {
    width: '100%',
    height: 400,
  },
  spacing: {
    height: 20,
  },
  bottomModal: {
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  actionSheetContainer: {
    width: '100%',
    height: 600,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  actionSheetText: {
    fontSize: 20,
    color: 'black',
  },
});
