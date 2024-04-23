import React from 'react';
import { BarChart3Icon, MessagesSquare, MessageSquareMore, LayoutDashboard, MessageSquare, SquareEqual, CircleDashed, Clipboard } from 'lucide-react';
import { Search } from 'lucide-react';


const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
      <a href="#">
        <img className='mb-6 w-60 h-50 mr-4' src="https://assets.website-files.com/600afabc21c1827d25ce63dd/601f0cd996ebfbac7a1d687e_Branding.svg" alt="Logo" width="40" height="46" />
      </a>
      <div className="flex items-center ml-3">
        {/* Search bar */}
        <Search className="mr-2" size={20} color="#000" />
        <input
          type="text"
          placeholder="Search..."
          className="px- py-2  border border-black bg-cyan-100 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mt-10 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6">
          <div className="space-y-3">
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <LayoutDashboard className="h-5 w-5 " aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Conversations</span>
            </a>
          </div>
          <div className="space-y-3">
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <SquareEqual className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Automations</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BarChart3Icon className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Campaigns</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <MessagesSquare className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Popups</span>
            </a>
          </div>
          <div className="space-y-3">
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <MessageSquareMore className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Live chat</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <CircleDashed className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Segment</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Clipboard className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Integration </span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
