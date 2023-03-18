type PickerItemValue = number | string;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PickerItemData<T = PickerItemValue> = {
  label: string;
  value: T;
  children?: PickerItemData<T>[];
};

export { PickerItemData, PickerItemValue };
