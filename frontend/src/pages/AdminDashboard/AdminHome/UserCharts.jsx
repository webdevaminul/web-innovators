import PropTypes from 'prop-types';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import useAllCourse from '../../../api/useAllCourse';
import useAllUser from '../../../api/useAllUser';
import useBlogPost from '../../../api/useBlogPost';



// Define colors for each slice of the pie
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#a4de6c'];

// Custom tooltip component
function CustomTooltip({ payload, active }) {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ccc' }}>
                <p>{`${payload[0].name} : ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
}
// PropTypes validation for CustomTooltip component
CustomTooltip.propTypes = {
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.number,
        })
    ),
    active: PropTypes.bool,
};

const UserCharts = () => {
    const status = "pending"
    const { users } = useAllUser();
    const { courses } = useAllCourse({ status });
    const { blogs } = useBlogPost();

    const students = users?.filter(std => std.userRole === "student");
    const teachers = users?.filter(teacher => teacher.userRole === "Teacher")
    const pendingUsers = users?.filter((u) => u.status === "Pending");
    const pendingCourses = courses?.filter((c) => c.status === "pending");
    const pendingBlogs = blogs?.filter((b) => b.status === "pending");

    const data = [
        { name: 'All Teachers', uv: teachers?.length },
        { name: 'All Students', uv: students?.length },
        { name: 'Users Pending', uv: pendingUsers?.length},
        { name: 'Courses Pending', uv: pendingCourses?.length},
        { name: 'Blogs Pending', uv: pendingBlogs?.length},
    ];
    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="uv"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label={({ name }) => name} // Display the name on each slice
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default UserCharts;
