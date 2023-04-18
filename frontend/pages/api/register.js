import axios from "axios";
import { setCookie } from "nookies";

export default async function handler(req, res) {
  // Get user data from request
  const { username, email, password } = req.body;
  // console.log(req);

  try {
    // Post to Strapi registration API endpoint
    const response = await axios.post(
      "http://127.0.0.1:1337/api/auth/local/register",
      {
        username,
        email,
        password,
      }
    );

    // Set server-side cookie as "jwt"
    setCookie({ res }, "jwt", response.data.jwt, {
      httpOnly: true,
      secure: false,
      maxAge: 30 * 24 * 60 * 60, // TODO: process.env.NODE_ENV !== 'development'
      path: "/", // Set cookie on root path, it will be returned with every request
    });

    res.status(200).end();

    // Handle errors
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
    // console.log(err);
  }
}
