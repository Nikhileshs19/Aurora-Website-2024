// Navbar.js

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [userdata, setUserdata] = useState({});
  // console.log("response", userdata)

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/login/success", {
        withCredentials: true,
      });

      setUserdata(response.data.user);
    } catch (error) {
      console.log("error", error);
    }
  };

  //logout
  const logout = () => {
    window.open("http://localhost:8080/logout", "_self");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="mt-6 flex items-center justify-center align-center gap-x-6">
  {Object?.keys(userdata)?.length > 0 ? (
    <>
      <button
        onClick={logout}
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-md font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Log out
      </button>
      {/* Additional buttons for other actions */}
    </>
  ) : (
    <button
      onClick={(event) => (window.location.href = "/login")}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Log in
    </button>
  )}
</div>

  );
};

export default Navbar;