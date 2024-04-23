import React from 'react';
import { Calendar } from 'lucide-react';

const Tabs = () => {
  return (
    <div className="mt-8 flex justify-between items-start mb-4">
      <div className="flex items-center">
        <img
          className="inline-block h-12 w-12 rounded-full space-x-5 space-y-5"
          src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8YXZhdGFyfHx8fHx8MTcxMzUyNDU"
          alt="Dan_Abromov"
        />
        <div className="ml-4">
          <span className="flex flex-col">
            <span className="text-sm font-bold text-gray-900">Good Morning Oguz</span>
            <span className="text-sm font-medium text-gray-500">Here are your stats for Today, 09 Aug 2024</span>
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4 absolute right-5">
        <button
          className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <Calendar className="h-5 w-5 bg-cyan-200" aria-hidden="true" />
          <span className="mx-2 text-sm font-medium text-slate-950">Today</span>
        </button>
        <p className="text-sm font-medium text-gray-400 border-spacing-7">Compared</p>
        <select className="block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-black ">
          <option value="period">Previous Period</option>
          <option value="period">Period</option>
          <option value="Further Period">Further Period</option>
        </select>
      </div>
    </div>
  );
}

export default Tabs;
