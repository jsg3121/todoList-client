import React from 'react';
import { CalendarComponent, MemoComponent } from '../../../components';
import "../../../style/dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <CalendarComponent />
      <MemoComponent />
    </div>
  );
};

export default Dashboard;