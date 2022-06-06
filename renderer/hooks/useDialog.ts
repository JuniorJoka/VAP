import useDialogStore, {
  Dialog,
  DialogMap,
  DialogState,
  DialogType,
  SetFunc,
} from '../store/Dialog';

const selector = (state: DialogState): [DialogMap, SetFunc] => [state.storeStates, state.set];

export default function useDialog(store: DialogType): [Dialog, (v: boolean) => void] {
  const [storeStates, set] = useDialogStore(selector);
  const setFunc = (value: boolean): void => set(store, value);
  return [storeStates.get(store) as Dialog, setFunc];
}
