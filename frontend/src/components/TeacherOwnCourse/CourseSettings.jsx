import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

const CourseSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Setting</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <label>Upload Course Image</label>
          <input type="file" accept="image/*" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseSettings;
