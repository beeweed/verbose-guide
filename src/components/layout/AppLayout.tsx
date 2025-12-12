import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#f3f2ef] font-sans">
      <Navbar />
      <main className="container mx-auto px-0 md:px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
