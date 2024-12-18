// import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const User = () => {
  let [getDetails, setGetDetails] = useState([]);

  // let fetchDetails = async () => {
  //   try {
  //     const { data } = await axios.get("http://TYSS-uma:8080/getAllUser", {
  //       timeout: 10000, // Optional: Increase timeout to 10 seconds
  //     });
  //     console.log("Data fetched successfully:", data);
  //     setGetDetails(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDetails();
  // }, []);

  // console.log(getDetails);

  let fetchDetails = async () => {
    let response = await fetch("http://TYSS-uma:8080/getAllUser");
    let data = await response.json();
    console.log(data);
    setGetDetails(data)
  };
  
  useEffect(() =>{
    fetchDetails()
  },[getDetails.length])

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          User Details
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {getDetails?.map((values) => {
            return (
              <div
                key={values.id}
                className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105"
              >
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  {values.name || values.userName}
                </h2>
                <p className="text-gray-500 mb-1">Email: {values.email}</p>
                <p className="text-gray-500 mb-4">
                  Password: {values.password}
                </p>
                <div className="flex items-center space-x-4">
                  <NavLink
                    to="#"
                    className="text-blue-500 hover:text-blue-600 font-medium transition"
                    state={values}
                  >
                    View more
                  </NavLink>
                  <NavLink
                    to="#"
                    className="text-green-500 hover:text-green-600 font-medium transition"
                  >
                    Update
                  </NavLink>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded transition">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default User;
