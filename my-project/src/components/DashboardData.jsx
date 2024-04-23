import React from 'react';

const DashboardData = () => {
  return (
    <div className="mx">
      <div className="dashboard-data py-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="data-item rounded-md p-6 bg-white shadow-md">
          <h2 className="text-xl font-semibold mb-4">Total Revenue</h2>
          <div className="flex items-center mb-2">
            <p className="text-green-700 px-4 rounded-full bg-green-200 mr-3">+12.5%</p>
            <p className="text-2xl font-bold">$32,621.72</p>
          </div>
          <p className="text-gray-600">433 Orders</p>
        </div>

        <div className="data-item rounded-md p-6 bg-white shadow-md">
          <h2 className="text-xl font-semibold mb-4">Subscribers</h2>
          <div className="flex items-center mb-2">
            <p className="text-green-700 px-4 rounded-full bg-green-200 mr-3">++32.5%</p>
            <p className="text-2xl font-bold">$484,205</p>
          </div>
          <p className="text-gray-600">$56 Average Order</p>
        </div>

        <div className="data-item rounded-md p-6 bg-white shadow-md">
          <h2 className="text-xl font-semibold mb-4">Conversations</h2>
          <div className="flex items-center mb-2">
            <p className="text-red-700 px-4 rounded-full bg-red-200 mr-3">-3.4%</p>
            <p className="text-2xl font-bold">$552.33</p>
          </div>
          <p className="text-gray-600">5 min Average Response time</p>
        </div>

        <div className="data-item rounded-md p-6 bg-white shadow-md">
          <h2 className="text-xl font-semibold mb-4">Popup Conversation Rate</h2>
          <div className="flex items-center mb-2">
            <p className="text-green-700 px-4 rounded-full bg-green-200 mr-3">+32.5%</p>
            <p className="text-2xl font-bold">25%</p>
          </div>
          <p className="text-gray-600">5% Sale Conversation Rate</p>
        </div>
        
      </div>
    </div>
  );
};

export default DashboardData;
