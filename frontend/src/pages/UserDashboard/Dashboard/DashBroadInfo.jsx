import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; // For charts
import PropTypes from "prop-types";
import useEnrolledCourse from "../../../api/useEnrolledCourse";
import Loader from "../../../utils/Loader";

// Sample data for courses and charts (replace with actual data)
const popularCourses = [
  { title: "React for Beginners", instructor: "John Doe", image: "/card01.jpg", price: "$50", oldPrice: "$100" },
  { title: "Advanced JavaScript", instructor: "Jane Smith", image: "/card02.jpg", price: "$75", oldPrice: "$150" },
];

const enrolledCourse = [
  { title: "HTML & CSS Basics", instructor: "Emily Johnson", image: "/card03.jpg", price: "$30", oldPrice: "$60" },
  { title: "HTML & CSS Basics", instructor: "Emily Johnson", image: "/card04.jpg", price: "$30", oldPrice: "$60" },
];

const sampleGraphData = [
  { name: 'Week 1', enrolled: 10, cost: 200 },
  { name: 'Week 2', enrolled: 15, cost: 300 },
  { name: 'Week 3', enrolled: 8, cost: 150 },
];

// Dashboard card component
const DashboardCard = ({ title, value }) => (
  <Card className="shadow-md m-2" sx={{ height: '150px', width: '100%' }}>
    <CardContent>
      <Typography variant="h6" color="text.primary">
        {title}
      </Typography>
      <Typography variant="h4" color="primary">
        {value}
      </Typography>
    </CardContent>
  </Card>
);

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

// Course card component with image, price, and instructor
const CourseCard = ({ course }) => (
  <Card className="shadow-md m-2" sx={{ height: '300px', width: '100%' }}>
    <CardMedia
      component="img"
      height="140"
      image={course.image}
      alt={course.title}
    />
    <CardContent>
      <Typography variant="h6" color="text.primary">
        {course.title}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        Instructor: {course.instructor}
      </Typography>
      <Typography variant="body1" color="primary">
        Price: {course.price}
      </Typography>
      <Typography variant="body2" color="text.secondary" style={{ textDecoration: 'line-through' }}>
        Old Price: {course.oldPrice}
      </Typography>
    </CardContent>
  </Card>
);

CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
  }).isRequired,
};

const DashBroadInfo = () => {

  const { enrolledCourses, isLoading } = useEnrolledCourse();
  const cost = enrolledCourses[0]?.data?.total_amount
  const enrolledCoursesLength = enrolledCourses ? enrolledCourses?.length : 0;
  const amount = cost ? cost : 0;
  if (isLoading) return <Loader />
  return (
    <div className="p-4">
      {/* Section 1: Dashboard Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <DashboardCard title="Total Enrolled Courses" value={enrolledCoursesLength} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DashboardCard title="Total Course Cost" value={amount} />
        </Grid>
      </Grid>

      {/* Section 2: Popular and Enrolled Courses in a Single Row */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Popular Courses
          </Typography>
          <Grid container spacing={2}>
            {popularCourses.map((course, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Your Enrolled Courses
          </Typography>
          <Grid container spacing={2}>
            {enrolledCourse.length > 0 ? (
              enrolledCourse.map((course, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <CourseCard course={course} />
                </Grid>
              ))
            ) : (
              <Typography variant="body1" color="text.secondary">
                You have not enrolled in any courses yet.
              </Typography>
            )}
          </Grid>
        </div>
      </div>

      {/* Section 3: Enrolled Courses and Cost Graph */}
      <div className="mt-6">
        <Typography variant="h6" color="text.primary" gutterBottom>
          Enrolled Courses and Cost Chart
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sampleGraphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="enrolled" stroke="#8884d8" />
            <Line type="monotone" dataKey="cost" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Section 4: Students' Weekly Progress Chart */}
      <div className="mt-6">
        <Typography variant="h6" color="text.primary" gutterBottom>
          Weekly Progress
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sampleGraphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="enrolled" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Section 5: Assignment Progress Chart */}
      <div className="mt-6">
        <Typography variant="h6" color="text.primary" gutterBottom>
          Assignment Progress
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sampleGraphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="cost" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashBroadInfo;
