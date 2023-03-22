# Price

## 截图效果

![](https://codeup.aliyun.com/61a498ef216a665eb18b936e/lanehub-frontend/lrn-app-components/raw/main/docs%2Fimages%2Fprice.png)
![](https://codeup.aliyun.com/61a498ef216a665eb18b936e/lanehub-frontend/lrn-app-components/raw/main/docs%2Fimages%2Fprice-android.jpg)

## 特性
1. value 可以传入 number 或 string，但需可以转换为 number
2. value 会进行数字格式化，小数最多保留2位；当小数末位为0时，会自动射舍掉；当小数部分无效时，会仅展示证书部分
3. 支持传入金额符号和单位
4. 支持4中尺寸

## 使用方法
金额组件使用到了自定义字体 `DIN Alternate`，请在项目中引入该字体。
```typescript
<Price size="small" symbol="￥" value={1000.83} unit="/周" />
<Price size="medium" symbol="￥" value={'1000.08'} unit="/周" />
<Price size="large" symbol="￥" value={'1000.80'} unit="/周" />
<Price size="xlarge" symbol="￥" value={'1000.282'} unit="/周" />
```

## 使用自定义字体
字体文件可在 `example/assets/DINAlternate-Bold.ttf` 中找到

参考：
1. [https://docs.expo.dev/guides/using-custom-fonts/](https://docs.expo.dev/guides/using-custom-fonts/)
2. [https://lanehubcn.feishu.cn/wiki/wikcnXynZxKC1HNpCRyJ4jsnTpe](https://lanehubcn.feishu.cn/wiki/wikcnXynZxKC1HNpCRyJ4jsnTpe)