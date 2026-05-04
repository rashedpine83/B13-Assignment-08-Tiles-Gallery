"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { HiMenu } from "react-icons/hi";


const Navbar = () => {

  const userData =authClient.useSession();
  const user = userData.data?.user
  
  const handleSignOut = async() => {
    await authClient.signOut()
  }

  return (
    <div className="px-2 shadow">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">

        {/* Mobile Dropdown start */}
        <div className="dropdown md:hidden relative">
          
          <label tabIndex={0} className="btn btn-ghost">
            <HiMenu className="text-2xl" />
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52 z-9"
          >
           <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-tiles"}>All Tiles</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>My Profile</NavLink>
          </li>
          </ul>
        </div>
        {/* Mobile Dropdown end */}
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

        <div className="navbar-center hidden md:flex">
          <ul className="flex items-center gap-5 text-[16px] font-semibold">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-tiles"}>All Tiles</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>My Profile</NavLink>
          </li>
        </ul>
        </div>

        <div>
          {!user && <ul className="flex items-center gap-3">
            <li>
              <Link href={"/signup"}><Button variant="secondary">SignUp</Button></Link>
            </li>
            <li>
              <Link href={"/signin"}><Button variant="secondary">SignIn</Button></Link>
            </li>
          </ul>}
          {user && <div className="flex justify-center items-center gap-2">
            <p>{user?.name}</p>
            <Avatar>
              <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
              <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
            </Avatar>
            <Button onClick={handleSignOut} variant="danger">Sign Out</Button>
          </div>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;