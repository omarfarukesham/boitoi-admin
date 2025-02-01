import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/store/store";
import { toggle } from "@/feature/toggle/toggleSlice";
import avatar from "../../assets/images/avatar.png";

const Topbar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state: RootState) => state.toggle.value);

  const toggleSidebar = () => {
    dispatch(toggle());
  };

  const handleLogin = () => {
    alert("Login is coming");
  };

  return (
    <div className="w-full h-16 bg-primary md:bg-bg-color-2 text-white md:text-black flex items-center justify-between  pl-2 pr-4 shadow-md">
      <button
        className="p-2 hover:bg-gray-100 rounded-md"
        onClick={toggleSidebar}
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isSidebarOpen
                ? "M4 6h16M4 12h16M4 18h16"
                : "M4 6h16M4 12h16M4 18h7"
            }
          />
        </svg>
      </button>

      <div className="flex items-center gap-5">
        <p>omar.lu86@gmail.com</p>
        <button className="p-1 bg-gray-3 rounded-full" onClick={handleLogin}>
          <img src={avatar} alt="User Avatar" className="w-6 h-6 rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;

