import React from "react";
import DragDrop from "./DragDrop";
import TopNavBar from "./TopNavBar";

const Dashboard = ({ pouches, currentItems, currentPouch }) => {
  return (
    <div>
      <TopNavBar />
      <DragDrop
        pouches={pouches}
        currentItems={currentItems}
        currentPouch={currentPouch}
      />
    </div>
  );
};

export default Dashboard;
