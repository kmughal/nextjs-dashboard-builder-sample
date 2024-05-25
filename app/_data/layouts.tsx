import { Layout } from '../_types/Layout';
import { mockKpis } from './kpis';

export const mockLayouts = [
  {
    id: 1,
    amountOfPages: 10,
    kpiBeingUsed: 400,
    kpi: mockKpis[0],
    previewLayout: <div>This is a preview layout</div>,
    layoutName: 'Sample Layout 1',
    layoutDescription: 'This is a sample layout for testing purposes.',
    lastUpdated: '2021-10-10',
  },
] as Layout[];
