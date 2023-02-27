import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import AbstractModal from '../../src/components/AbstractModal';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [visible, setVisible] = React.useState<boolean>(true);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <AbstractModal visible={visible} onClose={onClose}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
          }}
        />
      </AbstractModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
