import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Dialog from './Dialog';
import Colors from '../Colors';

interface AlertDialogAction {
  text: string;
  type?: 'danger' | 'primary' | 'default';
  onPress: () => void;
}

type Props = {
  visible: boolean;
  title?: string;
  content?: string;
  actions: AlertDialogAction[];
};

const AlertDialog = (props: Props) => {
  return (
    <Dialog visible={props.visible}>
      <View style={styles.container}>
        <View style={styles.body}>
          {props.title && <Text style={styles.title}>{props.title}</Text>}
          {props.content && (
            <Text
              style={[
                styles.content,
                props.title ? { paddingTop: 16 } : undefined,
              ]}
            >
              {props.content}
            </Text>
          )}
        </View>
        <View style={styles.actionsDividerHorizontal} />
        <View
          style={
            props.actions.length <= 2
              ? styles.actionsHorizontal
              : [styles.actionsVertical, { height: 55 * props.actions.length }]
          }
        >
          {props.actions.map((action, index) => {
            const button = (
              <TouchableOpacity
                style={[styles.actionItem]}
                key={index}
                onPress={action.onPress}
              >
                <Text
                  style={[
                    styles.actionText,
                    {
                      color:
                        action.type === 'danger'
                          ? Colors.alertRed
                          : action.type === 'primary'
                          ? Colors.branding2
                          : Colors.black4,
                    },
                  ]}
                >
                  {action.text}
                </Text>
              </TouchableOpacity>
            );

            if (props.actions.length >= 2) {
              if (props.actions.length === 2 && index === 1) {
                return [<View style={styles.actionsDividerVertical} />, button];
              }
              if (index > 0) {
                return [
                  <View style={styles.actionsDividerHorizontal} />,
                  button,
                ];
              }
            }

            return button;
          })}
        </View>
      </View>
    </Dialog>
  );
};

export default AlertDialog;

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  body: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000E5',
    textAlign: 'center',
    lineHeight: 24,
  },
  content: {
    fontSize: 17,
    color: '#00000080',
    textAlign: 'center',
    lineHeight: 24,
  },
  actionsDividerHorizontal: {
    backgroundColor: '#0000001A',
    height: 0.5,
    width: '100%',
  },
  actionsDividerVertical: {
    backgroundColor: '#0000001A',
    width: 0.5,
    height: '100%',
  },
  actionsHorizontal: {
    flexDirection: 'row',
    width: '100%',
    height: 55,
  },
  actionsVertical: {
    flexDirection: 'column',
    width: '100%',
  },
  actionItem: {
    flex: 1,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
