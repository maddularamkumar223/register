import axios from "axios";
import { useState } from "react";

const Form = () => {
  let [details, setDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  let { name, email, mobile, password } = details;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    let payload = { name, email, mobile, password };
    await axios.post("http://TYSS-uma:8080/register", payload);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Enter Your Name:
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Enter Your Email:
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">
              Enter Your Mobile:
            </label>
            <input
              type="number"
              name="mobile"
              value={mobile}
              onChange={handleChange}
              id="mobile"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Mobile"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Enter Your Password:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white rounded-md font-semibold hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
