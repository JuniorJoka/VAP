import create from 'zustand';
import { Dialog, DialogState, DialogType } from '../lib/types';
import { storeInit } from './utils';

export default create<DialogState>((set, get) => ({
  storeStates: storeInit(),

  currentlyOpen: '',

  get: (store: DialogType) => get().storeStates.get(store) as Dialog,

  set: (store: DialogType, value: boolean) => {
    const { storeStates } = get();
    storeStates.set(store, { open: value });
    set({ storeStates });
  },
}));
