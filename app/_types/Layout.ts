import { Kpi } from "./Kpi";

export interface Layout {
    id: number;
    amountOfPages: number;
    kpiBeingUsed: number;
    kpi: Kpi;
    previewLayout: React.ReactNode;
    layoutName: string;
    layoutDescription: string;
    lastUpdated: string;
}