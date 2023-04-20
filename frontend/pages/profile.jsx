import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
// import nookies from "nookies";
import { useEffect } from "react";
import Link from "next/link";

import { signOut, useSession } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession();
  console.log("session", session);

  const router = useRouter();

  // useEffect(() => {
  //   if (session == null) return;
  //   // console.log("session.jwt", session.jwt);
  // }, [session]);

  // const logout = async () => {
  //   try {
  //     await axios.get("api/logout");
  //     router.push("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  //TODO: Redirect user if they type "/profile" in address bar
  // if (status != "authenticated") {
  //   router.push("/login");
  // }

  return (
    <div>
      <h1>
        {status === "authenticated" ? "Authenticated" : "Not Authenticated"}
      </h1>
      {session && (
        <div>
          <h3>Session Data</h3>
          <div>Username: {session.user.username}</div>
        </div>
      )}
      {session ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <Link href="/login">
          <button>Sign In</button>
        </Link>
      )}
      {/* <div>Username: {username}</div>
      <div>Email: {email}</div>
      <button onClick={logout}>Log Out</button> */}
    </div>
  );
};

// export const getServerSideProps = async (ctx) => {
//   const cookies = nookies.get(ctx);
//   let user = null;

//   if (cookies?.jwt) {
//     try {
//       const { data } = await axios.get("http://127.0.0.1:1337/api/users/me", {
//         headers: {
//           Authorization: `Bearer ${cookies.jwt}`,
//         },
//       });
//       user = data;
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   if (!user) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/",
//       },
//     };
//   }

//   return {
//     props: {
//       user,
//     },
//   };
// };

export default Profile;
