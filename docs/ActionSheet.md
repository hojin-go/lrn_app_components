# AlertDialog

## Screen shots

![](https://codeup.aliyun.com/61a498ef216a665eb18b936e/lanehub-frontend/lrn-app-components/raw/main/docs%2Fimages%2F20230316-123835.gif)

## Usage

```typescriptreact
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
```
## 注意事项
1. 组件中使用了 `"react-native-safe-area-context": "4.4.1"` 依赖，如与项目工程发生冲突，请自行解决。