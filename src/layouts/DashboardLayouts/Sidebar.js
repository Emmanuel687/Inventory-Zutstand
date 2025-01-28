'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navigationItems = [
  {
    href: '/',
    label: 'Home',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#326FD2"  // Blue
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-200 hover:stroke-blue-700"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    href: '/inventory',
    label: 'Inventory',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#DC2626"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-200 hover:stroke-red-700"
      >
        <path d="M2 3h20v4H2z" />
        <path d="M4 7v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7" />
        <path d="M12 12v6" />
        <path d="M8 12v6" />
        <path d="M16 12v6" />
      </svg>
    )
  }
];
export default function Sidebar() {
  // State Start
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // State End

  // Toggle SideBar Start
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  // Toggle SideBar End

  return (
    <>
      {/* Mobile Menu Burger Start */}
      <div
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-[#B0B0B0]"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </div>
      {/* Mobile Menu Burger End */}


      {/* Sidebar Start*/}
      <aside className={` fixed lg:relative w-64 bg-white border-r border-gray-100 h-screen flex flex-col transform transition-transform duration-300 ease-in-out  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} z-40 `}>
        \{/* Logo Section Start */}
        <div className="px-6 py-4 flex items-center">
          <div className="flex items-center gap-2">
            {/* Logo Icon Start */}
            <div className="relative">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div className="absolute top-0 -right-1 h-full flex">
                <div className="w-[1px] h-full bg-black"></div>
                <div className="w-[1px] h-full bg-red-600"></div>
                <div className="w-[1px] h-full bg-green-600"></div>
              </div>
            </div>
            {/* Logo Icon End */}

            {/* Brand Text Start */}
            <div className="flex flex-col">
              <p className="text-sm font-bold text-gray-900">eProducts</p>
              <p className="text-[10px] text-gray-500">Inventory System</p>
            </div>
            {/* Brand Text End */}
          </div>
        </div>
        {/* Logo Section End */}

        {/* Sidebar Navigation URL Start */}
        <nav className="mt-6 flex-grow">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center px-6 py-3 text-[#1e1e1e] hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.icon}
                  <span className="ml-2 text-[13.6px]">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Sidebar Navigation URL End */}

        {/* Logout Section Start */}
        <div className="mt-auto border-t border-gray-100">
          <Link
            href="/settings"
            className="flex items-center px-6 py-4 text-[#1e1e1e] hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span className="ml-2 text-[13.6px]">Logout</span>
          </Link>
        </div>
        {/* Logout Section End */}
      </aside>
      {/* Sidebar End*/}



      {/* Mobile Overlay Start */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      {/* Mobile Overlay End */}

    </>
  );
}