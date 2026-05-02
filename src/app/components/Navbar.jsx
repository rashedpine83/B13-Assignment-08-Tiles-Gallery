"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
import NavLink from "./NavLink";


const Navbar = () => {
  return (
    <div className="px-2 shadow">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Link href="/">
          <Image
            src={logo}
            alt="logo"
            loading="eager"
            width={80}
            height={80}
            className="object-cover h-auto w-auto"
          />
          </Link>
          
        </div>

        <ul className="flex items-center gap-5 text-[16px] font-semibold">
          <li>
            <NavLink href={"/"}>My Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-tiles"}>All Tiles</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>My Profile</NavLink>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-3 text-sm">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;