import { BottomSheet } from 'lrn-app-components';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AnimationScreen = () => {
  const [visible, setVisible] = React.useState(false);

  const safeAreaInset = useSafeAreaInsets();

  const hideBottomSheet = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Show modal" onPress={() => setVisible(true)} />

      <BottomSheet visible={visible} onClose={hideBottomSheet}>
        <View style={{ ...styles.box, marginBottom: safeAreaInset.bottom }}>
          <Text style={styles.content}>
            Lorem Ipsum is simply a dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <View style={styles.spacing}>
            <Button title="Show content" onPress={hideBottomSheet} />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    backgroundColor: 'yellow',
    marginHorizontal: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  spacing: {
    paddingVertical: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 30,
    color: '#555',
  },
  testBox: {
    backgroundColor: 'red',
    height: 400,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});
