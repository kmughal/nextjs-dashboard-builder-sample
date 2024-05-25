import {
    ResponsiveContainer,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
    Pie,
    PieChart,
} from 'recharts';
import { Kpi } from '../_types/Kpi';

export const mockKpis: Kpi[] = [
    {
        id: 1,
        businessQuestions: [
            'What is the monthly revenue?',
            'How does the revenue compare to the previous month?',
            'What are the revenue trends over the year?',
        ],
        metricIds: ['metric1', 'metric2', 'metric3'],
        description: 'Monthly revenue analysis',
        charts: [
            {
                name: 'Line Chart',
                getChart: () => {
                    const data = mockKpis?.at(0)?.calculation;

                    return (
                        <div style={{ width: '100%', height: 300 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="Sales"
                                        stroke="#8884d8"
                                        activeDot={{ r: 8 }}
                                    />
                                    <Line type="monotone" dataKey="Expenses" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    );
                },
            },
        ],
        calculation: [
            {
                name: 'Jan',
                Expenses: 4000,
                Sales: 2400,
                amt: 2400,
            },
            {
                name: 'Feb',
                Expenses: 3000,
                Sales: 1398,
                amt: 2210,
            },
            {
                name: 'Mar',
                Expenses: 2000,
                Sales: 9800,
                amt: 2290,
            },
            {
                name: 'Apr',
                Expenses: 2780,
                Sales: 3908,
                amt: 2000,
            },
            {
                name: 'May',
                Expenses: 1890,
                Sales: 4800,
                amt: 2181,
            },
            {
                name: 'June',
                Expenses: 2390,
                Sales: 3800,
                amt: 2500,
            },
            {
                name: 'Jul',
                Expenses: 3490,
                Sales: 4300,
                amt: 2100,
            },
        ],
        visualsAvailable: true,
        affiliateApplicability: 'Applies to all business affiliates',

    },
    {
        id: 2,
        businessQuestions: [
            'What is the customer retention rate?',
            'How does the retention rate vary by region?',
            'What are the key factors affecting retention?',
        ],
        metricIds: ['metric4', 'metric5', 'metric6'],
        description: 'Customer retention analysis',
        calculation: [
            [
                { name: 'Group A', value: 400 },
                { name: 'Group B', value: 300 },
                { name: 'Group C', value: 300 },
                { name: 'Group D', value: 200 },
            ],
            [
                { name: 'A1', value: 100 },
                { name: 'A2', value: 300 },
                { name: 'B1', value: 100 },
                { name: 'B2', value: 80 },
                { name: 'B3', value: 40 },
                { name: 'B4', value: 30 },
                { name: 'B5', value: 50 },
                { name: 'C1', value: 100 },
                { name: 'C2', value: 200 },
                { name: 'D1', value: 150 },
                { name: 'D2', value: 50 },
            ],
        ],
        visualsAvailable: false,
        affiliateApplicability: 'Applies to selected business affiliates',

        charts: [
            {
                name: 'Pie Chart',
                getChart: () => {
                    const [data01, data02] = mockKpis?.at(1)?.calculation;
                    return (
                        <div style={{ width: '100%', height: 400 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart width={400} height={400}>
                                    <Pie
                                        data={data01}
                                        dataKey="value"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={60}
                                        fill="#8884d8"
                                    />
                                    <Pie
                                        data={data02}
                                        dataKey="value"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={70}
                                        outerRadius={90}
                                        fill="#82ca9d"
                                        label
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    );
                },
            },
        ],
    },
];
