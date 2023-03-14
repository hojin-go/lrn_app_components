import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Button from '../../src/components/Button';
import ButtonGroup from './components/ButtonGroup';

const ButtonScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ButtonGroup>
          <Button size="small">按钮</Button>
          <Button size="medium">按钮</Button>
          <Button size="large">按钮</Button>
          <Button size="max">按钮</Button>
        </ButtonGroup>
        <ButtonGroup styles={{ marginTop: 10 }}>
          <Button disabled size="small">
            按钮
          </Button>
          <Button disabled size="medium">
            按钮
          </Button>
          <Button disabled size="large">
            按钮
          </Button>
          <Button disabled size="max">
            按钮
          </Button>
        </ButtonGroup>
        <ButtonGroup styles={{ marginTop: 10 }}>
          <Button type="secondary" size="small">
            按钮
          </Button>
          <Button type="secondary" size="medium">
            按钮
          </Button>
          <Button type="secondary" size="large">
            按钮
          </Button>
          <Button type="secondary" size="max">
            按钮
          </Button>
        </ButtonGroup>
        <ButtonGroup styles={{ marginTop: 10 }}>
          <Button disabled type="secondary" size="small">
            按钮
          </Button>
          <Button disabled type="secondary" size="medium">
            按钮
          </Button>
          <Button disabled type="secondary" size="large">
            按钮
          </Button>
          <Button disabled type="secondary" size="max">
            按钮
          </Button>
        </ButtonGroup>
        <ButtonGroup styles={{ marginTop: 10 }}>
          <Button type="alert" size="small">
            按钮
          </Button>
          <Button type="alert" size="medium">
            按钮
          </Button>
          <Button type="alert" size="large">
            按钮
          </Button>
          <Button type="alert" size="max">
            按钮
          </Button>
        </ButtonGroup>
        <ButtonGroup styles={{ marginTop: 10 }}>
          <Button disabled type="alert" size="small">
            按钮
          </Button>
          <Button disabled type="alert" size="medium">
            按钮
          </Button>
          <Button disabled type="alert" size="large">
            按钮
          </Button>
          <Button disabled type="alert" size="max">
            按钮
          </Button>
        </ButtonGroup>
        <ButtonGroup styles={{ marginTop: 10 }}>
          <Button type="ghost" size="small">
            按钮
          </Button>
          <Button type="ghost" size="medium">
            按钮
          </Button>
          <Button type="ghost" size="large">
            按钮
          </Button>
          <Button type="ghost" size="max">
            按钮
          </Button>
        </ButtonGroup>
        <ButtonGroup styles={{ marginTop: 10 }}>
          <Button disabled type="ghost" size="small">
            按钮
          </Button>
          <Button disabled type="ghost" size="medium">
            按钮
          </Button>
          <Button disabled type="ghost" size="large">
            按钮
          </Button>
          <Button disabled type="ghost" size="max">
            按钮
          </Button>
        </ButtonGroup>
        <ButtonGroup styles={{ marginTop: 10 }}>
          <Button size="medium" loading>
            按钮
          </Button>
          <Button size="medium" type="secondary" loading>
            按钮
          </Button>
          <Button size="medium" type="alert" loading>
            按钮
          </Button>
          <Button size="medium" type="ghost" loading>
            按钮
          </Button>
        </ButtonGroup>
      </ScrollView>
    </View>
  );
};

export default ButtonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    height: 10,
  },
  scrollView: {
    paddingVertical: 20,
  },
});
