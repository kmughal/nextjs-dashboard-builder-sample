import { create } from 'zustand';

interface SearchBox {
  selectedPath: string;
  setSelectedPath: (search: string) => void;
}

export const useSearchStore = create<SearchBox>((set) => ({
  selectedPath: '',
  setSelectedPath: (selectedPath) => set({ selectedPath }),
}));
