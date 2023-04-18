import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    // <div >
    <nav className="bg-slate-500 p-6 flex justify-between">
      <Link href="/">Gif Website</Link>
      <div>
        <Link href="/login" className="ml-2 underline cursor-pointer">
          Log In
        </Link>
        <Link href="/register" className="ml-2 underline cursor-pointer">
          Register
        </Link>
      </div>
    </nav>
    // </div>
  );
};

export default Navbar;
