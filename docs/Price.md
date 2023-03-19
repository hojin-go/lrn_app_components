# Price

## Screen shots

![](https://codeup.aliyun.com/61a498ef216a665eb18b936e/lanehub-frontend/lrn-app-components/raw/main/docs%2Fimages%2Fprice.png)

## Usage
金额组件使用到了自定义字体 `DIN Alternate`，请在项目中引入该字体。
```typescript
<Price size="small" symbol="￥" value={1000.83} unit="/周" />
<Price size="medium" symbol="￥" value={'1000.08'} unit="/周" />
<Price size="large" symbol="￥" value={'1000.80'} unit="/周" />
<Price size="xlarge" symbol="￥" value={'1000.282'} unit="/周" />
```