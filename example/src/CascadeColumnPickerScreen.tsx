import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import {
  CascadeColumnPicker,
  Colors,
  PickerItemData,
} from 'lrn-app-components';

const CascadeColumnPickerScreen = () => {
  const data = [
    {
      label: '黑龙江',
      value: 'heilongjiang',
      children: [
        { label: '哈尔滨', value: 'haerbin' },
        { label: '齐齐哈尔', value: 'qiqihaer' },
        { label: '牡丹江', value: 'mudanjiang' },
        { label: '佳木斯', value: 'jiamusi' },
        { label: '大庆', value: 'daqing' },
        { label: '鸡西', value: 'jixi' },
      ],
    },
    {
      label: '吉林',
      value: 'jilin',
      children: [
        { label: '长春', value: 'changchun' },
        { label: '吉林', value: 'jilin' },
        { label: '四平', value: 'siping' },
        { label: '辽源', value: 'liaoyuan' },
        { label: '通化', value: 'tonghua' },
        { label: '白山', value: 'baishan' },
      ],
    },
    {
      label: '辽宁',
      value: 'liaoning',
      children: [
        { label: '沈阳', value: 'shenyang' },
        { label: '大连', value: 'dalian' },
        { label: '鞍山', value: 'anshan' },
        { label: '抚顺', value: 'fushun' },
        { label: '本溪', value: 'benxi' },
        { label: '丹东', value: 'dandong' },
      ],
    },
    {
      label: '河北',
      value: 'hebei',
      children: [
        { label: '石家庄', value: 'shijiazhuang' },
        { label: '唐山', value: 'tangshan' },
        { label: '秦皇岛', value: 'qinhuangdao' },
        { label: '邯郸', value: 'handan' },
        { label: '邢台', value: 'xingtai' },
        { label: '保定', value: 'baoding' },
      ],
    },
    {
      label: '山西',
      value: 'shanxi',
      children: [
        { label: '太原', value: 'taiyuan' },
        { label: '大同', value: 'datong' },
        { label: '阳泉', value: 'yangquan' },
        { label: '长治', value: 'changzhi' },
        { label: '晋城', value: 'jincheng' },
        { label: '朔州', value: 'shuozhou' },
      ],
    },
    {
      label: '内蒙古',
      value: 'neimenggu',
      children: [
        { label: '呼和浩特', value: 'huhehaote' },
        { label: '包头', value: 'baotou' },
        { label: '乌海', value: 'wuhai' },
        { label: '赤峰', value: 'chifeng' },
        { label: '通辽', value: 'tongliao' },
        { label: '鄂尔多斯', value: 'eerduosi' },
      ],
    },
    {
      label: '江苏',
      value: 'jiangsu',
      children: [
        { label: '南京', value: 'nanjing' },
        { label: '无锡', value: 'wuxi' },
        { label: '徐州', value: 'xuzhou' },
        { label: '常州', value: 'changzhou' },
        { label: '苏州', value: 'suzhou' },
        { label: '南通', value: 'nantong' },
      ],
    },
  ];
  const [selection, setSelection] = React.useState<PickerItemData[]>();

  const labelText = useMemo(() => {
    if (selection) {
      return selection.map((item) => item.label).join(' ');
    }
    return '';
  }, [selection]);

  const selectionValue = useMemo(() => {
    if (selection) {
      return selection.map((item) => item.value);
    }
    return [];
  }, [selection]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`已选择${labelText}`}</Text>
      <CascadeColumnPicker
        dataSource={data}
        columns={2}
        selection={selectionValue}
        onValueChange={(value) => {
          setSelection(value);
        }}
      />
    </View>
  );
};

export default CascadeColumnPickerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 17,
    color: Colors.black5,
  },
});
