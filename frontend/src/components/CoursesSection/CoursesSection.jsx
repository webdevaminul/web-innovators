import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CoursesDiv from "./CoursesDiv";

const CoursesSection = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-center font-bold text-3xl font-bai">Our Courses</h1>
      <div>
        <Tabs>
          <TabList>
            <Tab>Popular Courses</Tab>
            <Tab>Latest Courses</Tab>
            <Tab>Free</Tab>
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
        </Tabs>
      </div>
    </div>
  );
};

export default CoursesSection;
