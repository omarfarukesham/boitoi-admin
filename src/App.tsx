import { Outlet } from "react-router";
// import Navbar from "./pages/nav/Navbar";
import { Suspense } from "react";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import Topbar from "./pages/nav/Topbar";
import Navbar from "./pages/nav/navbar";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
    <div className="h-screen flex overflow-hidden">
      <Navbar />
      <div className="flex-1 flex flex-col w-full md:w-[calc(100%-250px)]">
        <div className="sticky top-0 z-50">
          <Topbar />
        </div>
        <div className="flex-1 overflow-y-auto bg-gray-1">
          <div className="p-4">
            <Suspense fallback={<LoadingSpinner text="Loading your content" className={undefined} />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
