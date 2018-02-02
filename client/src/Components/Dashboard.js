import React from "react";
import DragDrop from "./DragDrop";
import TopNavBar from "./TopNavBar";
import { Redirect } from "react-router-dom";

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
      {username ? null : <Redirect to="/" />}
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
