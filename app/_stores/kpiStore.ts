import { create } from "zustand";
import { Kpi } from "../_types";

export interface SearchKpis {
    search: string;
    setSearch: (search: string) => void;
    kpis?: Kpi[];
    setKpis: (kpis?: Kpi[]) => void;
}


export const useKpiStore = create<SearchKpis>((set) => ({
    search: '',
    setSearch: (search) => set({ search }),
    kpis: undefined,
    setKpis: (kpis) => set({ kpis }),
}));
