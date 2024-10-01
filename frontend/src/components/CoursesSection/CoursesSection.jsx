import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CoursesDiv from "./CoursesDiv";
import Title from "../../utils/Title";

const CoursesSection = () => {
  return (
    <div className="container mx-auto mt-8">
      <Title
        title={"Our Courses"}
        subTitle={
          "Discover courses by category—popular, latest, free, or discounted. Find the perfect course for your learning journey!"
        }
      />
      <div>
        <Tabs>
          <TabList>
            <Tab>Popular Courses</Tab>
            <Tab>Latest Courses</Tab>
            <Tab>Free</Tab>
            <Tab>Discounted</Tab>
          </TabList>

          <TabPanel>
            <CoursesDiv />
          </TabPanel>
          <TabPanel>
            <CoursesDiv />
          </TabPanel>
          <TabPanel>
            <CoursesDiv />
          </TabPanel>
          <TabPanel>
            <CoursesDiv />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CoursesSection;
