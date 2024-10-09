"use client";
import Link from "next/link";
import React from "react";

const ProfileManagement = () => {
  const logout = async () => {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.href = "/login";
    } else {
      console.error("Failed to delete the cookie");
    }
  };
  return (
    <div className="border border-gray-200 p-4 col-span-12 xl:col-span-4 h-max">
      <h2 className="text-2xl font-bold">Quản lý cá nhân</h2>
      <div className="flex flex-col gap-5 mt-10">
        <Link href="/change-password">
          <p>Thay đổi mật khẩu</p>
        </Link>
        <hr />
        <p className="cursor-pointer" onClick={() => logout()}>
          Thoát
        </p>
      </div>
    </div>
  );
};

export default ProfileManagement;
