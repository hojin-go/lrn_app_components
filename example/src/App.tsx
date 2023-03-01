import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import * as React from 'react';

import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
// import { AbstractModal } from 'lrn-app-components';

import ListTile from '../../src/components/ListTile';
import ButtonScreen from './ButtonScreen';
import ModalScreen from './Modal';
import RatingBarScreen from './RatingBar';

type Props = {
  navigation: NativeStackNavigationProp<{
    Modal: undefined;
    RatingBar: undefined;
    Button: undefined;
  }>;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <ListTile
          title={<Text>Modal</Text>}
          subtitle={<Text>模态组件</Text>}
          hasBorder
          onPress={() => {
            navigation.navigate('Modal');
          }}
        />
        <ListTile
          title={<Text>Button</Text>}
          subtitle={<Text>按钮组件</Text>}
          hasBorder
          onPress={() => {
            navigation.navigate('Button');
          }}
        />
        <ListTile
          title={<Text>RatingBar</Text>}
          subtitle={<Text>评分组件</Text>}
          hasBorder
          onPress={() => {
            navigation.navigate('RatingBar');
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="RatingBar" component={RatingBarScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
    color: 'green',
  },
});
