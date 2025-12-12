import { Search, Home, Users, Briefcase, MessageSquare, Bell, User, Grid } from 'lucide-react';
import { Input } from "../ui/input";
import { Link, NavLink } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto px-4 h-[52px] flex items-center justify-between">
        {/* Logo and Search */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/" className="text-[#0a66c2]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.6-1.93-1.84-1.93-1.35 0-2.16 1-2.16 2.31V19H9V10h3v1.28c.84-1.22 2.22-1.74 3.79-1.74 2.52 0 3.21 1.63 3.21 4.54z"/>
            </svg>
          </Link>
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-9 w-[280px] bg-[#eef3f8] border-none focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-black/50 focus-visible:w-[380px] transition-all h-[34px]"
            />
          </div>
           <div className="md:hidden">
            <Search className="text-gray-600 w-6 h-6" />
           </div>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center gap-1 sm:gap-6 md:gap-7 h-full">
          <NavItem icon={<Home className="w-6 h-6" />} label="Home" to="/" />
          <NavItem icon={<Users className="w-6 h-6" />} label="My Network" to="/network" />
          <NavItem icon={<Briefcase className="w-6 h-6" />} label="Jobs" to="/jobs" />
          <NavItem icon={<MessageSquare className="w-6 h-6" />} label="Messaging" to="/messaging" />
          <NavItem icon={<Bell className="w-6 h-6" />} label="Notifications" to="/notifications" />
          <div className="border-l border-gray-300 pl-6 hidden md:flex items-center gap-6 h-full py-1">
             <div className="flex flex-col items-center justify-center cursor-pointer group h-full relative px-2 min-w-[80px]">
                <div className="text-gray-500 group-hover:text-black">
                     <Grid className="w-6 h-6" />
                </div>
                <span className="text-[12px] hidden md:block mt-0.5 text-gray-500 group-hover:text-black">For Business</span>
             </div>
             <Link to="/profile" className="flex flex-col items-center justify-center cursor-pointer group text-gray-500 hover:text-black">
                <User className="w-6 h-6 rounded-full bg-gray-200 p-0.5" />
                <span className="text-xs hidden md:block mt-0.5">Me</span>
             </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ icon, label, to }: { icon: React.ReactNode, label: string, to: string }) {
  return (
    <NavLink to={to} className={({ isActive }) => `flex flex-col items-center justify-center cursor-pointer group h-full relative px-2 min-w-[80px] ${isActive ? 'border-b-2 border-black' : ''}`}>
      {({ isActive }) => (
        <>
            <div className={`text-gray-500 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white transition-colors ${isActive ? 'text-black dark:text-white' : ''}`}>
                {React.cloneElement(icon as React.ReactElement<any>, { strokeWidth: isActive ? 2.5 : 1.5 })}
            </div>
            <span className={`text-[12px] hidden md:block mt-0.5 ${isActive ? 'text-black font-medium' : 'text-gray-500 group-hover:text-black'}`}>{label}</span>
        </>
      )}
    </NavLink>
  )
}
