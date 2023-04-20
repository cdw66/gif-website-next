import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    // <div >
    <nav className="bg-slate-500 p-6 flex justify-between">
      <Link href="/">Gif Website</Link>
      <div>
        {status === "authenticated" ? (
          <>
            <Link href="/profile" className="ml-2 underline cursor-pointer">
              Profile
            </Link>
            <button
              onClick={() => {
                // Redirect user to home to avoid flicker
                router.push("/");
                // Sign the user out
                signOut({
                  redirect: false,
                  // callbackUrl: "/",
                });
              }}
              className="ml-2 underline cursor-pointer"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="ml-2 underline cursor-pointer">
              Log In
            </Link>
            <Link href="/register" className="ml-2 underline cursor-pointer">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
    // </div>
  );
};

export default Navbar;
