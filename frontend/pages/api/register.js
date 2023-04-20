import axios from "axios";
// import { setCookie } from "nookies";
// import { signIn } from "next-auth/react";

export default async function handler(req, res) {
  // Get user data from request
  const { username, email, password } = req.body;
  // console.log(req);

  try {
    // Post to Strapi registration API endpoint
    await axios.post(`${process.env.STRAPI_API}/auth/local/register`, {
      username,
      email,
      password,
    });
    // Set server-side cookie as "jwt"
    // setCookie({ res }, "jwt", response.data.jwt, {
    //   httpOnly: true,
    //   secure: false,
    //   maxAge: 30 * 24 * 60 * 60, // TODO: process.env.NODE_ENV !== 'development'
    //   path: "/", // Set cookie on root path, it will be returned with every request
    // });

    // console.log(response);
    res.status(200).send();

    //TODO: Add logic to sign in via Next-Auth with credentials

    // Handle errors
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
    // console.log(err);
  }

  //   try {
  //     const result = await signIn("credentials", {
  //       redirect: false,
  //       username: userData.username,
  //       password: userData.password,
  //     });
  //     if (result.ok) {
  //       // res.status(200).end();
  //       router.replace("/profile");
  //       console.log(result);
  //     } else {
  //       alert("Invalid credentials");
  //     }
  //     // await axios.post("/api/login", userData);
  //     // router.replace("/profile");
  //   } catch (err) {
  //     // res.status(400).send(err);
  //     console.log(err);
  //   }
}
