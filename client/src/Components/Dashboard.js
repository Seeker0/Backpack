import React from "react";
import DragDrop from "./DragDrop";
import TopNavBar from "./TopNavBar";
import DragDropContainer from "../Containers/DragDropContainer";

const Dashboard = ({ unsortedItems, username }) => {
  return (
    <div>
      <TopNavBar username={username} />
      <DragDropContainer />
    </div>
  );
};

export default Dashboard;
