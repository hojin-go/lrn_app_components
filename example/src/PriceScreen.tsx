import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Price } from 'lrn-app-components';

type Props = {
  title: string;
  origin: string;
  children: React.ReactNode;
};

const RowWrapper = (props: Props) => {
  return (
    <View style={styles.row}>
      <View style={styles.rowTitle}>
        <Text style={{ fontSize: 22 }}>{props.title}</Text>
      </View>
      <View style={styles.rowOrigin}>
        <Text style={{ fontSize: 20 }}>{props.origin}</Text>
      </View>
      {props.children}
    </View>
  );
};

const PriceScreen = () => {
  return (
    <View style={styles.container}>
      <RowWrapper title="small" origin="1234.83">
        <Price size="small" symbol="￥" value={1234.83} unit="/周" />
      </RowWrapper>
      <RowWrapper title="medium" origin="1234.08">
        <Price size="medium" symbol="￥" value={'1234.08'} unit="/周" />
      </RowWrapper>
      <RowWrapper title="large" origin="1234.80">
        <Price size="large" symbol="￥" value={'1234.80'} unit="/周" />
      </RowWrapper>
      <RowWrapper title="xlarge" origin="1234.282">
        <Price size="xlarge" symbol="￥" value={'1234.282'} unit="/周" />
      </RowWrapper>
    </View>
  );
};

export default PriceScreen;

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'yellow',
  },
  rowTitle: {
    width: 100,
  },
  rowOrigin: {
    width: 130,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
