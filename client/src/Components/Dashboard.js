import React from "react";
import DragDrop from "./DragDrop";
import TopNavBar from "./TopNavBar";
import DashboardContainer from "../Containers/DashboardContainer";

const Dashboard = ({
  pouches,
  currentItems,
  currentPouch,
  unsortedItems,
  username,
  setCurrentPouch,
  getUser
}) => {
  return (
    <div>
      <TopNavBar username={username} />
      <DashboardContainer />
    </div>
  );
};

export default Dashboard;
