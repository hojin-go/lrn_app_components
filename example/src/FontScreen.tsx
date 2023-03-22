import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { useFonts } from 'expo-font';

const FontScreen = () => {
  // const [fontsLoaded] = useFonts({
  //   'DIN Alternate': require('../assets/DINAlternate-Bold.ttf'),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'DIN Alternate', fontSize: 30 }}>
        1234567890
      </Text>
      <Text style={{ fontSize: 30 }}>Platform Default 1234</Text>
    </View>
  );
};

export default FontScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
