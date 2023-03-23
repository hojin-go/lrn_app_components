import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import BottomSheet from './BottomSheet';
import Colors from '../Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ActionSheetAction {
  text: string;
  type?: 'danger' | 'primary' | 'default' | 'cancel';
  onPress: () => void;
}

type Props = {
  visible: boolean;
  content?: string;
  actions: ActionSheetAction[];
};

const ActionSheet = (props: Props) => {
  // use safearea inset
  const insets = useSafeAreaInsets();

  const [actions, setActions] = React.useState<ActionSheetAction[]>([]);
  const [cancelAction, setCancleAction] = React.useState<ActionSheetAction>();

  useEffect(() => {
    const matchCancelAction = props.actions.find(
      (action) => action.type === 'cancel'
    );
    const otherActions = props.actions.filter(
      (action) => action.type !== 'cancel'
    );

    const tmpActions: ActionSheetAction[] = [];
    if (otherActions.length > 0) {
      tmpActions.push(...otherActions);
    }
    if (matchCancelAction) {
      tmpActions.push(matchCancelAction);
    }
    setCancleAction(matchCancelAction);

    setActions(tmpActions);
  }, [props.actions]);

  return (
    <BottomSheet visible={props.visible} onClose={cancelAction?.onPress}>
      <View style={[styles.container, { paddingBottom: insets.bottom }]}>
        <View style={styles.body}>
          {props.content && (
            <Text style={[styles.content]}>{props.content}</Text>
          )}
        </View>
        <View
          style={[
            styles.actionsVertical,
            { height: 55 * props.actions.length },
          ]}
        >
          {actions.map((action, index) => {
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
                          : action.type === 'cancel'
                          ? Colors.black3
                          : Colors.black4,
                    },
                  ]}
                >
                  {action.text}
                </Text>
              </TouchableOpacity>
            );

            if (cancelAction && index === props.actions.length - 1) {
              return [<View style={styles.actionDivider} key={9999} />, button];
            }

            return button;
          })}
        </View>
      </View>
    </BottomSheet>
  );
};

export default ActionSheet;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    // borderRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  content: {
    fontSize: 14,
    color: '#00000080',
    textAlign: 'center',
    lineHeight: 20,
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
  actionDivider: {
    height: 8,
    backgroundColor: Colors.grey2,
  },
});
