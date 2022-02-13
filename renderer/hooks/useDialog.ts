import { Dialog, DialogMap, DialogState, DialogType, SetFunc } from '../lib/types';
import useDialogStore from '../store/useDialogStore';

const selector = (state: DialogState): [DialogMap, SetFunc] => [state.storeStates, state.set];

export default function useDialog(store: DialogType): [Dialog, (v: boolean) => void] {
  const [storeStates, set] = useDialogStore(selector);
  const setFunc = (value: boolean): void => set(store, value);
  return [storeStates.get(store) as Dialog, setFunc];
}
