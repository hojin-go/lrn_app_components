import { ListTile } from '@lrn/lrn-app-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
// import { AbstractModal } from 'lrn-app-components';

import AppBarScreen from './AppBarScreen';
import ButtonScreen from './ButtonScreen';
import EmptyScreen from './EmptyScreen';
import IndicatorScreen from './IndicatorScreen';
import ModalScreen from './Modal';
import RatingBarScreen from './RatingBar';

const StackData = [
  { name: 'Modal', desc: '模态组件', component: ModalScreen },
  { name: 'Button', desc: '按钮组件', component: ButtonScreen },
  { name: 'RatingBar', desc: '评分组件', component: RatingBarScreen },
  { name: 'Empty', desc: '空组件', component: EmptyScreen },
  { name: 'AppBar', desc: '导航栏组件', component: AppBarScreen },
  { name: 'Indicator', desc: '指示器组件', component: IndicatorScreen },
];

type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        {StackData.map((item, index) => {
          return (
            <ListTile
              key={index}
              title={<Text>{item.name}</Text>}
              subtitle={<Text>{item.desc}</Text>}
              hasBorder={index !== StackData.length - 1}
              onPress={() => {
                navigation.navigate(item.name);
              }}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ToastProvider placement="bottom" offsetBottom={200} duration={2000}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          {StackData.map((item, index) => {
            return (
              <Stack.Screen
                name={item.name}
                component={item.component}
                key={index}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
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
