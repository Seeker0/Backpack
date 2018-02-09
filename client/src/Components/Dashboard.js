import React from "react";
import TopNavBar from "./TopNavBar";
import DragDropContainer from "../Containers/DragDropContainer";

const Dashboard = ({ unsortedItems, username }) => {
  return (
    <div className="testing">
      <TopNavBar username={username} />
      <DragDropContainer />
    </div>
  );
};

export default Dashboard;
