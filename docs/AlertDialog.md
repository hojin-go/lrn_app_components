# AlertDialog

## Screen shots

![](https://codeup.aliyun.com/61a498ef216a665eb18b936e/lanehub-frontend/lrn-app-components/raw/main/docs%2Fimages%2Falert-dialog-button-1.png)
![](https://codeup.aliyun.com/61a498ef216a665eb18b936e/lanehub-frontend/lrn-app-components/raw/main/docs%2Fimages%2Falert-dialog-buttons-2.png)
![](https://codeup.aliyun.com/61a498ef216a665eb18b936e/lanehub-frontend/lrn-app-components/raw/main/docs%2Fimages%2Falert-dialog-buttons-3.png)

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