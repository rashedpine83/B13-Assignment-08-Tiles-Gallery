"use client";

import { ProfileUpdate } from "@/components/ProfileUpdate";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {

  const { data, isPending } = authClient.useSession();
  const user = data?.user;


  return (
    <div className=" max-w-2xl mx-auto border mt-10 rounded-2xl">

      <div className="flex flex-col items-center p-6 gap-4  py-10">

        <Avatar className="w-32 h-32">
            <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer" />
            <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>

        <h2 className="text-3xl font-bold">{user?.name}</h2>
        <p className="text-gray-500">{user?.email}</p>
        <ProfileUpdate></ProfileUpdate>
      </div>

    </div>
  );
};

export default ProfilePage;