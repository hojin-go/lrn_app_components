# AlertDialog

## Screen shots

![](./images/20230317-220250.gif)

## Usage

```typescriptreact
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
```

## 注意事项
1. BottomSheet 会基于内部组件高度进行动画，如果需要使用 SafeArea，请使用 `useSafeAreaInsets` 计算，因为 `SafeAreaView` 会导致计算内容高度不稳定，动画发送抖动；
  
