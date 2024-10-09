import { cookies } from "next/headers";
import React from "react";
import jwt from "jsonwebtoken";
import LookUpForm from "./components/LookUpForm";
import { months, years, tables } from "@/data/data";
import ProfileManagement from "./components/ProfileManagement";
import FileDisplay from "./components/FileDisplay";

const UserInfoPage = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("user_info");
  const user: any = jwt.decode(token?.value ?? "");

  return (
    <div className="xl:container mx-auto min-h-screen px-4 xl:px-0 grid grid-cols-12 gap-4 mt-10">
      <div className="border border-gray-200 p-4 col-span-12 xl:col-span-8 h-max">
        <h2 className="text-2xl text-center">
          Xin chào {user?.data?.CUSTOMER_NAME} ({user?.data?.CUSTOMER_CODE})
        </h2>
        <p className="text-md text-center my-10">Tra cứu thông tin cước</p>
        <div>
          <LookUpForm
            years={years}
            months={months}
            types={tables}
            user={user}
          />
        </div>
        <FileDisplay />
      </div>
      <ProfileManagement />
    </div>
  );
};

export default UserInfoPage;
