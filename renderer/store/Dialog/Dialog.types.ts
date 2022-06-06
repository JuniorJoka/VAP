export enum DialogType {
  search,
  detail,
}

export interface Dialog {
  open: boolean;
}

export type DialogMap = Map<DialogType, Dialog>;

export type GetFunc = (type: DialogType) => Dialog;

export type SetFunc = (type: DialogType, value: boolean) => void;

export default interface DialogState {
  storeStates: DialogMap;
  currentlyOpen: string;
  get: GetFunc;
  set: SetFunc;
}
