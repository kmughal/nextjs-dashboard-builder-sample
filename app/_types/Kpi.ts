export type ChartData = {
    name: string;
    getChart: () => React.ReactNode;
};

export type CalculationData = {
    [key: string]: number | string | ChartData[];
};

export interface Kpi {
    id: number;
    businessQuestions: string[];
    metricIds: string[];
    description: string;
    calculation: any;
    visualsAvailable: boolean;
    affiliateApplicability: string;
    charts: ChartData[];
}
