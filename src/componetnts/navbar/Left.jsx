import { NavLink } from "react-router-dom";

const Left = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg w-64">
      <div className="w-full flex justify-evenly items-center ">
        <NavLink
          to="/form"
          className="text-lg font-semibold hover:text-teal-400 transition-colors"
        >
          Add User
        </NavLink>
        <NavLink
          to="/user"
          className="text-lg font-semibold hover:text-teal-400 transition-colors"
        >
          User
        </NavLink>
      </div>
    </div>
  );
};

export default Left;
