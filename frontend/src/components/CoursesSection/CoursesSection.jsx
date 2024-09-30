import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
            <h2>Popular Courses</h2>
          </TabPanel>
          <TabPanel>
            <h2>Latest Courses</h2>
          </TabPanel>
          <TabPanel>
            <h2>Free</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CoursesSection;
