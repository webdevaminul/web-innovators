import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { "name": "January", "Students": 40, "Teachers": 24, },
    { "name": "February", "Students": 30, "Teachers": 13, },
    { "name": "March", "Students": 20, "Teachers": 98, },
    { "name": "April", "Students": 27, "Teachers": 39, },
    { "name": "May", "Students": 18, "Teachers": 48,  },
    { "name": "June", "Students": 23, "Teachers": 38,},
    { "name": "July", "Students": 34, "Teachers": 43, },
    { "name": "August", "Students": 54, "Teachers": 53, },
    { "name": "September", "Students": 24, "Teachers": 23, },
    { "name": "October", "Students": 39, "Teachers": 49, },
    { "name": "November", "Students": 44, "Teachers": 43, },
    { "name": "December", "Students": 34, "Teachers": 33, },
];

const CourseBlogsCharts = () => {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Teachers" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Students" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CourseBlogsCharts;