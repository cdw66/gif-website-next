import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const RegisterForm = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log(userData);

      // Post userData from form to custom api endpoint
      await axios.post("/api/register", userData);
      // Redirect to profile page
      router.replace("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-sm">
        <label className="font-bold">Username:</label>
        <input
          className="mb-2 border-2"
          type="text"
          name="username"
          onChange={(e) => handleChange(e)}
          required
        />

        <label className="font-bold">Email:</label>
        <input
          className="mb-2 border-2"
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          required
        />

        <label className="font-bold">Password:</label>
        <input
          className="mb-2 border-2"
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          required
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
