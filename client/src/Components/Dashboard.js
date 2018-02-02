import React from "react";
import DragDrop from "./DragDrop";
import TopNavBar from "./TopNavBar";

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
      <DragDrop
        pouches={pouches}
        currentItems={currentItems}
        currentPouch={currentPouch}
        setCurrentPouch={setCurrentPouch}
        getUser={getUser}
      />
    </div>
  );
};

export default Dashboard;
