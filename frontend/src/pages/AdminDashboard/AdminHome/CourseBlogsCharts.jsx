import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useAllUser from '../../../api/useAllUser';
import useAllCourse from '../../../api/useAllCourse';
import useBlogPost from '../../../api/useBlogPost';


const CourseBlogsCharts = () => {
    const status = "pending"
    const { users } = useAllUser();
    const { courses } = useAllCourse({ status });
    const { blogs } = useBlogPost();
    console.log(blogs, courses)

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "july", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const students = users?.filter(std => std.userRole === "student");
    const teachers = users?.filter(teacher => teacher.userRole === "Teacher")

    const data = monthNames.map((month) => ({
        name: month,
        Students: students?.length || 0,
        Teachers: teachers?.length || 0
    }));


    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} tickFormatter={(tick) => Math.floor(tick)} />
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