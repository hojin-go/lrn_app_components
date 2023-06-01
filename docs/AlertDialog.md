# AlertDialog

## Screen shots

![](./images/alert-dialog-button-1.png)
![](./images/alert-dialog-buttons-2.png)
![](./images/alert-dialog-buttons-3.png)

## Usage

```typescriptreact
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

```
