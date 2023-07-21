"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

type Props = {};

const Profile = (props: Props) => {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    await axios.get("/api/users/logout");
    toast.success("Logout successful.");
    router.push("/login");
    try {
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/me");
    setData(res.data.data.user);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2>
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>Click me</Link>
        )}
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 mt-4text-white rounded py-2 px-4"
        onClick={() => getUserDetails()}
      >
        Get user details
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 mt-4text-white rounded py-2 px-4"
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
