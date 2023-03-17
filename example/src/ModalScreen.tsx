import { StyleSheet, View, Button, Text } from 'react-native';
import React from 'react';
import {
  AbstractModal,
  ActionSheet,
  AlertDialog,
  BottomSheet,
  Dialog,
} from 'lrn-app-components';

const ModalScreen = () => {
  // @ts-ignore
  const [bottomModalVisible, setBottomModalVisible] =
    React.useState<boolean>(false);

  const [centerModalVisible, setCenterModalVisible] =
    React.useState<boolean>(false);

  const [bottomSheetVisible, setBottomSheetVisible] = React.useState(false);
  // alert dialog visible
  const [alertVisible, setAlertVisible] = React.useState(false);

  // action sheet visible
  const [actionSheetVisible, setActionSheetVisible] = React.useState(false);

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
      {/* Alert dialog button */}
      <View style={styles.spacing} />
      <Button onPress={() => setAlertVisible(true)} title="show Alert" />
      <View style={styles.spacing} />
      <Button
        onPress={() => setActionSheetVisible(true)}
        title="show ActionSheet"
      />
      <AbstractModal
        visible={bottomModalVisible}
        onClose={onClose}
        contentStyle={styles.bottomModal}
      >
        <View style={styles.card} />
      </AbstractModal>
      <Dialog visible={centerModalVisible} onClose={onClose}>
        <View style={styles.card}>
          <Button title="关闭" onPress={() => setCenterModalVisible(false)} />
        </View>
      </Dialog>
      <AlertDialog
        visible={alertVisible}
        title={
          '弹窗标题弹窗标题弹窗标题弹窗标题弹窗标题弹窗标题弹窗标题弹窗标题'
        }
        content={'弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容'}
        actions={[
          { text: '取消', onPress: () => setAlertVisible(false) },
          // {
          //   text: '确定',
          //   type: 'primary',
          //   onPress: () => setAlertVisible(false),
          // },
          // {
          //   text: '危险',
          //   type: 'danger',
          //   onPress: () => setAlertVisible(false),
          // },
        ]}
      />

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

      <ActionSheet
        visible={actionSheetVisible}
        content={'弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容'}
        actions={[
          {
            text: '取消',
            type: 'cancel',
            onPress: () => setActionSheetVisible(false),
          },
          {
            text: '确定',
            type: 'primary',
            onPress: () => setActionSheetVisible(false),
          },
          {
            text: '危险',
            type: 'danger',
            onPress: () => setActionSheetVisible(false),
          },
        ]}
      />
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
    alignItems: 'center',
    justifyContent: 'center',
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
