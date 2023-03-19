# ColumnPicker - 多列选择器

## Screen shots

![](https://codeup.aliyun.com/61a498ef216a665eb18b936e/lanehub-frontend/lrn-app-components/raw/main/docs%2Fimages%2Fcolumn-picker.png)

## Usage

```typescript
// 数据需为二维数组，数组内的元素需满足以下条件：
const data = [
  [
    // 1-12h
    { label: '1时', value: 1 },
    { label: '2时', value: 2 },
    { label: '3时', value: 3 },
    { label: '4时', value: 4 },
    { label: '5时', value: 5 },
    { label: '6时', value: 6 },
    { label: '7时', value: 7 },
    { label: '8时', value: 8 },
    { label: '9时', value: 9 },
    { label: '10时', value: 10 },
    { label: '11时', value: 11 },
    { label: '12时', value: 12 },
  ],
  [
    // 0-59m, step by 15min
    { label: '00分', value: 0 },
    { label: '15分', value: 15 },
    { label: '30分', value: 30 },
    { label: '45分', value: 45 },
  ],
  [
    // 0-59s, step by 30s
    { label: '00秒', value: 0 },
    { label: '30秒', value: 30 },
  ],
];

// 记录选择项
const [selection, setSelection] = React.useState<PickerItemData[]>();

// 计算选择项的 value，需为数组格式
const selectionValue = useMemo(() => {
  if (selection) {
    return selection.map((item) => item.value);
  }
  return [];
}, [selection]);

<ColumnPicker
  dataSource={data}
  columns={3}
  selection={selectionValue}
  onValueChange={(value) => {
    setSelection(value);
  }}
/>
```