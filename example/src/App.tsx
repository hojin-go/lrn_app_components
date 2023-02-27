import * as React from 'react';

import { StyleSheet, View, Button, SafeAreaView } from 'react-native';
// import { AbstractModal } from 'lrn-app-components';
import AbstractModal from '../../src/components/AbstractModal';

export default function App() {
  // @ts-ignore
  const [visible, setVisible] = React.useState<boolean>(false);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => setVisible(true)} title="show Modal" />
      <AbstractModal
        visible={visible}
        onClose={onClose}
        contentStyle={{
          backgroundColor: 'white',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          // clip
          overflow: 'hidden',
        }}
      >
        <SafeAreaView>
          <View
            style={{
              width: '100%',
              height: 400,
            }}
          />
        </SafeAreaView>
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
