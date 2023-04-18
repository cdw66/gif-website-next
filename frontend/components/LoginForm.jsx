import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/login", userData);
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

        <label className="font-bold">Password:</label>
        <input
          className="mb-2 border-2"
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
          required
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
