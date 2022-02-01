import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";

export const SearchDialog = ({ children }: { children: ReactNode }) => (
  <Dialog.Root>
    <Dialog.Trigger className=" flex items-center space-x-3">{children}</Dialog.Trigger>

    <Dialog.Portal className="">
      <Dialog.Overlay />

      <Dialog.Content className="absolute top-28 bg-slate-600 h-14 w-4/6 left-[50%] rounded-xl transform translate-x-[-50%]">
        <Dialog.Title>Search Dialog</Dialog.Title>

        <Dialog.Description />

        <Dialog.Close>yh</Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
