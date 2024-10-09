import React from "react";
import ChangePasswordForm from "./components/ChangePasswordForm";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const ChangePasswordPage = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("user_info");
  const user: any = jwt.decode(token?.value ?? "");
  return (
    <>
      <h3 className="text-center font-bold text-[var(--login-btn)] text-xl">
        ĐỔI MẬT KHẨU
      </h3>
      <ChangePasswordForm user={user} />
    </>
  );
};

export default ChangePasswordPage;
