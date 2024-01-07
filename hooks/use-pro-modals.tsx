import {create} from "zustand"

interface usePromModalStore {
isOpen:boolean,
onOpen:()=>void,
onClose:()=>void,
}

export const useProMadal=create<usePromModalStore>((set)=>({
  isOpen:true,
  onOpen:()=>set({isOpen:true}),
  onClose:()=>set({isOpen:false}),
}))

