import { Feature, FeaturesAndTrends } from "../_types/FeaturesAndTrends";


const featured = [
  {
    id: 1,
    name: 'Sales Performance',
    description:
      "This KPI measures the sales team's ability to meet revenue targets.",
  },
  {
    id: 2,
    name: 'Customer Retention',
    description:
      'This KPI tracks how many customers continue to do business with us over a given period.',
    date: '2021-09-01',
  },
  {
    id: 3,
    name: 'Net Profit Margin',
    description:
      'This KPI shows the profitability of our business after all expenses have been deducted from revenue.',
    date: '2021-09-03',
  },
  {
    id: 4,
    name: 'Gross Profit Margin',
    description:
      'This KPI shows the total sales revenue after all the direct costs associated with making a product or providing a service are deducted.',
    date: '2021-09-04',
  },
  {
    id: 5,
    name: 'Operating Profit Margin',
    description:
      'This KPI shows how much profit a company makes on a dollar of sales after paying for variable costs of production such as wages and raw materials but before paying interest or tax.',
    date: '2021-09-05',
  },
  {
    id: 6,
    name: 'Debt Equity Ratio',
    description:
      "This KPI measures a company's financial leverage calculated by dividing its long-term debt by stockholders' equity.",
    date: '2021-09-06',
  },
  {
    id: 7,
    name: 'Earnings Per Share',
    description:
      "This KPI measures the portion of a company's profit allocated to each outstanding share of common stock.",
    date: '2021-09-07',
  },
  {
    id: 8,
    name: 'Return on Equity',
    description:
      "This KPI measures the financial performance calculated by dividing net income by shareholders' equity.",
    date: '2021-09-08',
  },
  {
    id: 9,
    name: 'Return on Assets',
    description:
      "This KPI measures an entity's earnings relative to its total resources.",
    date: '2021-09-09',
  },
  {
    id: 10,
    name: 'Return on Investment',
    description:
      'This KPI measures the gain or loss made on an investment relative to the amount of money invested.',
    date: '2021-09-10',
  },
] satisfies Feature[];


const trending = [
  {
    id: 1,
    name: 'Employee Turnover',
    description:
      'This KPI measures the rate at which employees leave the company and are replaced.',
    date: '2021-09-01',
  },
  {
    id: 2,
    name: 'Inventory Turnover',
    description:
      "This KPI shows how many times a company's inventory is sold and replaced over a certain period.",
  },
  {
    id: 3,
    name: 'Return on Investment (ROI)',
    description:
      'This KPI measures the profitability of investments or actions.',
    date: '2021-09-03',
  },
  {
    id: 4,
    name: 'Current Ratio',
    description:
      "This KPI measures a company's ability to pay short-term and long-term obligations.",
    date: '2021-09-04',
  },
  {
    id: 5,
    name: 'Quick Ratio',
    description:
      "This KPI measures a company's ability to meet its short-term obligations with its most liquid assets.",
    date: '2021-09-05',
  },
  {
    id: 6,
    name: 'Debt Equity Ratio',
    description:
      "This KPI measures a company's financial leverage calculated by dividing its long-term debt by stockholders' equity.",
    date: '2021-09-06',
  },
  {
    id: 7,
    name: 'Earnings Per Share',
    description:
      "This KPI measures the portion of a company's profit allocated to each outstanding share of common stock.",
    date: '2021-09-07',
  },
  {
    id: 8,
    name: 'Return on Equity',
    description:
      "This KPI measures the financial performance calculated by dividing net income by shareholders' equity.",
    date: '2021-09-08',
  },
  {
    id: 9,
    name: 'Return on Assets',
    description:
      "This KPI measures an entity's earnings relative to its total resources.",
    date: '2021-09-09',
  },
  {
    id: 10,
    name: 'Return on Investment',
    description:
      'This KPI measures the gain or loss made on an investment relative to the amount of money invested.',
    date: '2021-09-10',
  },
] satisfies Feature[];

export const mockFeaturesAndTrends: FeaturesAndTrends = {
  featured,
  trending,
};
