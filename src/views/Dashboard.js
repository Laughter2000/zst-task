import Sidebar from "components/Sidebar";
import React from "react";

const Dashboard = () => {
    return (
        <div className="min-w-full min-h-screen bg-secondary"> 
        <Sidebar />
        <div className="relative min-w-full h-full md:ml-64">
        <p>Hello world</p>
        </div>
        </div>
    );
}


export default Dashboard;